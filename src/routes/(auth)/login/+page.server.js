import User from '$lib/server/models/user'
import { WABOT_API_URL, WABOT_API_KEY } from '$env/static/private'
import { fail, redirect } from '@sveltejs/kit'
import axios from 'axios'
import dayjs from 'dayjs'
import generateOTP from '$lib/server/utils/generate-otp'
import { aes } from '$lib/server/utils/encryption'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ cookies }) => {
    const logSession = cookies.get('log_session')

    if (logSession) {
        const { expiredAt } = aes.decrypt(logSession)

        if (expiredAt > Date.now()) {
            throw redirect(307, '/login/otp')
        } else {
            cookies.delete('log_session', { path: '/' })
        }
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    sendOtp: async ({ cookies, request }) => {
        const data = await request.formData()

        const noHp = data.get('noHp')

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
                message: `Kode OTP telah dikirim ke nomor ${noHp}, silahkan cek pesan masuk whatsapp Anda.`,
            }
        } catch (err) {
            return fail(422, {
                message: err.response?.data?.message,
                errors: err.response?.data?.errors,
            })
        }
    },
}
