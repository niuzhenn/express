var express = require('express');
var router = express.Router();
var init = require('../config/init');
var util = require('util');
var url = require('url');

router.get('/getMainMenu', function(req, res) {
  res.json(init.navbar);
});

router.get('/getContent', function(req, res) {
  var params = util.inspect(url.parse(req.url));
  res.json(init.mainContent);
})

router.post('/postDemo', function(res, req){

})

module.exports = router;