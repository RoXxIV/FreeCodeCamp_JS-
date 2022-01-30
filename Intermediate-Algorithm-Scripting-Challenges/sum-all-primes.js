/**
 * - Sum All Primes
 * Write sumPrimes so it returns the sum of all prime numbers that are less than or equal to num
 * */
function sumPrimes(num) {
  let index = 1;
  let somme = 0;

  function estPremier(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }

    if (n !== 1 && n !== 0) return n;
  }

  while (index <= num) {
    if (estPremier(index)) {
      somme += index;
    }
    index++;
  }
  return somme;
}

sumPrimes(10);
