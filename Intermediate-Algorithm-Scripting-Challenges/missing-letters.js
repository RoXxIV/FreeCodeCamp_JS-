/**
 * - Missing letters
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */
function fearNotLetter(str) {
  let answer = "";
  let arr = str.split("");
  let count = str.charCodeAt(0);
  let test = str.length - 1;
  let end = str[test].charCodeAt(0);
  let i = 0;
  if (str.length === 26) {
    return undefined;
  }
  while (count < end) {
    if (str[i].charCodeAt(0) === count) {
      i++;
      count++;
    } else {
      answer = String.fromCharCode(count);
      break;
    }
  }
  return answer;
}
fearNotLetter("abce");
