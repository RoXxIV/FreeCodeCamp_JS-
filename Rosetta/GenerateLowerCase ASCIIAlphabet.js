/**
 * - Generate LowerCase ASCII Alphabet
 * Write a function to generate an array of lower case ASCII characters for a given range.
 * For example, given the range ['a', 'd'], the function should return ['a', 'b', 'c', 'd'].
 */

function lascii(cFrom, cTo) {
  let start = cFrom.charCodeAt(0);
  let end = cTo.charCodeAt(0);
  let result = [];

  while (start <= end) {
    result.push(String.fromCharCode(start));
    start++;
  }

  return result;
}

lascii("a", "d");
