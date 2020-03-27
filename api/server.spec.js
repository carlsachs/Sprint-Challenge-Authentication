const request = require('supertest');

const server = require('./server.js');

describe('POST /api/auth/register', () => {
    it('should be able to add user to database', async () => {
        return response = await request(server)
            .post('/api/auth/register')
            .send({
                username: `testuser ${Date.now()}`,
                password: "test"
            })
            .then(response => {
                expect(response.status).toBe(201);
            })
    });

    it('must fail validation without both username and password', () => {
        return request(server)
            .post('/api/auth/register')
            .send({
                username: 'testing'
            })
            .then(response => {
                expect(response.status).toBe(400);
            })
    });
});


describe('POST /api/auth/login', function(){

    it('Should return a status 200', async function(){
        const res = await request(server)
        .post('/api/auth/login')
        .send({ username: "Carlton", password: "Banks" })
        expect(res.status).toBe(200)
    })

    it('Should return with JSON', async function(){
        const res = await request(server)
        .post('/api/auth/login')
        .send({ username: "Carlton", password: "Banks" })
        expect(res.type).toMatch(/json/i)
    })
})


 
describe('GET /api/jokes', function() {
    it('Should return with JSON', async function(){
    const res = await request(server)
    .get('/api/jokes')
    expect(res.type).toMatch(/json/i)
})

it('Should return objects', async function(){
    const res = await request(server)
    .post('/api/jokes')
    expect(typeof res.body).toBe("object")
})
})
