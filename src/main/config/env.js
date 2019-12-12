module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:xxx/clean-node-api',
  tokenSecret: process.env.TOKEN_SECRET || 'secret'
}
