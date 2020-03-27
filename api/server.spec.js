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

// describe('POST/', () => {
//     beforeEach(async () => {
//         await knexDB('users').truncate();
//     })
//     //TEST 
//     it('should insert 2 new users}', async () => {
//         await db.add({username:'User1', password: 'password1'});
//         await db.add({username: 'User2', password: 'password2'});

//         const users = await knexDB('users');
//         expect(users).toHaveLength(2);
//     })
//     it('should return 200 ok', async () => {
//         const res = await request(server).get('/');
//         expect(res.status).toBe(200);
//         })   

// })  

describe('GET /api/jokes', () => {
    it('should return 200 ok', async () => {
        const res = await request(server).get('/api/jokes');
        expect(res.status).toBe(200);
        })   

    it('should return JSON object', async () => {
        const response = await request(server)
            .get('/api/jokes');
        expect(response.type).toMatch(/json/i);
    })
}); 