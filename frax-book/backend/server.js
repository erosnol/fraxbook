const express = require('express')
require('dotenv').config() // init dotenv
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const mongoConfig = require('./config/mongoConfig')
const blogRouter = require('./routes/blogRouter')
const usersRouter = require('./routes/usersRouter')
const authRouter = require('./routes/authRouter')

const app = express()

const PORT = process.env.PORT || 4001

//* Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

//* Routers
app.use('/blog', blogRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

//* Root route for the APP
app.get('/', (req, res) => {
    res.status(200).json("Welcome to my API!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoConfig()
})
