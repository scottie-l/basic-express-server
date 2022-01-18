'use strict';

// Sends a 500/Server Error message as the response
// Import this into your server and set it up to be “used” as the last route
// 500 if no name in query string
// 200 if name in query string; correct output in query string

function serverError(err, req, res, next) {
    console.error(req.method, req.path, 'OOPs! Its not you, its me');
    console.log(err.message);
    res.status(500).send('Server Error');
}

module.exports = serverError;
