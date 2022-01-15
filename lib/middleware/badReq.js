'use strict';

function badRequest(err, req, res, next) {

  if (err === 'bad request') {
    res.status(400).send('Bad Request');
  } else {
    next('Server Error');
  }

}

module.exports = badRequest;
