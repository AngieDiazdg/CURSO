var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/galeria', function(req, res, next) {
  res.render('galeria');
});

module.exports = router;