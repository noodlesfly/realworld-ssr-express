const express = require('express')
const { log } = console
const morgan = require('morgan')
const router = require('./router/index')
const errorHandler = require('errorhandler')
const path =require('path')
require('./model')

const PORT = process.env.PORT || 3000

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))


app.use(router)
log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler())
}

app.listen(PORT, () => {
    log(`server is running at http://localhost:${PORT}`)
})