import { redirect } from '@sveltejs/kit'
import { iron } from '$lib/server/utils/encryption'
import dayjs from 'dayjs'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies, url, locals }) => {
    const session = cookies.get('session')

    if (!session) {
        if (url.pathname !== '/login') throw redirect(307, '/login')
        return
    }

    const { expiredAt, action } = await iron.unseal(session)

    if (expiredAt > dayjs().valueOf()) {
        switch (action) {
            case 'otp':
                if (url.pathname !== '/login/otp')
                    throw redirect(307, '/login/otp')
                break
            case 'register':
                if (url.pathname !== '/register')
                    throw redirect(307, '/register')
                break
            case 'logged_in':
                throw redirect(307, '/app/profil')
        }
    } else {
        cookies.delete('session', { path: '/' })
    }
}
