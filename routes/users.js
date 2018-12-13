let express = require('express');
let router = express.Router();
let logger = require('../log4js/log4js').logger;

let fs = require('fs');
let path = require('path');

/* GET users listing. */
router.get('/getArticalList', function(req, res, next) {
  debugger;
  fs.readdir(path.resolve('./resources/articals'), (err, files) => {
    if (err) {
      logger.error(`get artical list error: ${err}`);
    } else {
      logger.info(files.length);
      res.json(files);
    }
  })
});

module.exports = router;
