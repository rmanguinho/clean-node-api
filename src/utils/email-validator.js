const validator = require('validator')

module.exports = class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
}
