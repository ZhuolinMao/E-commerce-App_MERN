import mongoose from 'mongoose'

const userSchema = mogoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    {
        timestamps: ture
    }
)

const User = mongoose.model('User', userSchema)

export default User