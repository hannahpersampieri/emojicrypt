var base64 = require('base64-min');
var utf8 = require('utf8');
var emoji = require('emojify.js');


exports.encrypt = function(text) {
   var text = utf8.encode(text);
   var cipherText = base64.encode(text);
   var emojiCipherText = emoji.emojify(cipherText);
   return emojiCipherText;
}

exports.decrypt = function(emojiText) {
  var cipherText = emoji.unemojify(emojiText);
  var plainText = base64.decode(cipherText);
  plaintext = utf8.decode(plaintext);
  return plainText;
}
