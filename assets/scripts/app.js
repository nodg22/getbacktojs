// variables
const defaultResult = 0;
let currentResult = defaultResult;

// functions

const getUserNumberInput = () => +userInput.value;
const createAndWriteLog = (operator, resultBeforeCalc, calcedNumber) => {
    const calcDescritption = `${resultBeforeCalc} ${operator} ${calcedNumber}`;
    outputResult(currentResult, calcDescritption);
};
const add = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteLog('+', initialResult, enteredNumber);

};
const substr = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
};
const multiply = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
};

const divide = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
};

// event listeners
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substr);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
