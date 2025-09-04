function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
let x = '';
let y = '';
let operator = '';
let onFirst = true;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent == '0') {
            display.textContent = '';
        }
        
        if ('+-*/'.includes(button.textContent)) {
            operator += button.textContent;
            onFirst = false;
            display.textContent += ` ${operator} `;
        } else if (!onFirst) {
            y += button.textContent;
            display.textContent += button.textContent;
        } else {
            x += button.textContent;
            display.textContent += button.textContent;
        }
        console.log(`${x} ${operator} ${y} = ?`);
    });
});