import mongoose from 'mongoose'

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
        trim: true
    }
})

export default mongoose.model('User', UserSchema);