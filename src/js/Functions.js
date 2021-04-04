import { DOMSelectors } from "./Dom";

// (min,max) is both inclusive
function randomInteger(min, max) {
  return Math.floor(
    (Math.random() * (max - min + 1) + min) *
      2 ** (0.125 * (variables.questionCounter - 1))
  );
}
function randomIntegerNoDifficulty(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function threeDigitInt() {
  return randomInteger(100, 999);
}

const variables = { questionCounter: 1, num1: "", op: "", num2: "", ans: "" };

function pickQuestion() {
  switch (randomIntegerNoDifficulty(1, 4)) {
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
  replaceHTML();
}

function addition() {
  variables.num1 = threeDigitInt();
  variables.op = "+";
  variables.num2 = threeDigitInt();
  variables.ans = variables.num1 + variables.num2;
}
function subtraction() {
  variables.num2 = threeDigitInt();
  variables.op = "-";
  variables.ans = threeDigitInt();
  variables.num1 = variables.ans + variables.num2;
}
function multiplication() {
  variables.num1 = threeDigitInt();
  variables.op = "×";
  variables.num2 = randomInteger(2, 9);
  variables.ans = variables.num1 * variables.num2;
}
function division() {
  variables.num2 = randomInteger(2, 9);
  variables.op = "÷";
  variables.ans = threeDigitInt();
  variables.num1 = variables.ans * variables.num2;
}

function replaceHTML() {
  DOMSelectors.questionNumber.innerHTML = `${variables.questionCounter}`;
  DOMSelectors.num1.innerHTML = `${variables.num1}`;
  DOMSelectors.op.innerHTML = `${variables.op}`;
  DOMSelectors.num2.innerHTML = `${variables.num2}`;

  DOMSelectors.form.addEventListener("input", function () {
    if (DOMSelectors.form.value == variables.ans) {
      DOMSelectors.form.value = "";
      variables.questionCounter++;
      pickQuestion();
    }
  });
}
export {
  randomInteger,
  randomIntegerNoDifficulty,
  threeDigitInt,
  variables,
  pickQuestion,
  addition,
  subtraction,
  multiplication,
  division,
};
