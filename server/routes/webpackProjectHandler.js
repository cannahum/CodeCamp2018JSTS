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
        <div id="target"></div>
        <script src="react/bundle.js"></script>
    </body>
    </head>
    </html>
  `);
});

module.exports = router;
