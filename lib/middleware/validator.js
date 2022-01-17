'use strict';

// Checks the query string for a name property
// Sends the request through when valid, forces an error when not

function validator(req, res, next) {
    if(req.query.name) {
        next()
    } else {
        next('Sorry no name there')
    }
};

module.exports = validator;
