/**
 * - Greatest common divisor
 * Write a function that returns the greatest common divisor of two integers.
 */

function gcd(a, b) {
  let index = 1;
  let greatestCommonDivisor = 0;
  while (index <= b) {
    if (a % index == 0 && b % index == 0) {
      greatestCommonDivisor = index;
    }
    index++;
  }
  return greatestCommonDivisor;
}

gcd(13, 250);
