import {
  randomInteger,
  threeDigitInt,
  twoDigitInt,
  questionType,
  addition,
  subtraction,
  multiplication,
  division,
} from "./Functions";

import {} from "./Dom";

let questionCounter = 1;

while (questionCounter <= 5) {
  questionType();
  questionCounter += 1;
  console.log(questionCounter);
}
