/**
 * - Sum All Odd Fibonacci Numbers
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1.
 * Every additional number in the sequence is the sum of the two previous numbers.
 * The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * */

function sumFibs(num) {
  let nombrePrecedent = 0;
  let nombreActuel = 1;
  let resultat = 0;

  while (nombreActuel <= num) {
    if (nombreActuel % 2 !== 0) {
      resultat += nombreActuel;
    }

    nombreActuel += nombrePrecedent;
    nombrePrecedent = nombreActuel - nombrePrecedent;
  }

  return resultat;
}

sumFibs(10);
