let currentInput = '';
let displayValue = '0';
let ans = '';

function appendToDisplay(value) {
  currentInput += value;
  displayValue = currentInput;
  updateDisplay();
}

function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  displayValue = currentInput;
  updateDisplay();
}

function performOperation(operation) {
  if (operation === 'sqrt') {
    try {
      currentInput = Math.sqrt(eval(currentInput)).toString();
      displayValue = currentInput;
      updateDisplay();
    } catch (error) {
      displayValue = 'Error';
      updateDisplay();
      currentInput = '';
    }
  }
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    displayValue = currentInput;
    updateDisplay();
    ans = currentInput;
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
    currentInput = '';
  }
}

function clearDisplay() {
  currentInput = '';
  displayValue = '0';
  updateDisplay();
}

function useAns() {
  currentInput += ans;
  displayValue = currentInput;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}
