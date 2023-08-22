import mongoose, { SchemaTypes } from 'mongoose'

const User = new mongoose.Schema(
    {
        nama: {
            type: SchemaTypes.String,
        },
        satkerId: {
            type: SchemaTypes.ObjectId,
        },
        nirp: {
            type: SchemaTypes.String,
        },
        nik: {
            type: SchemaTypes.String,
        },
        jabatan: {
            type: SchemaTypes.String,
        },
        noHp: {
            type: SchemaTypes.String,
            unique: true,
        },
        email: {
            type: SchemaTypes.String,
            unique: true,
        },
        status: {
            type: SchemaTypes.String,
            enums: ['PNS', 'PPPK', 'PPNPN', 'Polri', 'TNI'],
        },
        role: {
            type: [SchemaTypes.String],
            default: ['user'],
        },
    },
    {
        collection: 'user',
        timestamps: true,
        strict: true,
    }
)

export default mongoose.models.User || mongoose.model('User', User)
