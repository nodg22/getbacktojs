// variables
const defaultResult = 0;
let currentResult = defaultResult;
// functions
const add = () => {
  currentResult = currentResult + +userInput.value;
  outputResult(currentResult, '');
};
const substr = () => {
  currentResult = currentResult - +userInput.value;
  outputResult(currentResult, '');
};
const multiply = () => {
  currentResult = currentResult * +userInput.value;
  outputResult(currentResult, '');
};

const divide = () => {
  currentResult = currentResult / +userInput.value;
  outputResult(currentResult, '');
};

// event listeners
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substr);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
