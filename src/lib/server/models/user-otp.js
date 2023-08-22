import mongoose, { SchemaTypes } from 'mongoose'

const UserOtp = new mongoose.Schema(
    {
        noHp: {
            type: SchemaTypes.String,
        },
        otp: {
            type: SchemaTypes.String,
            unique: true,
        },
        expiredAt: {
            type: SchemaTypes.String,
        },
        action: {
            type: SchemaTypes.String,
        },
    },
    {
        collection: 'userOtp',
        timestamps: true,
        strict: true,
    }
)

export default mongoose.models.UserOtp || mongoose.model('UserOtp', UserOtp)
