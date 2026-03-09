const numBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const clearBtn = document.querySelector('#clear-btn');
const deleteBtn = document.querySelector('#del-btn');
const decimalBtn = document.querySelector('#deci-btn');
const equalsBtn = document.querySelector('#eq-btn');
const prevDisplay = document.querySelector('#upper-display');
const currDisplay = document.querySelector('#lower-display');
let currOperation = null;
let firstOperand = '';
let secondOperand = '';

const displayNums = (num) => {
	if (currDisplay.textContent === '0') {
		currDisplay.textContent = '';
		currDisplay.textContent += num;
	} else {
		currDisplay.textContent += num;
	}
};

const addDecimal = () => {
	if (currDisplay.textContent.includes('.')) {
		return;
	} else {
		currDisplay.textContent += '.';
	}
};

const setOperation = (operator) => {
	firstOperand = currDisplay.textContent;
	currDisplay.textContent = '0';
	currOperation = operator;
	prevDisplay.textContent = `${firstOperand} ${currOperation}`;
};

const clear = () => {
	prevDisplay.textContent = '0';
	currDisplay.textContent = '0';
};

const deleteLast = () => {
	if (currDisplay.textContent.length === 1) {
		currDisplay.textContent = '0';
		return;
	}
	currDisplay.textContent = currDisplay.textContent.toString().slice(0, -1);
};

const add = (x, y) => {
	return x + y;
};

const subtract = (x, y) => {
	return x - y;
};

const multiply = (x, y) => {
	return x * y;
};

const divide = (x, y) => {
	return x / y;
};

const operate = (num1, num2, operator) => {
	num1 = Number(num1);
	num2 = Number(num2);

	switch (operator) {
		case '+':
			return add(num1, num2);
		case '-':
			return subtract(num1, num2);
		case '*':
			return multiply(num1, num2);
		case '/':
			return divide(num1, num2);
		default:
			return null;
	}
};

const evaluate = () => {
	if (currOperation === null) {
		return;
	} else if (currOperation === '/' && currDisplay.textContent === '0') {
		alert(
			'Error: Dividing by 0 can create black holes... please refrain from sending our universe to the void...',
		);
		return;
	} else {
		secondOperand = currDisplay.textContent;
		currDisplay.textContent =
			Math.round(
				operate(firstOperand, secondOperand, currOperation) * 100,
			) / 100;
		prevDisplay.textContent = `${firstOperand} ${currOperation} ${secondOperand} =`;
		currOperation = null;
	}
};

// Event listeners
numBtns.forEach((numBtn) => {
	numBtn.addEventListener('click', () => displayNums(numBtn.textContent));
});

operatorBtns.forEach((opBtn) => {
	opBtn.addEventListener('click', () => setOperation(opBtn.textContent));
});

decimalBtn.addEventListener('click', addDecimal);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteLast);
equalsBtn.addEventListener('click', evaluate);

// Footer
const footer = document.querySelector('footer p');
footer.textContent = `© ${new Date().getFullYear()} mattwheeler-dev`;
