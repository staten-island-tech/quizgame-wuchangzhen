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
function questionType() {
  switch (randomInteger(1, 4)) {
    case 1:
      addition();
      break;
    case 2:
      subtraction();
      break;
    case 3:
      multiplication();
      break;
    case 4:
      division();
      break;
  }
}

function addition() {
  let num1 = threeDigitInt();
  let num2 = threeDigitInt();
  let answer = num1 + num2;

  console.log(answer);

  while (true) {
    let userAnswer = prompt(`What is ${num1} + ${num2}?`);

    // If the user answers correctly, break out of the while loop.
    if (userAnswer == answer) {
      break;
    }
  }
}
function subtraction() {
  let num1 = threeDigitInt();
  let answer = threeDigitInt();
  let num2 = answer + num1;

  console.log(answer);

  while (true) {
    let userAnswer = prompt(`What is ${num2} - ${num1}?`);

    // If the user answers correctly, break out of the while loop.
    if (userAnswer == answer) {
      break;
    }
  }
}
function multiplication() {
  let num1 = threeDigitInt();
  let num2 = randomInteger(2, 9);
  let answer = num1 * num2;

  console.log(answer);

  while (true) {
    let userAnswer = prompt(`What is ${num1} × ${num2}?`);

    // If the user answers correctly, break out of the while loop.
    if (userAnswer == answer) {
      break;
    }
  }
}
function division() {
  let num1 = randomInteger(2, 9);
  let answer = threeDigitInt();
  let num2 = answer * num1;

  console.log(answer);

  while (true) {
    let userAnswer = prompt(`What is ${num2} ÷ ${num1}?`);

    // If the user answers correctly, break out of the while loop.
    if (userAnswer == answer) {
      break;
    }
  }
}

export {
  randomInteger,
  threeDigitInt,
  twoDigitInt,
  questionType,
  addition,
  subtraction,
  multiplication,
  division,
};
