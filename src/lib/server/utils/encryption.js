import Iron from '@hapi/iron'
import CryptoJS from 'crypto-js'
import { ENCRYPT_KEY } from '$env/static/private'

const iron = {
    encrypt: async (obj) => {
        try {
            return await Iron.seal(obj, ENCRYPT_KEY, Iron.defaults)
        } catch (err) {
            throw err
        }
    },
    decrypt: async (sealed) => {
        try {
            return await Iron.unseal(sealed, ENCRYPT_KEY, Iron.defaults)
        } catch (err) {
            throw err
        }
    },
}
const aes = {
    encrypt: (obj) => {
        return CryptoJS.AES.encrypt(JSON.stringify(obj), ENCRYPT_KEY).toString()
    },
    decrypt: async (sealed) => {
        return JSON.parse(
            CryptoJS.AES.decrypt(sealed, ENCRYPT_KEY).toString(
                CryptoJS.enc.Utf8
            )
        )
    },
}

export { iron, aes }
