'use strict';

const express = require('express');
const app = express()
// const { append } = require("express/lib/response");

const validator = require('./middleware/validator.js');
const logger = require('./middleware/logger.js');
const notFound = require('./error.handlers/404.js');
const serverError = require('./error.handlers/500.js');

app.use(logger); // Import this into your server and set it up to run at the application level for all routes
app.use(validator); // Import this into your server and set it up to run at the application level for all routes

// routes
app.get('/person', (req, res, next) => {
    res.send({ name: req.query.name });
});

app.use(notFound); // Import this into your server and set it up to be “used” after your other routes
app.use(serverError); // Import this into your server and set it up to be “used” as the last route

module.exports = {
    start: (port) => {
        app.listen(port, () => {
            console.log('server is listening on port: ' + port);
        });
    },
    app,
}

// src/server.js which will serve as your server ‘module’ … will contain all of the module connections for the server
// Must export an object with a start() method (it should not start on it’s own) and a reference to the express app

// Create the /person route within your server.js
// This route should use the validator middleware to check the user’s input
// If valid, send a JSON object through the response with the name value in it
// i.e. {name: "fred" }

// GET method
// Path /person
// expects a query string from user with a "name" property
// When present, output JSON to the client with this shape: { name: "name provided" }
// Without a name in the query string, force a “500” error

