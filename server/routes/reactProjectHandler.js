const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
        <head>
        <title>CodeCamp 2018 - React App</title>
        </head>
        <body>
        <div id="target"></div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Product+Sans:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i">
        <script src="http://localhost:8080/bundle.js"></script>
    </body>
    </head>
    </html>
  `);
});

module.exports = router;
