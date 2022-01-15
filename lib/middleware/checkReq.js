'use strict';

function checkRequest(req, res, next) {

  let text = req.body.text; // we are "READING" information from attached to the request.
  let author = req.body.author;

  if(!text || !author) {
    next('bad request');
  } else {
    next();
  }
}


module.exports = checkRequest;
