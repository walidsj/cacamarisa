/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
    const user = locals.user

    if (!user) throw redirect(307, '/login')

    return {
        user: {
            _id: user._id.toString(),
            nama: user.nama,
            nip: user.nip,
            jabatan: user.jabatan,
            noHp: user.noHp,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
        },
    }
}
