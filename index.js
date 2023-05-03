// creating the basic functions for simple math
  // key note for futer referance, calculation functions take  variables of  type Number


function populateDisplay(){
    
    const currentDisNumber = document.querySelector('.main-display');
    const lastDisNumber= document.querySelector('.upper-display');

    const number = document.querySelectorAll('.digit');
    const operators = document.querySelectorAll('.operator');
    const equal = document.querySelector('.equal');
    equal.addEventListener('click', ()=>{
        if(currentNum != '' && lastNum != ''){
            operate();
        }
    });
    const clear= document.querySelector('.clear');
    clear.addEventListener('click', clearCalc)

    let currentNum= '';
    let lastNum='';
    let operator;
    
    number.forEach((btn) => btn.addEventListener('click', () =>{

        if (currentNum.length <= 12){
            currentNum +=btn.id;
            console.log(`${currentNum}`);
            currentDisNumber.textContent = currentNum;    
        }
        
    }))
    
    operators.forEach((op) => op.addEventListener('click', ()=>{
        if(op.id ==='clear'){
            currentNum= '';
            lastNum='';
            operator='';

            
        }
        operator = op.id;
        lastDisNumber.textContent = currentNum + " " + operator;
        lastNum = currentNum;
        currentNum =''
        currentDisNumber.textContent= '';


        console.log(`last number: ${lastNum} operator: ${operator} current number: ${currentNum}`);
    }))

    

    function operate(){
        currentNum = Number(currentNum);
        lastNum = Number(lastNum);

        operator === '+'?lastNum += currentNum :null;
        operator === '-'?lastNum -= currentNum :null;
        operator === '*'?lastNum *= currentNum :null;
        operator === '/'?lastNum /= currentNum :null;

        lastDisNumber.textContent ='';
        currentDisNumber.textContent= lastNum;
    }
    function clearCalc(){
        operator ='';
        lastNum = '';
        currentNum='';
        lastDisNumber.textContent ='';
        currentDisNumber.textContent ='';
    }
    

}
populateDisplay();



//console.log(operate(2, '+', 10));
//console.log(operate(2, '-', 10));
//console.log(operate(2, '*', 10));
//console.log(operate(2, '/', 10));