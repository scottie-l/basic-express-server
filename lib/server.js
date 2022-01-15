'use strict';

const express = require('express');
const app = express()
// const { append } = require("express/lib/response");

const logger = require('./middleware/logger.js');
const notFound = require('./middleware/notFound.js'); //route?
const serverError = require('./middleware/serverError.js'); //route
const createMessage = require('./middleware/createMsg.js'); 
const checkRequest = require('./middleware/checkReq.js');
const badRequest = require('./middleware/badReq.js');

// server wide middlware
// put server wide things that happen always, for everything up at the top of your server config.
app.use(logger);
app.use(express.json()); //ataches JSON to a body on teh req

app.get('/', (req, res, next) => {
    res.send('Home route hit');
});

app.post('/message', checkRequest, createMessage);

// make sure you error handlers are below any middleware that would next to trigger.
app.use(serverError);
app.use(badRequest);
// any route that you want to run, but only if no other route is hit, should go at the bottom
app.use(notFound);

module.exports = {
    start: (port) => {
        app.listen(port, () => {
            console.log('server is listening on port: ' + port);
        });
    },
    app,
}

// GET method
// Path /person
// expects a query string from user with a "name" property
// When present, output JSON to the client with this shape: { name: "name provided" }
// Without a name in the query string, force a “500” error

// src/server.js which will serve as your server ‘module’ … will contain all of the module connections for the server
// Must export an object with a start() method (it should not start on it’s own) and a reference to the express app

// Create the /person route within your server.js
// This route should use the validator middleware to check the user’s input
// If valid, send a JSON object through the response with the name value in it
// i.e. {name: "fred" }
