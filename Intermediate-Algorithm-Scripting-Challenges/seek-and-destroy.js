/**
 * - Seek and Destroy
 * You will be provided with an initial array (the first argument in the destroyer function),
 * followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 * Note: You have to use the arguments object.
 * */
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.shift();
  function remove(item) {
    if (args.indexOf(item) < 0) {
      return true;
    }
  }
  return arr.filter(remove);
}
destroyer(["tree", "hamburger", 53], "tree", 53);
