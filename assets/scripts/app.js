// variables
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// functions

const getUserNumberInput = () => +userInput.value;
const createAndWriteLog = (operator, resultBeforeCalc, calcedNumber) => {
  const calcDescritption = `${resultBeforeCalc} ${operator} ${calcedNumber}`;
  outputResult(currentResult, calcDescritption);
};
const writeToLog = (operation, prevResult, operationNUmber, newResult) => {
  const logEntry = {
    operation,
    prevResult,
    numberEntered: operationNUmber,
    newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
};
const add = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteLog('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
};
const substr = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
  writeToLog('SUBSTRACT', initialResult, enteredNumber, currentResult);
};
const multiply = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
};

const divide = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
};

// event listeners
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substr);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
