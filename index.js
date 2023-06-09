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
            currentDisNumber.textContent = currentNum;    
        }
        
    }))
    
    operators.forEach((op) => op.addEventListener('click', ()=>{
        if(op.id ==='clear'){
            currentNum= '';
            lastNum='';
            operator=''; 
        }
        if(lastNum ===""){
            lastNum = currentNum;
            opCheck(op.id);
        } else if(currentNum ===""){
            opCheck(op.id)
        }else{
            operate();
            operator = op.id;
            currentDisNumber.textContent= '0';
            lastDisNumber.textContent= lastNum +' ' + operator;
            currentNum='';
        }
        

    }))

    function opCheck(text){
        operator =text;
        lastDisNumber.textContent = lastNum + " " + operator;
        currentDisNumber.textContent= '0';
        currentNum = "";
    }
    

    

    function operate(){
        currentNum = Number(currentNum);
        lastNum = Number(lastNum);

        operator === '+'?lastNum += currentNum :null;
        operator === '-'?lastNum -= currentNum :null;
        operator === '*'?lastNum *= currentNum :null;
        if(operator === '/'){
            if(currentNum ===0){
                lastNum = "divide by 0 Error"
            }else{
                lastNum /= currentNum;
  
            }
            console.log(lastNum.toString().length);
        }

        lastDisNumber.textContent ='';
        lastNum.toString().length >= 12? currentDisNumber.textContent= lastNum.toString().slice(0.12) + '...' :
                                         currentDisNumber.textContent= lastNum;
    }
    function clearCalc(){
        operator ='';
        lastNum = '';
        currentNum='';
        lastDisNumber.textContent ='0';
        currentDisNumber.textContent ='0';
    }
    

}
populateDisplay();

