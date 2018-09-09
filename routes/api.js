var express = require('express');
var router = express.Router();
var init = require('../config/init');
var util = require('util');
var url = require('url');
var mysql = require('mysql');

router.get('/getMainMenu', function(req, res) {
  res.json(init.navbar);
});

router.get('/getContent', function(req, res) {
  var params = util.inspect(url.parse(req.url));
  res.json(init.mainContent);
})

router.get('/postDemo', function(req, res){
  var sql = mysql.createConnection(init.defaultSql);
  sql.connect();
  sql.query("SELECT * FROM user_info WHERE user_name = 'root';", function(err, result, fields){
    res.json(result);
  })

})

module.exports = router;