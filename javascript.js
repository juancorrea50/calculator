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
}

console.log("Multiply "+ multiply(2,4));

const divide = function(num1,num2){
    if(num2 == 0){
        return "NOPE"
    };
    return num1/num2;
};

console.log("Divide " + divide(2,4));
/*
const operate = function((), num1, num2) {
    if(() = )
}
*/