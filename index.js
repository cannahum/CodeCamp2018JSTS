const server = require('./server/server');

function getPort() {
  const arg = process.argv[2];
  if (arg) {
    return parseInt(arg);
  }
  else {
    return 3000;
  }
}

const port = getPort();
server.startServer(port);
