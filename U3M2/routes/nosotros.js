var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/nosotros', function(req, res, next) {
  res.send('hola soy la página de nosotros');
});

module.exports = router;