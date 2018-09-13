var express = require('express');
var router = express.Router();
var init = require('../config/init');
var util = require('util');
var url = require('url');
var mysql = require('mysql');
var util = require('../util/common-util');

router.get('/getMainMenu', function(req, res) {
  res.json(init.navbar);
});

router.get('/getContent', function(req, res) {
  var params = util.inspect(url.parse(req.url));
  res.json(init.mainContent);
})

router.post('/register', function(req, res) {
  var _userName = req.body.userName;
  var _pwd = util.encode('sha1', req.body.pwd);
  var sql = mysql.createConnection(init.defaultSql);
  sql.query("SELECT user_name FROM user_info WHERE user_name = '" + _userName + "';", function(err, data, fields){
    if (err) {
      res.send(err);
    } else {
      var result = JSON.parse(JSON.stringify(data));
      if (result.length !==0) {
        res.json({
          resultCode: '800001',
          data: 'Exist User'
        });
      } else {
        sql.query("INSERT INTO user_info VALUES (" +  Math.round(100000000 * Math.random()) + ",'" + _userName + "','" + _pwd + "',null)", function(err, data, fields){
          if (err) {
            res.send(err);
          } else {
            res.json({
              resultCode: '000001',
              data: "success"
            });
          }
        })
      }
    }
  })
})

router.post('/login', function(req, res){
  var _userName = req.body.userName;
  var _pwd = req.body.pwd;
  var sql = mysql.createConnection(init.defaultSql);
  sql.connect();
  sql.query("SELECT * FROM user_info WHERE user_name = '" + _userName + "';", function(err, data, fields){
    if (err) {
      res.send(err);
    } else {
      var result = JSON.parse(JSON.stringify(data));
      if (result.length > 1) {
        res.json({
          resultCode: '900002',
          data: 'More then 1 data'
        });
      } else if (result.length === 0) {
        res.json({
          resultCode: '900000',
          data: 'Worng UserName'
        });
      } else {
        if (_pwd === result[0].user_pwd){
          res.json({
            resultCode: '000001',
            data: result[0]
          });
        } else {
          res.json({
            resultCode: '900001',
            data: 'Worng PWD'
          });
        }
      }
    }
  })
})

module.exports = router;