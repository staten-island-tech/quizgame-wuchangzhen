const DOMSelectors = {
  questionNumber: document.querySelector(".question-number"),
  num1: document.querySelector(".first-number"),
  op: document.querySelector(".operator"),
  num2: document.querySelector(".second-number"),
  form: document.querySelector(".answer-field"),
  timer: document.querySelector(".timer"),
  quizGame: document.querySelector(".quiz-game"),
};

const variables = {
  questionCounter: 1,
  num1: "",
  op: "",
  num2: "",
  ans: "",
  timePerQuestion: 5,
  timeSecond: 30,
  totalTimeSecond: 30,
};

export { DOMSelectors, variables };
