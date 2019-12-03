module.exports = {
  token: 'any_token',

  sign (id, secret) {
    return this.token
  }
}
