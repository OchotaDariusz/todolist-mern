import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from "./mongodb/connect.js"
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/todos', taskRoutes)

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello from backend!'
    })
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => console.log('Server has started on https://todolist-mern-app.onrender.com/'))
    } catch (err) {
        console.error(err)
    }
}

startServer()
