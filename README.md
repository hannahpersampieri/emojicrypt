# emojicrypt
Encrypt your text into emoji 😄💩👽🙊

[![Build Status](https://travis-ci.org/hannahvoelker/emojicrypt?branch=master)](https://travis-ci.org/hannahvoelker/emojicrypt) [![Node version](https://img.shields.io/node/v/emojicrypt.svg?style=flat)](http://nodejs.org/download/)

This is an node module that is a wrapper around a base64 encryption module. 

```
npm install emojicrypt
```

# Usage
 Encrypt plain text (utf-8) into emojitext
 ```javascript
 var emojiText = encrypt(text);
 ```

 Decrypt emojifyed-text into utf-8 plaintext
 ```javascript
 var plainText = decrypt(emoji);
 ```
