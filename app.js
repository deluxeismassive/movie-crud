const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 8080
const routes = require('./routes.js')
const path = require('path')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/', routes)
app.use(express.static(path.join(__dirname, 'public')))


app.listen(port)
