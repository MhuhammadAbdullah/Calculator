var display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value !== '' && !isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

function appendDot() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function calculateResult() {
    if (display.value) {
        display.value = eval(display.value.replace('x', '*').replace('%', '/100'));
    }
}

