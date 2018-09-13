var crypto = require('crypto');

function encode(method, string){
  var encodeMethod = {
    md5: function(){
      var hash = crypto.createHash('md5');
      hash.update(string);
      return hash.digest('hex');
    },
    sha1: function(){
      var hash = crypto.createHash('sha1');
      hash.update(string);
      return hash.digest('hex');
    }
  }
  return encodeMethod[method]();
}

module.exports = {
  encode: encode
}