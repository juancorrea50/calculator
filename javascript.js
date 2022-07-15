let num1;
let num2;
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
