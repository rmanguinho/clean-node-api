module.exports = {
  isValid: true,
  value: '',
  hash: '',

  async compare (value, hash) {
    this.value = value
    this.hash = hash
    return this.isValid
  }
}
