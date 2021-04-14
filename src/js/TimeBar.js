import { DOMSelectors } from './Dom';

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
let timeSecond = 90; //setting time to count down from

displayTime(timeSecond); //set parameter to timeSecond which makes it not read 70

DOMSelectors.timer.innerHTML = `00:${timeSecond}`; //makes direct changes to .timer div (seconds)

const countDown = setInterval(() => {
  timeSecond--; //will decrease the seconds
  displayTime(timeSecond); //plays function
  if (timeSecond <= 0 || timeSecond < 1) {
    //if less than or equal to 0 or less than 1, the interval is cleared 00:00
    //
    endTime();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  DOMSelectors.timer.innerHTML = `${min < 10 ? '0' : ''}${min}:${
    sec < 10 ? '0' : ''
  }${sec}`; // if min is less than 10 then 0, if not then nothing --> same thing with sec
}

function endTime() {
  DOMSelectors.timer.innerHTML = 'YUR DONE!';
}

/* function replaceHTMLTest() {
  DOMSelectors.timer.innerHTML = `00:${timeSecond}`;
} */

DOMSelectors.timer.displayTime(timeSecond);

export { /* replaceHTMLTest, */ displayTime, endTime };