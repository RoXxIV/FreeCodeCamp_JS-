/**
 * - Roman Numeral Converter
 * Convert the given number into a roman numeral.
 */
function convertToRoman(num) {
  const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumber = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let convert = "";

  for (let i = 0; i < number.length; i++) {
    while (number[i] <= num) {
      convert += romanNumber[i];
      num -= number[i];
    }
  }
  return convert;
}

convertToRoman(36);
