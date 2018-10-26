const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
        <head>
        <title>CodeCamp 2018</title>
        </head>
        <body>
        <h1>Hello, here is an ancient tech Project!</h1>
    </body>
    </head>
    </html>
  `);
});

module.exports = router;
