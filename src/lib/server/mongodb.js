import {
    MONGODB_HOST,
    MONGODB_PORT,
    MONGODB_DBNAME,
    MONGODB_USER,
    MONGODB_PASSWORD,
} from '$env/static/private'
import mongoose from 'mongoose'

const mongodb = {
    connect: () => {
        mongoose.connect(`mongodb://${MONGODB_HOST}:${MONGODB_PORT}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: MONGODB_DBNAME,
            user: MONGODB_USER,
            pass: MONGODB_PASSWORD,
            authMechanism: 'DEFAULT',
        })

        // get connection object
        const db = mongoose.connection

        // listen to error event
        db.on('error', console.error.bind(console, 'connection error:'))

        // listen to open event
        db.once('open', function () {
            console.log('connected to mongodb')
        })
    },
    disconnect: () => {
        mongoose.connection.close()

        const db = mongoose.connection

        db.on('error', console.error.bind(console, 'connection error:'))

        db.once('close', function () {
            console.log('disconnected from mongodb')
        })
    },
}

export default mongodb
