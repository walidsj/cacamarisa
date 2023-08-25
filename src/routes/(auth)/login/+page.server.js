import { WABOT_API_URL, WABOT_API_KEY } from '$env/static/private'
import { fail } from '@sveltejs/kit'
import axios from 'axios'
import dayjs from 'dayjs'
import generateOTP from '$lib/server/utils/generate-otp'
import { iron } from '$lib/server/utils/encryption'

/** @type {import('./$types').Actions} */
export const actions = {
    sendOtp: async ({ cookies, request }) => {
        const data = await request.formData()

        const noHp = data.get('noHp')

        const otp = generateOTP(6)
        const now = dayjs().format('HH:mm')
        const message = `Permintaan OTP Marisa Mobile pada pukul *${now}*.\n\nGunakan OTP *${otp}* untuk akun Marisa Mobile Anda. OTP akan kadaluarsa dalam waktu 2 menit.\n\nPerhatian! Jangan memberitahukan OTP ini kepada siapapun. Terima kasih. 🙏`

        try {
            await axios.post(
                `${WABOT_API_URL}/send-message`,
                { number: noHp, message: message },
                { headers: { Authorization: `Bearer ${WABOT_API_KEY}` } }
            )

            const sealed = await iron.seal({
                noHp,
                expiredAt: dayjs().add(2, 'minutes').valueOf(),
                otp,
                action: 'otp',
            })

            cookies.set('session', sealed, { path: '/' })

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
