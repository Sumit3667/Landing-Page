let calculation = '';
function appendValue(value) {
    if(value == 'DEL'){
        calculation = calculation.slice(0, -1);
    }
    else{
        calculation += value;
    }
    updateResult();
}
function clearResult() {
    calculation = '';
    updateResult();
}
function calculate() {
    let result = eval(calculation);
    calculation = result.toString();
    updateResult();
}
function updateResult() {
    document.getElementById('result').value = calculation;
}
