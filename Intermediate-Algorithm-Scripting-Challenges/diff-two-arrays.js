/**
 * - Diff Two Arrays
 * Compare two arrays and return a new array with any items only found in one of the two given arrays,
 * but not both. In other words, return the symmetric difference of the two arrays.
 */
function diffArray(arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  function compare(item) {
    if (arr1.indexOf(item) < 0 || arr2.indexOf(item) < 0) {
      return true;
    }
  }
  return arr3.filter(compare);
}

diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
