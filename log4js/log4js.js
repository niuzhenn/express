var log4js = require('log4js');

log4js.configure({
  appenders: {
    out: {type: 'stdout'},
    info: {type: 'file', filename: './logs/runLog.log'}
  },
  categories: {
    default: {appenders: ['out', 'info'], level: 'info'}
  }
});

var logger = log4js.getLogger('info');

exports.logger = logger;