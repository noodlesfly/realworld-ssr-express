const express = require('express')
const { log } = console
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router/index')
const errorHandler = require('./middleware/error-handler')
require('./model')

const PORT = process.env.PORT || 3000

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())


app.use('/api', router)
app.use(errorHandler())

app.listen(PORT, () => {
    log(`server is running at http://localhost:${PORT}`)
})