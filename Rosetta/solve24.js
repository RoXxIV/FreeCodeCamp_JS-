/**
 * 
The 24 Game tests a person's mental arithmetic.

The aim of the game is to arrange four numbers in a way that when evaluated, the result is 24

Implement a function that takes a string of four digits as its argument, with each digit from 1 to 9 (inclusive) with repetitions allowed, and returns an arithmetic expression that evaluates to the number 24. If no such solution exists, return "no solution exists".

Rules:

    Only the following operators/functions are allowed: multiplication, division, addition, subtraction.
    Division should use floating point or rational arithmetic, etc, to preserve remainders.
    Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong).
    The order of the digits when given does not have to be preserved.
    
Example input 	Example output
solve24("4878"); 	(7-8/8)*4
solve24("1234"); 	3*1*4*2
solve24("6789"); 	(6*8)/(9-7)
solve24("1127"); 	(1+7)*(2+1)
 */
function solve24(numStr) {
  // Définit les opérations
  const operations = ["+", "-", "*", "/"];
  // Transforme la chaîne de caractères en tableau de nombres
  let arrayOfNumber = numStr.split("").map((num) => Number(num));

  let foundSolution = null;

  /**
   * Fonction qui tente d'évaluer une expression et retourne true si le résultat est 24 et false sinon
   */
  const tryEvaluateExpression = (expression) => {
    try {
      return eval(expression) === 24;
    } catch (e) {
      return false;
    }
  };

  /**
   *  Fonction qui tente d'évaluer toutes les expressions possibles avec une permutation
   * de nombres et qui arrête dès qu'une solution est trouvée
   * @param {*} perm  Un tableau de nombres qui représente une permutation des nombres de départ
   * @returns  true si une solution est trouvée et false sinon
   */
  const checkExpressions = (perm) => {
    if (foundSolution) return; // Si une solution a déjà été trouvée, on arrête la recherche
    // Itère sur toutes les combinaisons possibles d'opérations.
    for (let op1 of operations) {
      for (let op2 of operations) {
        for (let op3 of operations) {
          // Crée un tableau de toutes les expressions possibles
          const expressions = [
            `${perm[0]}${op1}${perm[1]}${op2}${perm[2]}${op3}${perm[3]}`,
            `(${perm[0]}${op1}${perm[1]})${op2}${perm[2]}${op3}${perm[3]}`,
            `${perm[0]}${op1}(${perm[1]}${op2}${perm[2]})${op3}${perm[3]}`,
            `${perm[0]}${op1}${perm[1]}${op2}(${perm[2]}${op3}${perm[3]})`,
            `(${perm[0]}${op1}${perm[1]})${op2}(${perm[2]}${op3}${perm[3]})`,
          ];

          // Itère sur toutes les expressions et tente de les évaluer
          for (let expr of expressions) {
            if (tryEvaluateExpression(expr)) {
              foundSolution = expr;
              return;
            }
          }
        }
      }
    }
  };
  // appel récursif de la fonction generate qui va générer toutes les permutations possibles
  generate(arrayOfNumber.length, arrayOfNumber, checkExpressions);

  // Retourne la solution trouvée, ou null si aucune n'a été trouvée.
  return foundSolution;
}

/**
 * heap algorithm to generate permutations
 * @param {*} remaining  nombre de chiffres restants à traiter
 * @param {*} arr  tableau de chiffres
 * @param {*} output  fonction qui sera appelée avec une permutation de chiffres
 */
function generate(remaining, arr, output) {
  // Si il ne reste qu'un chiffre, on appelle la fonction output avec une copie du tableau
  if (remaining === 1) {
    output(arr.slice());
  } else {
    // Sinon, on génère toutes les permutations possibles
    for (let i = 0; i < remaining; i++) {
      generate(remaining - 1, arr, output);
      if (i < remaining - 1) {
        if (remaining % 2 === 0) {
          swap(arr, i, remaining - 1);
        } else {
          swap(arr, 0, remaining - 1);
        }
      }
    }
  }
}
/**
 *  Fonction qui échange deux éléments d'un tableau
 * @param {*} array  tableau d'éléments à permuter
 * @param {*} i  indice du premier élément
 * @param {*} j  indice du deuxième élément
 */
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

solve24("1258");
