const { app } = require('../app.js')
const {stickers} = require('../data.js')
const supertest = require('supertest')
const request = supertest(app)

it('gets the test endpoint', 
    async done => {
  
    const response = await request.get('/stickers')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({results: stickers})
    done()
})

it('gets the test endpoint', 
    async done => {
  
    const response = await request.get('/stickers/star')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({results: stickers[0]})
    done()
})

