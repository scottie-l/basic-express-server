'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const req = supertest(server.app);

describe('Testing the create Message function', () => {

    it('Should create a new message and send it back in the response', async () => {
        const res = await (await req.post('/message')).send({
            text: 'test',
            author: 'test',
        });

        expect(res.status).toEqual(200);
        expect(res.body.text).toEqual('test');
    });

    it('Should reeturn a 404 status if no text or author  is present', async () => {
        let res = await req.post('/message');

        expect(res.status).toEqual(400);
        expect(res.text).toEqual('Bad Request');
    });
});
