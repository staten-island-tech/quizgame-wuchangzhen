import { DOMSelectors } from './Dom';

//basically a div over another div thats disappearing over the span of a specified length of time

const timerBar = document.querySelector('timerBar');
setInterval(() => {
  const computedStyle = getComputedStyle(timerBar); //get current width and then increment based on percentage loaded-> get computedStyle and then use parsefloat to take width and convert to number -> get property value for --width
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
  //once page loads,no width supplied, not a number, defaulted to 0
  timerBar.style.setProperty('--width', width + 0.1);
}, 15); //calls on function every 5 seconds

//parseFloat converts string to number, but why is this necessary?>????
