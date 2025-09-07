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
    if (+y === 0) {
        alert('Err: cannot divide by 0!');
        return 0;
    }
    return +x / +y;
}

function operate(operator, x, y) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(x, y);
            break;
        case '-':
            result = subtract(x, y);
            break;
        case '*':
            result = multiply(x, y);
            break;
        case '/':
            result = divide(x, y);
            break;
    }
    return Number.parseFloat(result.toFixed(5));
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
                if (y) { // if all values are present, perform calc
                    display.textContent = operate(operator, x, y);
                }
            }
            display.textContent += ` ${button.textContent} `;
        } else if (!hasNumber(display)) {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    });
});
