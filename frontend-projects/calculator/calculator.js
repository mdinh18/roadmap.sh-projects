let currentInput = '';
let operator = '';
let previousInput = '';
    
function appendNumber(number){
    currentInput += number;
    document.getElementById('display').value = currentInput;
}
function setOperator(op){
    operator = op;
    previousInput = currentInput
    currentInput = '';
}
function calculate(){
    let result;
    if(operator === '+'){
        result = parseFloat(previousInput) + parseFloat(currentInput);
    }else if(operator === '-'){
        result = parseFloat(previousInput) - parseFloat(currentInput);
    }else if(operator === '*'){
        result = parseFloat(previousInput) * parseFloat(currentInput);
    }else{
        result = parseFloat(previousInput) / parseFloat(currentInput);
    }
    document.getElementById('display').value = result; // Display the result
    currentInput = result.toString(); // Store the result as the new current input
    operator = ''; // Reset the operator
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = ''; // Clear the display
}
