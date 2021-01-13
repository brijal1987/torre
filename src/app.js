const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

const { port = 8000 } = require('./config')
app.use(require('morgan')('dev'))
app.use(cookieParser('secret'))
app.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./routes')

app.use('/', routes)
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

const server = app.listen(port, '0.0.0.0')
console.info(`Running on http://localhost:${port}`)

module.exports = server
