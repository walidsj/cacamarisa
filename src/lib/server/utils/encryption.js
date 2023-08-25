import Iron from '@hapi/iron'
import { ENCRYPT_KEY } from '$env/static/private'

const iron = {
    seal: async (obj) => {
        try {
            return await Iron.seal(obj, ENCRYPT_KEY, Iron.defaults)
        } catch (err) {
            throw err
        }
    },
    unseal: async (sealed) => {
        try {
            return await Iron.unseal(sealed, ENCRYPT_KEY, Iron.defaults)
        } catch (err) {
            throw err
        }
    },
}

export { iron }
