// variables
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// functions

const getUserNumberInput = () => parseInt(userInput.value);
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

const calcResult = (calcType) => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let caclOperator;

  if (calcType === 'ADD') {
    currentResult += enteredNumber;
    caclOperator = '+';
  } else if (calcType === 'SUBSTRACT') {
    currentResult -= enteredNumber;
    caclOperator = '-';
  } else if (calcType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    caclOperator = '*';
  } else if (calcType === 'DIVIDE') {
    currentResult /= enteredNumber;
    caclOperator = '/;';
  } else {
    return;
  }

  createAndWriteLog(caclOperator, initialResult, enteredNumber);
  writeToLog(calcType, initialResult, enteredNumber, currentResult);
};

const add = () => calcResult('ADD');
const substr = () => calcResult('SUBSTRACT');
const multiply = () => calcResult('MULTIPLY');
const divide = () => calcResult('DIVIDE');

// event listeners
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substr);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
