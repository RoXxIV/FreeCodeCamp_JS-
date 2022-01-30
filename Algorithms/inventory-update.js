/**
 * - Inventory Update
 * Compare and update the inventory stored in a 2D array against a second 2D array of
 * a fresh delivery. Update the current existing inventory item quantities (in arr1).
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 */
function updateInventory(arr1, arr2) {
  // stock arr1 as an object with a list of key/value pairs
  let inventory = Object.fromEntries(arr1.map(([key, value]) => [value, key]));
  /**
   * looking for duplicate key
   * - if duplicate key, concat qty only
   * - if not concat key + value
   */
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i][1] in inventory) {
      inventory[arr2[i][1]] += arr2[i][0];
    } else {
      inventory[arr2[i][1]] = arr2[i][0];
    }
  }
  // turn and return inventory as an array
  return Object.entries(inventory)
    .sort()
    .map(([key, value]) => [value, key]);
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
