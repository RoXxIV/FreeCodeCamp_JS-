/**
 * -Confirm the EndingPassed
 * Check if a string (first argument, str) ends with the given target string (second argument, target)
 */
function confirmEnding(str, target) {
  return (
    str
      .split("")
      .splice(str.length - target.length)
      .join("") == target
  );
}

confirmEnding("Open sesame", "same");
