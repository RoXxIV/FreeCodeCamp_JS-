/**
 * - Smallest Common Multiple
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both,
 * as well as by all sequential numbers in the range between these parameters.
 * */

function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let smallestMult = max;

  /**
   * on boucle entre max et min pour verifier la solution
   * on sais que notre multiple commun ne sera pas plus petit que max , on initialise donc l'index a max - 1 de facon a tester en premier lieu (5 % 4).
   */
  for (let i = max - 1; i >= min; i--) {
    /**
     * on verifie que notre multiple commun est divisible par l'index actuel ,
     * si c'est faux on incremente directement
     * le multiple commun par le plus haut index du tableau
     * et on reinitialise la boucle .
     * */
    if (smallestMult % i) {
      smallestMult += max;
      i = max;
    }
  }
  return smallestMult;
}
smallestCommons([5, 1]);
