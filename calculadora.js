let display = document.getElementById('display');
  let currentNumber = '';
  let operator = '';
  let previousNumber = '';

  function appendToDisplay(value) {
    if (value === '.' && currentNumber.includes('.')) return; 
    if (currentNumber === '0' && value !== '.') {
      currentNumber = ''; 
    }
    currentNumber += value;
    display.textContent = currentNumber;
  }

  function setOperator(op) {
    if (currentNumber === '') return; 
    if (previousNumber !== '') {
      calculate(); 
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
  }

  function calculate() {
    if (previousNumber === '' || currentNumber === '') return; 
    let result;
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return;
    }

    currentNumber = result.toString();
    display.textContent = currentNumber;
    previousNumber = '';
    operator = '';
  }

  function clearDisplay() {
    display.textContent = '0';
    currentNumber = '';
    operator = '';
    previousNumber = '';
  }