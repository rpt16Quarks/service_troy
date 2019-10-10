const request = require('supertest')
const app = require('./server/index.js');


describe('Test the root path: Integration test', () => {

  test('It should return a respones 200 to GET request', (done) => {
    request(app)
    .get('/description/1')
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(200)
      done()
    })
  });

  test('It should return product information from both collections', (done)=> {
    request(app)
    .get('/description/1')
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(res.body[0].item_number).toBe(res.body[1].item_number);
      done()
    })
  });
});