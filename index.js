// creating the basic functions for simple math
  // key note for futer referance, calculation functions take  variables of  type Number

function add(numberA , numberB){
    return (numberA + numberB);
}
function subtract(numberA,numberB){
    return (numberA - numberB);
}
function multiply(numberA,numberB){
    return (numberA * numberB);
}
function divide(numberA,numberB){
    return (numberA / numberB);
}


function operate(numberA , operator , numberB){
    switch (operator) {
        case '+':
            return add(numberA,numberB);

        case '-':        
            return subtract(numberA,numberB);
     
        case '*':
            return multiply(numberA,numberB);

        case '/':
            return divide(numberA,numberB);
    
        default:
            break;
    }

}


function populateDisplay(){
    
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('button');
    let argArray =[];
    let lastNumber;

    buttons.forEach((button) => button.addEventListener('click', () =>{
        
        
        button.className === 'digit'?argArray.push(button.id): button.className;
        
        display.textContent= argArray.join('');

        if(button.className ==='operator'){
            lastNumber = Number(argArray.join(''));
            console.log(`${lastNumber} is type of ${typeof lastNumber}`);
        }
    }))
    
    

}
populateDisplay();


//console.log(operate(2, '+', 10));
//console.log(operate(2, '-', 10));
//console.log(operate(2, '*', 10));
//console.log(operate(2, '/', 10));