import User from '$lib/server/models/user'
import { WABOT_API_URL, WABOT_API_KEY } from '$env/static/private'
import dayjs from 'dayjs'
import { fail, redirect } from '@sveltejs/kit'
import axios from 'axios'
import { aes } from '$lib/server/utils/encryption'
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
                    'Kode OTP telah kadaluarsa. Silakan masukkan kembali nomor WhatsApp dan kirim ulang kode OTP Anda',
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
