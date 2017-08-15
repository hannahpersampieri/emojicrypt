var emojicrpyt = require('emojicrypt.js');

var originaltext = "hello friend";

var ciphertext = emojicrpyt.encrypt(originaltext);
var revertedtest = emojicrpyt.decrypt(ciphertext);

if(revertedtest == ciphertext) {
    console.log("Tests working.");
}