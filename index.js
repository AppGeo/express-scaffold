'use strict';

var server = require('./server');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening on port %d under \'%s\' environment.', port, env);
});
