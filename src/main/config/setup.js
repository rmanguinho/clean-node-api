const cors = require('../middlewares/cors')

module.exports = app => {
  app.disable('x-powered-by')
  app.use(cors)
}
