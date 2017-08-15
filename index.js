var base64 = require('base64-min');
var emoji = require('emojify.js');

exports.encrypt = function(text) {
   var cipherText = base64.encode(text);
   var emojiCipherText = emoji.emojify(cipherText);
   return emojiCipherText;
}

exports.decrypt = function(emojiText) {
  var cipherText = emoji.unemojify(emojiText);
  var plainText = base64.decode(cipherText);
  return plainText;
}
