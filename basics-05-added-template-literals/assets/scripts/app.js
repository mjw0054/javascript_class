const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// 입력 필드에서 입력 값을 가져옴
function getUserNumberInput() {
  return parseInt(userInput.value); //parseInt(userInput.value) == +userInput.value
}

// 계산 로그 생성과 작성
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  // const calcDescription = currentResult + resultBeforeCalc + calcNumber;
  outputResult(currentResult, calcDescription); // outputResult 함수는 vendor.js에서 호출
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE" ||
    !enteredNumber
  ) {
    return;
  }

  // if (
  //   calculationType === "ADD" ||
  //   calculationType === "SUBTRACT" ||
  //   calculationType === "MULTIPLY" ||
  //   calculationType === "DIVIDE"
  // ) {
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber; // currentResult = currentResult + enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    // else {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}
// }

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
