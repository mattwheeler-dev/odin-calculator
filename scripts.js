const numBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const clearBtn = document.querySelector("#clear-btn");
const deleteBtn = document.querySelector("#del-btn");
const decimalBtn = document.querySelector("#deci-btn");
const equalsBtn = document.querySelector("#eq-btn");
const prevDisplay = document.querySelector(".upper-display");
const currDisplay = document.querySelector(".lower-display");

// BASIC MATH FUNCTIONS
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
