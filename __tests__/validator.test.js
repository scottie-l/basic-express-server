'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const { app } = require('../lib/server');
const { response } = require('express');
const request = supertest(server.app);

describe('Testing our validator function', () => {

    it('Should validate that the name key exists in query', async (req, res) => {
        const res = await app.get('/people?name=test');
        console.log(res);
        // expect(res.).toEqual('test');
        expect(res.status).toEqual(200);
    });

    it('Should send a 500 status if theres no name in the query', async () => {
        const res = await app.get('/people');
        expect(res.status).toEqual(500);
    });
});
