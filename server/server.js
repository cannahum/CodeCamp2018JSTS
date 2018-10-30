const express = require('express');
const bodyParser = require('body-parser');

const {
  reactProjectHandler,
  backboneProjectHandler,
} = require('./routes');

const app = express();

app.use(express.static('dist'));
app.use('/node_modules', express.static('node_modules'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.use('/react-project', reactProjectHandler);

app.use('/backbone-project', backboneProjectHandler);

module.exports.startServer = function(port) {
  app.listen(port, function() {
    console.log('Example app listening at port', port);
  });
};
