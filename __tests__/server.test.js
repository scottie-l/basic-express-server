'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const req = supertest(server.app);

describe('Testing our route', () => {

    it('Should validate that the route is correct', async () => {
        const res = await req.get('/wrong?name=test');
        expect(res.status).toEqual(404);
    });
    
    it('Should validate the method is correct', async () => {
        const res = await req.post('/person?name=test');
        // expect(res.method).toEqual('get');
        expect(res.status).toEqual(404);
    });
    
    it('Should expect name if in query', async () => {
        const res = await req.get('/person?name=test');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual({ name: 'test' });
    }); 
});
