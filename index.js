'use strict';

// should require dotenv, reading PORT from your .env file
const PORT = process.env.PORT || 3000; // server.listen(3000)

// should require = lib/server.js
const server = require('./lib/server.js');

// It should call the .start() method from the server with the PORT set in your environment
server.start(PORT); // server.start(3000);
 