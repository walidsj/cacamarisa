import CryptoJS from 'crypto-js'
import { ENCRYPT_KEY } from '$env/static/private'

const aes = {
    encrypt: (data) => {
        return CryptoJS.AES.encrypt(
            JSON.stringify(data),
            ENCRYPT_KEY
        ).toString()
    },
    decrypt: (encrypted) => {
        return JSON.parse(
            CryptoJS.AES.decrypt(encrypted, ENCRYPT_KEY).toString(
                CryptoJS.enc.Utf8
            )
        )
    },
}

export { aes }
