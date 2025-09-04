function add(x, y) {
    return +x + +y;
}

function subtract(x, y) {
    return +x - +y;
}

function multiply(x, y) {
    return +x * +y;
}

function divide(x, y) {
    return +x / +y;
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
            return Math.floor(divide(x, y));
    }
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

function hasNumber(div) {
    return div.textContent !== '0';
}

function hasOperand(div) {
    return div.textContent.includes(' ');
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            display.textContent = '0';
        } else if (button.textContent === '=') {
            if (hasNumber(display) && hasOperand(display)) {
                let [x, operator, y] = display.textContent.split(' ');
                display.textContent = operate(operator, x, y);
            }
        } else if ('+-*/'.includes(button.textContent)) {
            if (hasOperand(display)) {
                let [x, operator, y] = display.textContent.split(' ');
                display.textContent = operate(operator, x, y);
            }
            if (hasNumber(display)) {
                display.textContent += ` ${button.textContent} `;
            }
        } else if (display.textContent === '0') {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    });
});