import User from '$lib/server/models/user'
import { WABOT_API_URL, WABOT_API_KEY } from '$env/static/private'
import dayjs from 'dayjs'
import { fail, redirect } from '@sveltejs/kit'
import axios from 'axios'
import { aes } from '$lib/server/utils/encryption'
import generateOTP from '$lib/server/utils/generate-otp'
import jwt from 'jsonwebtoken'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies }) => {
    const logSession = cookies.get('log_session')

    if (!logSession) throw redirect(307, '/login')

    const { noHp, expiredAt } = aes.decrypt(logSession)

    if (expiredAt < Date.now()) {
        cookies.delete('log_session', { path: '/' })
        throw redirect(307, '/login')
    }

    return { noHp, expiredAt }
}

/** @type {import('./$types').Actions} */
export const actions = {
    resendOtp: async ({ cookies }) => {
        const logSession = cookies.get('log_session')

        const { noHp } = aes.decrypt(logSession)

        const otp = generateOTP(6)
        const expiredAt = Date.now() + 2 * 60 * 1000

        const message = `Permintaan OTP Marisa Mobile pada pukul *${dayjs().format(
            'HH:mm'
        )}*.

Gunakan OTP *${otp}* untuk akun Marisa Mobile Anda. OTP akan kadaluarsa dalam waktu 2 menit (sampai pukul ${dayjs(
            expiredAt
        ).format('HH:mm')}). 
        
Perhatian! Jangan memberitahukan OTP ini kepada siapapun. Terima kasih. 🙏`

        try {
            await axios.post(
                `${WABOT_API_URL}/send-message`,
                { number: noHp, message: message },
                { headers: { Authorization: `Bearer ${WABOT_API_KEY}` } }
            )

            const encrypted = aes.encrypt({ noHp, expiredAt, otp })

            cookies.set('log_session', encrypted, { path: '/' })

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
        const logSession = cookies.get('log_session')

        if (!logSession)
            return fail(422, {
                message: 'Anda belum meminta kode OTP',
            })

        const { noHp, otp, expiredAt } = aes.decrypt(logSession)

        const data = await request.formData()
        const otpInput = data.get('otp')

        if (Date.now() > expiredAt) {
            return fail(422, {
                message:
                    'Kode OTP telah kadaluarsa. Silakan kirim ulang kode OTP Anda',
            })
        }

        if (otpInput !== otp)
            return fail(422, {
                message: 'Kode OTP salah',
            })

        const user = await User.findOne({ noHp })
        if (!user)
            return fail(422, {
                message: 'Nomor telepon/handphone tidak terdaftar',
            })

        const token = jwt.sign({}, JWT_KEY, {
            expiresIn: '30d',
            subject: user._id.toString(),
            issuer: 'marisa-mobile',
        })

        cookies.set('access_token', token, { path: '/' })
        cookies.delete('log_session', { path: '/' })

        throw redirect(307, '/dashboard')
    },
    cancel: async ({ cookies, request }) => {
        cookies.delete('log_session', { path: '/' })

        throw redirect(307, '/login')
    },
}
