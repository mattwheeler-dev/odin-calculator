const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
let answer = 0;

// SEND NUMBERS TO DISPLAY
const displayNums = (num) => {
	if (num.textContent == "AC") {
		display.textContent = "0";
	} else {
		display.textContent += num;
	}
};

// BASIC MATH HELPER FUNCTIONS
const add = (num1, num2) => {
	answer = num1 + num2;
	return answer;
};

const subtract = (num1, num2) => {
	answer = num1 - num2;
	return answer;
};

const multiply = (num1, num2) => {
	answer = num1 * num2;
	return answer;
};

const divide = (num1, num2) => {
	answer = num1 / num2;
	return answer;
};

// PRIMARY FUNCTION
const calculate = (n1, n2, op) => {
	if (op == "+") {
		add(n1, n2);
	} else if (op == "-") {
		subtract(n1, n2);
	} else if (op == " *") {
		multiply(n1, n2);
	} else if (op == "/") {
		divide(n1, n2);
	} else {
		alert("An error has occurred, please try again");
	}
	display.textContent == answer;
};

// ADD EVENT LISTENERS TO NUMS
numbers.forEach((number) => {
	number.addEventListener("click", (e) => {
		displayNums(e.target.textContent);
	});
});

// ADD EVENT LISTENERS TO OPERATORS
operators.forEach((operator) => {
	operator.addEventListener("click", (e) => {
		displayNums(e.target.textContent);
	});
});
