import User from '$lib/server/models/user'
import { WABOT_API_URL, WABOT_API_KEY } from '$env/static/private'
import dayjs from 'dayjs'
import { fail, redirect } from '@sveltejs/kit'
import axios from 'axios'
import { iron } from '$lib/server/utils/encryption'
import generateOTP from '$lib/server/utils/generate-otp'
import jwt from 'jsonwebtoken'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies }) => {
    const session = cookies.get('session')

    const { noHp, expiredAt } = await iron.unseal(session)

    return { noHp, expiredAt }
}

/** @type {import('./$types').Actions} */
export const actions = {
    resendOtp: async ({ cookies }) => {
        const session = cookies.get('session')

        const { noHp } = await iron.unseal(session)

        const otp = generateOTP(6)
        const now = dayjs().format('HH:mm')
        const message = `Permintaan OTP Marisa Mobile pada pukul *${now}*.\n\nGunakan OTP *${otp}* untuk akun Marisa Mobile Anda. OTP akan kadaluarsa dalam waktu 2 menit.\n\nPerhatian! Jangan memberitahukan OTP ini kepada siapapun. Terima kasih. 🙏`

        try {
            await axios.post(
                `${WABOT_API_URL}/send-message`,
                { number: noHp, message: message },
                { headers: { Authorization: `Bearer ${WABOT_API_KEY}` } }
            )

            const expiredAt = dayjs().add(2, 'minutes').valueOf()
            const sealed = await iron.seal({
                noHp,
                expiredAt,
                otp,
                action: 'otp',
            })

            cookies.set('session', sealed, { path: '/' })

            return {
                message: `Kode OTP telah dikirim kembali ke nomor ${noHp}, silahkan cek pesan masuk whatsapp Anda.`,
                expiredAt,
            }
        } catch (err) {
            return fail(422, {
                message: err.response?.data?.message,
                errors: err.response?.data?.errors,
            })
        }
    },
    login: async ({ cookies, request }) => {
        const session = cookies.get('session')

        if (!session)
            return fail(422, {
                message: 'Anda belum meminta kode OTP',
            })

        const { noHp, otp, expiredAt } = await iron.unseal(session)

        const data = await request.formData()
        const otpInput = data.get('otp')

        if (Date.now() > expiredAt) {
            return fail(422, {
                message:
                    'Kode OTP telah kadaluarsa. Silakan kirim ulang kode OTP Anda',
            })
        }

        if (otpInput !== otp) {
            return fail(422, {
                message: 'Kode OTP salah',
            })
        }

        const user = await User.findOne({ noHp })
        if (!user) {
            const sealed = await iron.seal({
                noHp,
                expiredAt: dayjs().add(2, 'hours').valueOf(),
                action: 'register',
            })

            cookies.set('session', sealed, { path: '/' })

            throw redirect(307, '/register')
        }

        const token = jwt.sign({}, JWT_KEY, {
            expiresIn: '30d',
            subject: user._id.toString(),
            issuer: 'marisa-mobile',
        })

        cookies.set('access_token', token, { path: '/' })
        cookies.delete('session', { path: '/' })

        throw redirect(307, '/dashboard')
    },
    cancel: async ({ cookies, request }) => {
        cookies.delete('session', { path: '/' })

        throw redirect(307, '/login')
    },
}
