import User from "../models/UserModel.js"

// these controller functions are the handler functions (callback functions) that are specified in the routing meethods in authRoutes.js

export const register = async (req, res, next) => {
    const { username, email, password, location } = req.body;
    try {
        const user = await User.create(req.body);
        const token = user.createJWT()
        res.status(201)
        .json({ 
            user: { 
                email: user.email,
                username: user.username,
                location: user.location
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

export const login = async (req, res, next) => {
    const customError = {
        statusCode: 401,
        msg: `Login Error` 
     }
    const { email, password } = req.body
        const user = await User.findOne({ email }).select('+password')

        if (!user) {
            next({...customError, msg: 'no user found'})
            return
        }

        const isMatchingPassword = await user.comparePassword(password)

        if (!isMatchingPassword) {
            next({...customError, msg: 'incorrect password'})
            return
        }

        const token = user.createJWT()
        user.password = undefined
        
        res.status(200).json({ user, token })
}

export const update = async (req, res) => {
    const { email, username, location } = req.body;
    if (!email || !username) {
        throw new Error('please provide all info');
    }

    const filter = { email };
    const update = { email, username, location };
    const options = { new: true };

    const user = await User.findOneAndUpdate(filter, update, options);
    res.send(user)
}

