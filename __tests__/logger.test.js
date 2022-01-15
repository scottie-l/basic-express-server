'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const req = supertest(server.app);
const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Test will run neccessary checks for logger function', () => {
    beforeEach(() => {
        consoleSpy.mockClear();
    })
    it('Should log method used from the request', async () => {
        const res = await req.get('/person?name=test');
        // console.log('string', consoleSpy);
        expect(res.status).toEqual(200);
        expect(consoleSpy).toHaveBeenLastCalledWith('GET', '/person');
    });
// });

// describe('Testing the returned object', () => {

    // it('Should return the proper object', async () => {
    //     const res = await req.get('/people?name=test');
    //     expect(res.body.name).toEqual('test');
    // });  
});
