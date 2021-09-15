// variables
const defaultResult = 0;
let currentResult = defaultResult;
const enteredNumber = +userInput.value
// functions
const add = () => {
    
  const calcDescritption = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + ;
  outputResult(currentResult, calcDescritption);
};
const substr = () => {
  const calcDescritption = `${currentResult} - ${enteredNumber}`;
  currentResult = currentResult - +enteredNumber;
  outputResult(currentResult, calcDescritption);
};
const multiply = () => {
  const calcDescritption = `${currentResult} * ${enteredNumber}`;
  currentResult = currentResult * +enteredNumber;
  outputResult(currentResult, calcDescritption);
};

const divide = () => {
  const calcDescritption = `${currentResult} / ${enteredNumber}`;
  currentResult = currentResult / +enteredNumber;
  outputResult(currentResult, calcDescritption);
};

// event listeners
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substr);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
