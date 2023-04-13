import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a valid name'],
        minLength: 2,
        maxLength: 15,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please enter a valid email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minLength: 3,
        trim: true,
        select: false
    }
})

UserSchema.pre('save', async function (next) {
    try {
        const salted = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salted);
        next()
    } catch (err) {
        next(err)
    }
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
}

UserSchema.methods.comparePassword = async function (currPassword) {
    const isAMatch = await bcrypt.compare(currPassword, this.password)
    return isAMatch
}

export default mongoose.model('User', UserSchema);