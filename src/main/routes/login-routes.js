const loginRouter = require('../composers/login-router-composer')
const ExpressRouterAdapter = require('../adapters/express-router-adapter')

module.exports = router => {
  router.post('/login', ExpressRouterAdapter.adapt(loginRouter))
}
