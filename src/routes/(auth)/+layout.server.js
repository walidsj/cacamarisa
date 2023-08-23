/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies }) => {
    const token = cookies.get('access_token')

    if (token) throw redirect(307, '/app/profil')
}
