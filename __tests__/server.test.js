'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing our route', () => {

    it('Should validate that the route is correct', async () => {
        const response = await req.get('/wrong?name=test');
        expect(res.method).toEqual('get');
        expect(res.status).toEqual(404);
    });

  it('Should validate the method is correct', async () => {
        const response = await req.post('/people?name=test');
        expect(res.status).toEqual(404);
    });  
});