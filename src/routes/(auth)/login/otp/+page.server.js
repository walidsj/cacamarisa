import User from '$lib/server/models/user'
import CryptoJS from 'crypto-js'
import { ENCRYPT_KEY, WABOT_API_URL, WABOT_API_KEY } from '$env/static/private'
import dayjs from 'dayjs'
import { fail } from '@sveltejs/kit'
import axios from 'axios'

/** @type {import('./$types').Actions} */
export const actions = {
    sendOtp: async ({ cookies, request }) => {
        const data = await request.formData()

        const noHp = data.get('noHp')

        //   const user = await User.get({ noHp })
        //   if (!user)
        //       return fail(422, {
        //           message: 'Nomor telepon/handphone tidak terdaftar',
        //       })

        const otp = Math.floor(100000 + Math.random() * 900000)
        const expiredAt = dayjs().add(2, 'minute')

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

            const encryptedNoHp = CryptoJS.AES.encrypt(
                noHp,
                ENCRYPT_KEY
            ).toString()

            cookies.set('log_session', encryptedNoHp, { path: '/' })

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
