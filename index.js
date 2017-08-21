var base64 = require('base64-min');
var keygetter = require('./key.js');
var key = keygetter.getkey();
var encrypter = require('crypto-js');
var emoji = require('./emojify.js');


exports.encrypt = function(text) {
   var cipherText = encrypter.AES.encrypt(text, key);
   var base64text = base64.encode(cipherText);
   var emojiCipherText = emoji.emojify(base64text);
   return emojiCipherText;
}

exports.decrypt = function(emojiText) {
  var cipherText = emoji.unemojify(emojiText);
  var utfText = base64.decode(cipherText);
  var decodedText = encrypter.AES.decrypt(utfText.toString(), key);
  return decodedText;
}
