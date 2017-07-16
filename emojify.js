/* emojimap : maps every character in Base 64 to an emoji */
var map = {
	'A' = '😎' ,
	'B' = '👀',
	'C' = '🌵',
	'D' = '🏁', 
	'E' = '😂',  
	'F' = '🚮',
	'G' = '🍕',
	'H' = '🐶', 
	'I' = '😇',
	'J' = '🌈',
	'K' = '😸',
	'L' = '🦄',
	'M' = '🐌',
	'N' = '🌻',
	'O' = '🌝',
	'P' = '🌚',
	'Q' = '😬',
	'R' = '😜',
	'S' = '🤗',
	'T' = '💯',
	'U' = '🎏',
	'V' = '🚲',
	'W' = '🎰',
	'X' = '🍾',
	'Y' = '🌮',
	'Z' = '🍣',
	'a' = '🥑',
	'b' = '🐟',
	'c' = '🐙',
	'd' = '🐊',
	'e' = '😈',
	'f' = '👻',
	'g' = '🦀',
	'h' = '💩',
	'i' = '😉',
	'j' = '🌎',
	'k' = '🙈',
	'l' = '💰',
	'm' = '❤',
	'n' = '️💤',
	'o' = '💃',
	'p' = '💪',
	'q' = '👽',
	's' = '🙌',
	't' = '👾',
	'u' = '🤑',
	'v' = '👯',
	'w' = '💦',
	'x' = '🍤',
	'y' = '🚗',
	'z' = '⛵',
	️'0' = '🎁',
	'1' = '🔮',
	'2' =  '🎉',
	'3' = '📯',
	'4' = '💸',
	'5' = '🌴',
	'6' = '💫',
	'7' = '✨',
	'8' = '☀',
	'9' = '️🐛',
	'+'	= '🤠',
	'/' = '😒'
};

/* emojify: take base 64-encoded text and emojify it */
function emojify(text) {
	if((typeof text) != 'string'){
		return -1;
	}
	var result = "";
	for(var i = 0; i < text.length, i++) {
		result += map[text.charAt(i)];
	}
	return result;
};

/* unemojify: take emoji-text and return the base 64 equivalent */
function unemojify(text) {
	var result = "";
	for(var i = 0; i < text.length, i++) {
		var key = map.getKey(text.charAt(i));
		result += key;
	}
	return result;

};

Object.prototype.getKey = function(value) {
      var object = this;
      for(var key in object){
         if(object[key]==value) return key;
      }
};
