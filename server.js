var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/webpack-project', function() {
  res.send('Hello, World! Webpack');
});

app.get('/requirejs-project', function() {
  res.send('Hello, World! RequireJS');
});

module.exports.startServer = function(port) {
  app.listen(port, function() {
    console.log('Example app listening at port', port);
  });
};
