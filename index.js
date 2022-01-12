'use strict';

// should require = lib/server.js
// should require dotenv, reading PORT from your .env file
// It should call the .start() method from the server with the PORT set in your environment

const server = require('./lib/server.js');

server.start(3000);
 