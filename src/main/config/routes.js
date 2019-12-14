const router = require('express').Router()
const fg = require('fast-glob')

module.exports = app => {
  app.use('/api', router)
  fg.sync('**/src/main/routes/**.js').forEach(file => require(`../../../${file}`)(router))
}
