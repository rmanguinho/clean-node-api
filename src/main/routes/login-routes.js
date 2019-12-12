const loginRouter = require('../composers/login-router-composer')

module.exports = router => {
  router.post('/login', loginRouter)
}
