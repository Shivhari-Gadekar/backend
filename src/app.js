import cors from "cors"
import express from "express"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "1mb"
}))

app.use(express.urlencoded({
    extended: true,
    limit: "1mb"
}))

app.use(express.static("public"))

// routes import
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)

export default app
