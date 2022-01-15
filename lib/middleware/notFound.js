'use strict';

// if you assign an `err` param, it will only trigger if you pass an argument into next.
function notFound(req, res, next) {
  console.error('Error! no route found for the last request');
  res.status(404).send('Not Found');
}

module.exports = notFound;
