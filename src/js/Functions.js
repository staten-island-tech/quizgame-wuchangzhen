// (min,max) is both inclusive
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function threeDigitInt() {
  return randomInteger(100, 999);
}
function twoDigitInt() {
  return randomInteger(10, 99);
}
function oneDigitInt() {
  return randomInteger(1, 9);
}

export { randomInteger, threeDigitInt, twoDigitInt, oneDigitInt };
