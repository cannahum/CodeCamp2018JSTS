const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.send(
    `
<!doctype html>
<html lang="en">
<head>
  <title>CodeCamp 2018 - Backbone App</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Product+Sans:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i">
  <link rel="stylesheet" href="http://localhost:8081/scss/app.css">
  <!-- Load the script "js/main.js" as our entry point -->
  <script data-main="http://localhost:8081/js/main" src="http://localhost:8081/requirejs/require.js"></script>
</head>
<body>

<div id="container">
  <div id="target"></div>
</div>

</body>
</html>
  
`
  );
});

module.exports = router;
