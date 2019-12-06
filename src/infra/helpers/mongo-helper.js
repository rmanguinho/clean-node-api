const { MongoClient } = require('mongodb')

module.exports = {
  async connect (uri, dbName) {
    this.uri = uri
    this.dbName = dbName
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    this.db = this.client.db(dbName)
  },

  async disconnect () {
    await this.client.close()
  },

  async getDb () {
    if (!this.client.isConnected()) {
      await this.connect(this.uri, this.dbName)
    }
    return this.db
  }
}
