class Calculator {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    get addition() {
        return this.firstNumber + this.secondNumber;
    }
    get subtraction() {
        return this.firstNumber - this.secondNumber;
    }
    get multiplication() {
        return this.firstNumber * this.secondNumber;
    }
    get division() {
        return this.firstNumber / this.secondNumber;
    }
}

function gets(that) {
    let firstNumber = (document.getElementById('firstNumber').value);
    let secondNumber = (document.getElementById('secondNumber').value);
    that.value = (firstNumber);
    that.value = (secondNumber);
}
function addition() {
    const assign = new Calculator(parseInt(firstNumber.value), parseInt(secondNumber.value));
    document.getElementById('result').innerHTML = assign.addition;
}
function subtraction() {
    const assign = new Calculator(parseInt(firstNumber.value), parseInt(secondNumber.value));
    document.getElementById('result').innerHTML = assign.subtraction;
}
function multiplication() {
    const assign = new Calculator(parseInt(firstNumber.value), parseInt(secondNumber.value));
    document.getElementById('result').innerHTML = assign.multiplication;
}
function division() {
    const assign = new Calculator(parseInt(firstNumber.value), parseInt(secondNumber.value));
    document.getElementById('result').innerHTML = assign.division;
}
