import { DOMSelectors, variables } from "./Dom";

// (min,max) is both inclusive
function randomInteger(min, max, useDifficulty = true) {
  if (useDifficulty === true) {
    // Difficulty scaling is 2^(1/8)
    return Math.floor(
      (Math.random() * (max - min + 1) + min) *
        2 ** (0.125 * (variables.questionCounter - 1))
    );
  } else {
    // No difficulty
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

function threeDigitInt() {
  return randomInteger(100, 999);
}

function pickQuestion() {
  switch (randomInteger(1, 4, false)) {
    case 1: // ADDITION
      variables.num1 = threeDigitInt();
      variables.op = "+";
      variables.num2 = threeDigitInt();
      variables.ans = variables.num1 + variables.num2;
      break;
    case 2: // SUBTRACTION
      variables.num2 = threeDigitInt();
      variables.op = "-";
      variables.ans = threeDigitInt();
      variables.num1 = variables.ans + variables.num2;
      break;
    case 3: // MULTIPLICATION
      variables.num1 = threeDigitInt();
      variables.op = "×";
      variables.num2 = randomInteger(2, 9);
      variables.ans = variables.num1 * variables.num2;
      break;
    case 4: // DIVISION
      variables.num2 = randomInteger(2, 9);
      variables.op = "÷";
      variables.ans = threeDigitInt();
      variables.num1 = variables.ans * variables.num2;
      break;
  }
  replaceHTML();
}

function replaceHTML() {
  DOMSelectors.questionNumber.innerHTML = `${variables.questionCounter}`;
  DOMSelectors.num1.innerHTML = `${variables.num1}`;
  DOMSelectors.op.innerHTML = `${variables.op}`;
  DOMSelectors.num2.innerHTML = `${variables.num2}`;

  DOMSelectors.form.addEventListener("input", function () {
    if (DOMSelectors.form.value == variables.ans) {
      DOMSelectors.form.value = ""; // resets the answer field
      variables.questionCounter++; // increments question counter
      variables.timeSecond += variables.timePerQuestion; // adds additional time
      variables.totalTimeSecond += variables.timePerQuestion;
      pickQuestion(); // NEXT!
    }
  });
}

export { pickQuestion };
