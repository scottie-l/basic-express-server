'use strict';

function serverError(err, req, res, next) {
  console.error('Error!  Server is having bad day');
  console.log(err);
  res.status(500).send('Server Error');
}

module.exports = serverError;
