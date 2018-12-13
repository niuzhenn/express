var express = require('express');
var router = express.Router();
var init = require('../config/init');
var mysql = require('mysql');

router.get('/loginCheck', function (req, res) {
  var _userName = req.query.userName;
  var _pwd = req.query.pwd;
  var sql = mysql.createConnection(init.defaultSql);
  sql.connect();
  const sqlQuery = `SELECT * FROM user_info WHERE user_name='${_userName}';`;
  console.log(sqlQuery)
  sql.query(sqlQuery, function (err, data, fields) {
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
        if (_pwd === result[0].user_pwd) {
          res.json({
            resultCode: '000001',
            data: {}
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