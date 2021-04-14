var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "DOMSelectors", function () {
  return DOMSelectors;
});
const DOMSelectors = {
  questionNumber: document.querySelector('.question-number'),
  num1: document.querySelector('.first-number'),
  op: document.querySelector('.operator'),
  num2: document.querySelector('.second-number'),
  form: document.querySelector('.answer-field'),
  timer: document.querySelector('.timer')
};
