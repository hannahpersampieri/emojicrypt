var emojicrpyt = require('emojicrypt');

var originaltext = "hello friend";

var ciphertext = emojicrpyt.encrypt(originaltext);
var revertedtest = emojicrpyt.decrypt(ciphertext);

if(revertedtest == ciphertext) {
    console.log("Tests working.");
}