let finalResult;
let operatorChoice = '';
const numberChoice = [];


const displayInput = document.getElementById('result');
const buttonSwitch = document.getElementsByClassName('op-button');
const decimalButton = document.getElementById('decimal-button');
const operateButton = document.getElementById('operate');

//Initialize the operator buttons and decimal button to disabled
decimalButton.disabled = true;
operateButton.disabled = true;
for(x=0;x<buttonSwitch.length;x++){
    buttonSwitch[x].disabled = true;
}

//Display function
function display(value){
        //Disabled the buttons after hitting one operator
        if(value == '+' || value == '-' || value == '*' || value == '/'){
            operateButton.disabled = false;
            decimalButton.disabled = false;
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
            for(x=0;x<buttonSwitch.length;x++){
                buttonSwitch[x].disabled = false;
            }
            decimalButton.disabled = false;

            numberChoice.push(value);
            console.log(numberChoice);

        }
        //Scan numberChoice Array to see if there is a decimal and if so disable the decimal button
        for(x=0;x<numberChoice.length;x++){
            if(numberChoice[x] == '.'){
                console.log('decimal disabled')
                decimalButton.disabled = true;
            }
        }

        //Adds the input to the value to be displayed on the element in the HTML
        displayInput.value += value;

}


//Clear function
function clearDisplay(){
    //Clears display and numberChoice Array
    numberChoice.splice(0,numberChoice.length);
    console.log(numberChoice);
    displayInput.value = "";
    //Make all non-numbered buttons disabled
    operateButton.disabled = true;
    decimalButton.disabled = true;
    for(x=0;x<buttonSwitch.length;x++){
        buttonSwitch[x].disabled = true;
    }


}


//Arithmetic functions
const add = function(num1, num2){
    const array1 = num1.split('');
    const array2 = num2.split('');

    console.log(`Add function parameters ${num1} ${num2}`);
    //If one num has a decimal point, convert both values to float
    for(x=0;x<array1.length;x++){
        if(array1[x]== '.' || array2[x] == '.'){
            let sum;
            sum = (parseFloat(num1)) + (parseFloat(num2));
            return sum.toFixed(2);
        }

    }

    return parseInt(num1) + parseInt(num2);

};

const subtract = function(num1, num2){
    const array1 = num1.split('');
    const array2 = num2.split('');

    console.log(`subtract function parameters ${num1} ${num2}`);
    //If one num has a decimal point, convert both values to float
    for(x=0;x<array1.length;x++){
        if(array1[x]== '.' || array2[x] == '.'){
            let dif = (parseFloat(num1)) - (parseFloat(num2));
            return dif.toFixed(2);
        }

    }

    return parseInt(num1) - parseInt(num2);
};

const multiply = function(num1, num2){
    const array1 = num1.split('');
    const array2 = num2.split('');

    console.log(`multiply function parameters ${num1} ${num2}`);
    //If one num has a decimal point, convert both values to float
    for(x=0;x<array1.length;x++){
        if(array1[x]== '.' || array2[x] == '.'){
            let product = (parseFloat(num1)) * (parseFloat(num2));
            return product.toFixed(2);
        }

    }

    return parseInt(num1) * parseInt(num2);
};

const divide = function(num1,num2){
    if(parseInt(num2) == 0){
        return "CAN NOT DIVIDE BY ZERO"
    };
    const array1 = num1.split('');
    const array2 = num2.split('');

    console.log(`divide function parameters ${num1} ${num2}`);
    //If one num has a decimal point, convert both values to float
    for(x=0;x<array1.length;x++){
        if(array1[x]== '.' || array2[x] == '.'){
            let dividend= (parseFloat(num1)) / (parseFloat(num2));
            return dividend.toFixed(2);
        }

    }

    return parseInt(num1) / parseInt(num2);
};

//Operate Function
function operate() {
    for(x=2;x<numberChoice.length;x++){
        numberChoice[1] += numberChoice[x];
    }
    numberChoice.splice(2, numberChoice.length);
    console.log('operate activated')
    console.log(numberChoice);

    if(operatorChoice == '+'){
        displayInput.value = add(numberChoice[0], numberChoice[1]);
        finalResult = displayInput.value;
        numberChoice.splice(0, numberChoice.length, finalResult);
        console.log(numberChoice);
    } else if(operatorChoice == '-'){
        displayInput.value = subtract(numberChoice[0],numberChoice[1]);
        finalResult = displayInput.value;
        numberChoice.splice(0, numberChoice.length, finalResult);
        console.log(numberChoice);
    } else if(operatorChoice == '*'){
        displayInput.value = multiply(numberChoice[0],numberChoice[1]);
        finalResult = displayInput.value;
        numberChoice.splice(0, numberChoice.length, finalResult);
        console.log(numberChoice);
    } else if(operatorChoice == '/'){
        displayInput.value =  divide(numberChoice[0],numberChoice[1]);
        finalResult = displayInput.value;
        numberChoice.splice(0, numberChoice.length, finalResult);
        console.log(numberChoice);
    }
    //Allows for the operator buttons to be pressed after operate is resolved. Decimal is still disabled until a number is entered
    operateButton.disabled = true;
    decimalButton.disabled = true;
    for(x=0;x<buttonSwitch.length;x++){
        buttonSwitch[x].disabled = false;
    }
    

};




