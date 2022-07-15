const operatorArray = ['+','-','*','/'];
const numberChoice = [0];

const buttons = document.querySelector('button');
const displayInput = document.getElementById('result');



function display(value){
    
        //Repeated values do not show up (1 bug: Only covers one  extra click of the same operator)
        if(value == '+' && numberChoice[(numberChoice.length-1)] == '+'|| value == '-' && numberChoice[(numberChoice.length-1)] == '-' 
        || value == '*' && numberChoice[(numberChoice.length-1)] == '*' || value == '/' && numberChoice[(numberChoice.length-1)] == '/'
        || value == '.' && numberChoice[(numberChoice.length-1)] == '.'){
            //Doesn't add the selection to the displayInput variable and pops the choice from the numberChoice array
            for(x=0;x<numberChoice.length;x++){
                if(numberChoice[x]== '+' || numberChoice[x]== '-' || numberChoice[x]== '*' || numberChoice[x]== '/' || numberChoice[x]== '.'){
                    console.log(displayInput.value);
                }
            }
        } else{
            //Adds the input to the value to be displayed on the element in the HTML
            displayInput.value += value;

            numberChoice.push(value);
            console.log(numberChoice);
        }
 

}


function clearDisplay(){
    displayInput.value = "";
}





//Arithmetic functions
const add = function(num1, num2){
    return num1 + num2;
};

console.log("Add "+add(2,4));

const subtract = function(num1, num2){
    return num1 - num2;
};

console.log("Subtract "+subtract(2,4));

const multiply = function(num1, num2){
    return num1 * num2;
};

console.log("Multiply "+ multiply(2,4));

const divide = function(num1,num2){
    if(num2 == 0){
        return "DO NOT DIVIDE BY ZERO"
    };
    return num1/num2;
};

console.log("Divide " + divide(2,4));

const operate = function(op, num1, num2) {
    if(op == '+'){
        return add(num1, num2);
    } else if(op == '-'){
        return subtract(num1,num2);
    } else if(op == '*'){
        return multiply(num1,num2);
    } else if(op == '/'){
        return divide(num1,num2);
    } else {
        return "Skipped";
    }
};

console.log(operate("/", 2, 2));
