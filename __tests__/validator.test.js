'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const req = supertest(server.app);

describe('Testing our validator function', () => {

    it('Should validate that the name key exists in query', async () => {
        const res = await req.get('/person?name=test');
        // console.log(res);
        expect(res.status).toEqual(200);
    });

    it('Should send a 500 status if theres no name in the query', async () => {
        const res = await req.get('/person');
        expect(res.status).toEqual(500);
    });
});
