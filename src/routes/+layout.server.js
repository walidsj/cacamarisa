import mongodb from '$lib/server/mongodb.js'
import { dev } from '$app/environment'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

dayjs.locale('id')

export const load = async ({ request, cookies }) => {
    //  if (dev) {
    //      mongodb.disconnect()
    //  }
    mongodb.connect()
}
