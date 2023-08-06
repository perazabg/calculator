const numpad = document.getElementById('numpad');
const btns = document.getElementsByClassName('btns');
const display = document.getElementById('display');

let operator = '';
let num1 = '';
let num2 = '';
let result = '';

function add(a,b){return a+b}

function sub(a,b){return a-b}

function mult(a,b){return a*b}

function div(a,b){return a/b}

function operate(op, num1, num2){
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  switch(op){
    case '+':
      return add(n1,n2);
    case '-':
      return sub(n1,n2);
    case '*': 
      return mult(n1,n2);
    case '/':
      return div(n1,n2);
  }
}

function updateDisplay() {
  display.textContent = num1 + ' ' + operator + ' ' + num2;
}

function clear(){
  operator = '';
  num1 = '';
  num2 = '';
  result = '';
  display.textContent = num1 + '' + operator + '' + num2;
}

function handleNumber(value) {
      if (operator === '') {
        num1 += value;
      } else {
        num2 += value;
      }
      updateDisplay();
}

function handleOperator(value){
  if(num1 !== '' && num2 === ''){
    operator = value;
  } else if(num1 !== '' && num2 !== ''){
    handleEqual();
    num1 = result;
    num2 = '';
    operator = value;
  }
  updateDisplay();
}

function handleEqual(){
  if(num1 !== '' && num2 !== ''){
    result = operate(operator, num1, num2);
    num1 = result;
    num2 = '';
    operator = '';
  }
  updateDisplay();
}

for(i=0; i<btns.length;i++){
  btns[i].addEventListener('click', event => {
    const value = event.target.textContent;
    //console.log(value);
    if(!isNaN(parseFloat(value))){
      //console.log(value);
      handleNumber(value);
    } else if(value === '+' || value === '-' ||
              value === '*' || value === '/'){
      handleOperator(value);
    } else if(value === '='){
      handleEqual(value);
    } else if(value === 'C'){
      clear();
    }
  })
}