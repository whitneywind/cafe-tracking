import User from "../models/UserModel.js"

export const register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ user })
    } catch (error) {
        // gets passed on to next middleware (in this case the error-handler middleware)
        next(error)
    }
}
export const login = async (req, res) => {
    try {
        const user = await User.findOne(req.body.user);
        if (user) {
            res.status(201).json({ msg: 'user found' })
        }
    } catch (error) {
        res.status(500).json({ msg: 'there was a login error' })
    }
}

