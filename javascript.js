let operatorChoice = '';
const numberChoice = [];


const displayInput = document.getElementById('result');
const buttonSwitch = document.getElementsByClassName('op-button');
const calculateButton = document.querySelector('.calculate')


function display(value){

        //Disabled the buttons after hitting one operator
        if(value == '+' || value == '-' || value == '*' || value == '/'){
            for(x=0;x<buttonSwitch.length;x++){
                buttonSwitch[x].disabled = true;
            }
            operatorChoice = value;
            //Makes the first value in numberChoice Array the first number in the pair of numbers and removes excess data to save memory
            for(x=1;x<numberChoice.length;x++){
                numberChoice[0] += numberChoice[x];
            }
            numberChoice.splice(1, numberChoice.length);
            console.log(numberChoice)
            console.log(operatorChoice);
        } else {
            numberChoice.push(value);
            console.log(numberChoice);

        }

        //Adds the input to the value to be displayed on the element in the HTML
        displayInput.value += value;


 

}



function clearDisplay(){
    //Clears display and numberChoice Array
    numberChoice.splice(0,numberChoice.length);
    console.log(numberChoice);
    displayInput.value = "";

    //Re enables operator buttons
    for(x=0;x<buttonSwitch.length;x++){
        buttonSwitch[x].disabled = false;
    }

}





function operate() {
    for(x=2;x<numberChoice.length;x++){
        numberChoice[1] += numberChoice[x];
    }
    numberChoice.splice(2, numberChoice.length);

    console.log(numberChoice);
/*
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
    */
};





calculateButton.addEventListener('click', operate());




//Arithmetic functions
const add = function(num1, num2){
    return num1 + num2;
};

const subtract = function(num1, num2){
    return num1 - num2;
};

const multiply = function(num1, num2){
    return num1 * num2;
};

const divide = function(num1,num2){
    if(num2 == 0){
        return "DO NOT DIVIDE BY ZERO"
    };
    return num1/num2;
};
