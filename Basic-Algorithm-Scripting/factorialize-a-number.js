//Factorialize a Number
function factorialize(num, mult = 1) {
  if (num == 0) {
    return mult;
  } else {
    return factorialize(num - 1, mult * num);
  }
}

factorialize(5);
