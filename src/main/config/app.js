const express = require('express')
const app = express()
const setupApp = require('./setup')

setupApp(app)

module.exports = app
