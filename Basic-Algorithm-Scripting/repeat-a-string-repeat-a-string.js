/**
 * - Repeat a String Repeat a StringPassed
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num, answer = "") {
  if (num == 0) {
    return answer;
  } else if (num < 1) {
    return "";
  } else {
    answer += str;
    return repeatStringNumTimes(str, num - 1, answer);
  }
}

repeatStringNumTimes("abc", 3);
