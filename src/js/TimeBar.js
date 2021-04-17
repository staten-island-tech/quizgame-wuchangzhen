import { DOMSelectors, variables } from "./Dom";

/* //basically a div over another div thats disappearing over the span of a specified length of time

const timerBar = document.querySelector('timerBar');
setInterval(() => {
  const computedStyle = getComputedStyle(timerBar); //get current width and then increment based on percentage loaded-> get computedStyle and then use parsefloat to take width and convert to number -> get property value for --width
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
  //once page loads,no width supplied, not a number, defaulted to 0
  timerBar.style.setProperty('--width', width + 0.1);
}, 15); //calls on function every 15 seconds

//parseFloat converts string to number, but why is this necessary?>????
 */

//const timer = document.querySelector('.timer');
//const timeSecond = 5;

//const timer = docuument.querySelector('h1');

// displayTime(variables.timeSecond); //set parameter to timeSecond which makes it not read 70

DOMSelectors.timer.innerHTML = `00:${variables.timeSecond}`; //makes direct changes to .timer div (seconds)

const countDown = setInterval(() => {
  variables.timeSecond--; //will decrease the seconds

  DOMSelectors.timer.innerHTML = formatTime(variables.timeSecond); // displays time

  if (variables.timeSecond <= 0 || variables.timeSecond < 1) {
    //if less than or equal to 0 or less than 1, the interval is cleared 00:00
    //
    endTime();
    clearInterval(countDown);
  }
}, 1000);

function formatTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`; // if min is less than 10 then 0, if not then nothing --> same thing with sec
}

function endTime() {
  DOMSelectors.quizGame.innerHTML = `      <div class="game-over-textbox">
        <h1 class="game-over-text">Total Time: ${formatTime(
          variables.totalTimeSecond
        )}</h1>
        <h1 class="game-over-text">Total Questions: ${
          variables.questionCounter - 1
        }</h1>
      </div>`;
}

// displayTime(variables.timeSecond);

export { formatTime, endTime };
