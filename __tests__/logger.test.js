// 'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const request = supertest(server.app);

// describe('Test will run neccessary checks for logger function', () => {

//     it('Should log method used from the request', async () => {
//         const response = await req.get('/');
//         expect(res.status).toEqual('200');
//     });
// });

describe('Testing the returned object', () => {

    it('Should return the proper object', async () => {
        const response = await req.get('/people?name=test');
        expect(res.body.name).toEqual('test');
    });  
});