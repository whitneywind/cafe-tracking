import User from "../models/UserModel.js"

// these controller functions are the handler functions (callback functions) that are specified in the routing meethods in authRoutes.js

export const register = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create(req.body);
        const token = user.createJWT()
        res.status(201)
        .json({ 
            user: { 
                email: user.email,
                username: user.username
            }, 
            token
        })
    } catch (error) {
        // gets passed on to next middleware (in this case the error-handler middleware)
        if (!username || !email || !password) {
            const customError = {
               statusCode: 400,
               msg: `missing input` 
            }
            next(customError)
        } else {
            next(error)
        }
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

