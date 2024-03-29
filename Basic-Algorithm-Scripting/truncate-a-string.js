/**
 * - Truncate a StringPassed
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 *  Return the truncated string with a ... ending.
 */
function truncateString(str, num) {
  return str.length > num ? str.split("").slice(0, num).join("") + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
