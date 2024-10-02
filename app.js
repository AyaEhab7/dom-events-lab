/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let inputOne = '';
let inputTwo = '';
let result = null;
let operation = null;
/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });

  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
  
    if (event.target.classList.contains('number')) {
        hNumber(event.target.innerText);
    }else if (event.target.classList.contains('operator')) {
        Operator(event.target.innerText);
    } else if (event.target.classList.contains('equals')) {
        calculate();  
    }else if (event.target.innerText === 'C') {
        clear();
    }    
  });
console.log(display);
 
/*-------------------------------- Functions --------------------------------*/
function hNumber(number) {
  inputTwo += number;
  display.innerText = inputTwo; 
}

function Operator(op) {
  if (inputTwo === '') 
    return; 
  if (inputOne !== '') {
    calculate(); 
  }
  operation = op;
  inputOne = inputTwo;
  inputTwo = '';
}

function calculate() {
  const a = parseFloat(inputOne);
  const b = parseFloat(inputTwo);

  if (operation === '/' && b === 0) {
    display.innerText = 'Error';
    clear(); 
    return;
  }

  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      return;
  }

  display.innerText = result; 
  inputOne = ''; 
  inputTwo = result.toString(); 
  operation = ''; 
}

function clear() {
  inputOne = '';
  inputTwo = '';
  operation = null;
  display.innerText = '0'; 
}