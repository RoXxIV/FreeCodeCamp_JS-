/**
 * Leap year
 * Determine whether a given year is a leap year in the Gregorian calendar.
 */

function isLeapYear(year) {
  return year % 400 == 0 || (year % 4 === 0 && year % 100 !== 0);
}

isLeapYear(2018); // false
