const request = require('supertest')
const app = require('./app')

describe('App Setup', () => {
  test('Should disable x-powered-by header', async () => {
    app.get('/test_x_powered_by', (req, res) => {
      res.send('')
    })

    const res = await request(app).get('/test_x_powered_by')
    expect(res.headers['x-powered-by']).toBeUndefined()
  })
})
