/**
 * - Rosetta Code: ABC Problem
 * You are given a collection of ABC blocks (e.g., childhood alphabet blocks).
 * There are 20 blocks with two letters on each block.
 * A complete alphabet is guaranteed amongst all sides of the blocks.
 * The sample collection of blocks:
 * Implement a function that takes a string (word) and determines whether the word
 * can be spelled with the given collection of blocks.
 * Some rules to keep in mind:
 * Once a letter on a block is used, that block cannot be used again.
 * The function should be case-insensitive.
 */
function canMakeWord(word) {
  const blocksArr = [
    ["B", "O"],
    ["X", "K"],
    ["D", "Q"],
    ["C", "P"],
    ["N", "A"],
    ["G", "T"],
    ["R", "E"],
    ["T", "G"],
    ["Q", "D"],
    ["F", "S"],
    ["J", "W"],
    ["H", "U"],
    ["V", "I"],
    ["A", "N"],
    ["O", "B"],
    ["E", "R"],
    ["F", "S"],
    ["L", "Y"],
    ["P", "C"],
    ["Z", "M"],
  ];
  word = word.toUpperCase().split("");

  for (let letter in word) {
    // Check if any block contains letter
    const blockIndex = blocksArr.findIndex(
      (block) => block.indexOf(word[letter]) >= 0
    );
    if (blockIndex == -1) {
      // Return false if no blocks contains letter
      return false;
    } else {
      // Otherwise, remove the block
      blocksArr.splice(blockIndex, 1);
    }
  }
  return true;
}

/**
 * --Code Explanation
 * The function is case-insensitive, so the argument is converted to an array of uppercase letters.
 * We loop through our word array in order to test each letter separately.
 * For each letter, we check for a block which can represent the letter.
 * If the letter is present in a block, we delete the block so it cannot be reused.
 * We return false early if no block matches the letter, otherwise we complete our loop and return true.
 */
