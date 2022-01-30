/**
 * - Caesars Cipher
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
 * Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase.
 * Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 * */
function rot13(str) {
  let i = 0;
  let convert = 0;
  let newStr = "";
  while (i <= str.length) {
    convert = str.charCodeAt(i);
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
      convert += 13;
      newStr += String.fromCharCode(convert);
    } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
      convert -= 13;
      newStr += String.fromCharCode(convert);
    } else if (str.charCodeAt(i) == 32) {
      newStr += String.fromCharCode(convert);
    } else if (str.charCodeAt(i) >= 64 || str.charCodeAt(i) <= 91) {
      newStr += String.fromCharCode(convert);
    }
    i++;
  }
  return newStr;
}

rot13("SERR CVMMN!");
