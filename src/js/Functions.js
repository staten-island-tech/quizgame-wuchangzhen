import { DOMSelectors } from "./Dom";

// (min,max) is both inclusive
function randomInteger(min, max, difficulty = 1) {
  return Math.floor((Math.random() * (max - min + 1) + min) * difficulty);
}
function threeDigitInt(difficulty = 1) {
  return randomInteger(100, 999, difficulty);
}
function pickQuestion(difficulty = 1) {
  switch (randomInteger(1, 4, difficulty)) {
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

let questionCounter = 1;
const difficulty = (questionCounter - 1) / 10 + 1;

function addition() {
  let num1 = threeDigitInt(difficulty);
  let num2 = threeDigitInt(difficulty);
  let answer = num1 + num2;

  replaceHTML(num1, num2, "+");
}
function subtraction() {
  let num2 = threeDigitInt(difficulty);
  let answer = threeDigitInt(difficulty);
  let num1 = answer + num2;

  replaceHTML(num1, num2, "-");
}
function multiplication() {
  let num1 = threeDigitInt(difficulty);
  let num2 = randomInteger(2, 9, difficulty);
  let answer = num1 * num2;

  replaceHTML(num1, num2, "×");
}
function division() {
  let num2 = randomInteger(2, 9, difficulty);
  let answer = threeDigitInt(difficulty);
  let num1 = answer * num2;

  replaceHTML(num1, num2, "÷");
}

function replaceHTML(number1, number2, operator) {
  DOMSelectors.questionNumber.innerHTML = `${questionCounter}`;
  DOMSelectors.num1.innerHTML = `${number1}`;
  DOMSelectors.op.innerHTML = `${operator}`;
  DOMSelectors.num2.innerHTML = `${number2}`;
}

function newQuestion() {
  pickQuestion();
  questionCounter++;
}

export {
  randomInteger,
  threeDigitInt,
  questionCounter,
  pickQuestion,
  addition,
  subtraction,
  multiplication,
  division,
  newQuestion,
};
