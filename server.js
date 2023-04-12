import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

import connectDB from './database/connect.js'

// routers
import authRouter from './routes/authRoutes.js'
import cafeRouter from './routes/cafeRoutes.js'

// middleware imports
import { notFoundMiddleware } from './middleware/not-found.js'
import { errorHandlerMiddleware } from './middleware/error-handler.js'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('welcome to the server')
})

app.get('/api/v1', (req, res) => {
    res.json({ msg: 'this is /api/v1' })
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/cafes', cafeRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server is listening on port: ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();
