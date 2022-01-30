/**
 * - Mutations
 * Return true if the string in the first element of the array contains all of the letters
 * of the string in the second element of the array
 */
function mutation(arr) {
  arr = arr.map(function (x) {
    return x.toLowerCase();
  });
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1][i]) < 0) {
      return false;
    }
  }
  return true;
}
mutation(["hello", "Hello"]);
