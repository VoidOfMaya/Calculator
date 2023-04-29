// creating the basic functions for simple math
  // key note for futer referance, calculation functions take  variables of  type Number

function add(numberA , numberB){
    return Number(numberA + numberB);
}
function subtract(numberA,numberB){
    return Number(numberA - numberB);
}
function multiply(numberA,numberB){
    return Number(numberA * numberB);
}
function divide(numberA,numberB){
    return Number(numberA / numberB);
}


function operate(numberA , operator , numberB){
    switch (operator) {
        case '+':
            add(numberA,numberB);

        case '-':        
            subtract(numberA,numberB);
     
        case '*':
            multiply(numberA,numberB);

        case '/':
            divide(numberA,numberB);
    
        default:
            break;
    }

}

function populateDisplay(){
    
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.row button');
    const displayArray =[];
    let bufferArray =[];
    let numberHolder;
    let firstNumber =0;
    let lastNumber =0;
    let choosenOperator;
    buttons.forEach((btn) => btn.addEventListener('click', () =>{
        
        //display content on screen
        displayArray.push(btn.id);
        display.textContent= displayArray.join('');

        //populate relevant variables required for the operate function
        if( btn.className ==='digit'){
            bufferArray.push(btn.id);
        }
        if (btn.className === 'operator'){
            choosenOperator = btn.id;
            firstNumber === 0? firstNumber = bufferArray.join('') : lastNumber = bufferArray.join('');
            bufferArray =[];
            if (choosenOperator ==='='){
                console.log(operate(firstNumber, choosenOperator,lastNumber));
            }
        
        }
        //console.log(`${choosenOperator} is of type ${typeof choosenOperator}`);

        console.log(` first = ${firstNumber} , operator = ${choosenOperator} , second = ${lastNumber} , placeholder = ${bufferArray.join('')}`);
        

    }))
    
    

}
populateDisplay();


//console.log(operate(2, '+', 10));
//console.log(operate(2, '-', 10));
//console.log(operate(2, '*', 10));
//console.log(operate(2, '/', 10));