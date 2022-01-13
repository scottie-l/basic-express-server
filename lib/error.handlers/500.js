'use strict';

// Sends a 500/Server Error message as the response
// Import this into your server and set it up to be “used” as the last route

function serverError(err, req, res, next) {
    console.error('OOPs! Its not you, its me');
    console.log(err);
    res.status(500).send('Server Error');
}

module.exports = serverError;
