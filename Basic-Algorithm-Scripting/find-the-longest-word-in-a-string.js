// Find the Longest Word in a StringPassed
function findLongestWordLength(str) {
  let arr = str.split(" ").map(function (word) {
    return word.length;
  });
  return Math.max(...arr);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
