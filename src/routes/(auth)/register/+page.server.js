import { iron } from '$lib/server/utils/encryption'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies }) => {
    const session = cookies.get('session')

    const { noHp } = await iron.unseal(session)

    return { noHp }
}
