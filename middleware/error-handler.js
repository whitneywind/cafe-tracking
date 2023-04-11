export const errorHandlerMiddleware = (err, req, res, next) => {
    const defaultError = {
        statusCode: 500,
        msg: 'Something went wrong. Try again later (or don\'t)'
    }
    if (err.name === "ValidationError") {
        defaultError.statusCode = 400
        defaultError.msg = Object.values(err.errors).map(item => item.message).join('. ');
    }
    if (err.code && err.code === 11000) {
        const existingEmail = err.keyValue.email;
        defaultError.statusCode = 400
        defaultError.msg = `Email: ${existingEmail} is already registered`
    }
    // res.status(defaultError.statusCode).json({ msg: err })
    res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}