'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const req = supertest(server.app);
const consoleSpy = jest.spyOn(console, 'log').mockImplementation(); //Kristian Esvelt helped me with this. Lines 6, 9, 10 & 16. and description on how they work.

describe('Test will run neccessary checks for logger function', () => {
    beforeEach(() => {
        consoleSpy.mockClear();
    })
    it('Should log method used from the request', async () => {
        const res = await req.get('/person?name=test');
        expect(res.status).toEqual(200);
        expect(consoleSpy).toHaveBeenLastCalledWith('GET', '/person');
    }); 
});
