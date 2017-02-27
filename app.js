const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 8080
const routes = require('./routes.js')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use('/routes', routes)


app.listen(port)
