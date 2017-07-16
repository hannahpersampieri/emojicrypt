var base64 = require('base64-min');
var emoji = require('emojify.js');

function encrypt(text) {
   var cipherText = base64.encode(text);
   var emojiCipherText = emoji.emojify(cipherText);
   return emojiCipherText;
}

function decrypt(emojiText) {
  var cipherText = emoji.unemojify(emojiText);
  var plainText = base64.decode(cipherText);
  return plainText;
}