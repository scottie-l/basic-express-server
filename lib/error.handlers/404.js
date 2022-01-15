'use strict';

// Sends a 404/Not-Found message as the response
// Import this into your server and set it up to be “used” after your other routes

// 404 on bad route; method

function notFound(req, res, next) {
    console.log('Error, no route found');
    res.status(404).send('OOPs! Nothing found');
}

module.exports = notFound;
