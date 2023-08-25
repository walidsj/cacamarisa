import { redirect } from '@sveltejs/kit'
import jwt from 'jsonwebtoken'
import { JWT_KEY } from '$env/static/private'
import User from '$lib/server/models/user'

export const handle = async ({ event, resolve }) => {
    const { cookies } = event

    const session = cookies.get('session')

    if (event.url.pathname.startsWith('/app')) {
        if (!session) throw redirect(307, '/login')

        // try {
        //     const decoded = jwt.verify(token, JWT_KEY)
        //     if (!decoded) throw redirect(307, '/login')

        //     const user = await User.findOne({ _id: decoded.sub })
        //     if (!user) throw redirect(307, '/login')

        //     event.locals.user = user
        // } catch (err) {
        //     cookies.delete('session', { path: '/' })
        //     throw redirect(307, '/login')
        // }
    }

    return await resolve(event)
}
