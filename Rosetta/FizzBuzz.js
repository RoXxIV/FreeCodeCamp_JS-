/**
 * - FizzBuzz
 * Write a program that generates an array of integers from 1 to 100 (inclusive). But:
 * for multiples of 3, add "Fizz" to the array instead of the number
 * for multiples of 5, add "Buzz" to the array instead of the number
 * for multiples of 3 and 5, add "FizzBuzz" to the array instead of the number
 * Your program should return an array containing the results based on the rules above.
 */
function fizzBuzz() {
  let i = 1;
  let arr = [];
  while (i <= 100) {
    if (i % 5 === 0 && i % 3 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}
// test
fizzBuzz();
