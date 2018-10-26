const express = require('express');
const bodyParser = require('body-parser');

const {
  webpackProjectHandler,
  requirejsProjectHandler,
} = require('./routes');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.use('/webpack-project', webpackProjectHandler);

app.use('/requirejs-project', requirejsProjectHandler);

module.exports.startServer = function(port) {
  app.listen(port, function() {
    console.log('Example app listening at port', port);
  });
};
