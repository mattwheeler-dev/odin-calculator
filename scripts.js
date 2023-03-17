const numBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const clearBtn = document.getElementById("clear-btn");
const deleteBtn = document.querySelector("#del-btn");
const decimalBtn = document.querySelector("#deci-btn");
const equalsBtn = document.querySelector("#eq-btn");
const prevDisplay = document.querySelector(".upper-display");
const currDisplay = document.querySelector(".lower-display");

// ADD EVENT LISTENERS FOR NUMS
numBtns.forEach((numBtn) => {
	numBtn.addEventListener("click", () => displayNums(numBtn.textContent));
});

// ADD EVENT LISTENERS FOR OPERATORS
operatorBtns.forEach((opBtn) => {
	opBtn.addEventListener("click", chooseOperator);
});

// ADD EVENT LISTENERS FOR DECIMAL, CLEAR, DELETE, & EQUALS
decimalBtn.addEventListener("click", addDecimal);
clearBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", deleteLast);
equalsBtn.addEventListener("click", operate);

// DISPLAY NUMBER FUNCTION
function displayNums(num) {
	if (currDisplay.textContent === "0") {
		currDisplay.textContent = "";
		currDisplay.textContent += num;
	} else {
		currDisplay.textContent += num;
	}
}

// ADD DECIMAL FUNCTION
function addDecimal() {
	if (currDisplay.textContent.includes(".")) {
		return;
	} else {
		currDisplay.textContent += ".";
	}
}

// CHOOSE OPERATOR FUNCTION
function chooseOperator() {}

// CLEAR FUNCTION
function clear() {
	prevDisplay.textContent = "0";
	currDisplay.textContent = "0";
}

// DELETE LAST FUNCTION
function deleteLast() {}

// BASIC MATH FUNCTIONS
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

// OPERATE / CALCULATE FUNCTION
function operate(num1, num2, operator) {}
