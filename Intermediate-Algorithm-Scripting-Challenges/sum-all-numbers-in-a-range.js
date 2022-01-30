/**
 * - Sum All Numbers in a RangePassed
 * We'll pass you an array of two numbers.
 * Return the sum of those two numbers plus the sum of all the numbers between them.
 * The lowest number will not always come first.
 * */
function sumAll(arr) {
  arr.sort((a, b) => a - b);
  const cumul = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    cumul.push(i);
  }
  return cumul.reduce((add, current) => add + current);
}
sumAll([1, 4]);
