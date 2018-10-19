const server = require('./server');

function getPort() {
  var arg = process.argv[2];
  if (arg) {
    return parseInt(arg);
  }
  else {
    return 3000;
  }
}

var port = getPort();
server.startServer(port);