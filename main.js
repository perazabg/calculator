const ADD = '+';
const SUB = '-';
const MULT = '*';
const DIV = '/';

function add(a,b){return a+b}

function sub(a,b){return a-b}

function mult(a,b){return a*b}

function div(a,b){return a/b}
//let op = prompt("choose one (+,-,*,/)");

function operate(op, num1, num2){
  switch(op){
    case '+':
      return add(num1,num2);
    case '-':
      return sub(num1,num2);
    case '*': 
      return mult(num1,num2);
    case '/':
      return div(num1,num2);
  }
}