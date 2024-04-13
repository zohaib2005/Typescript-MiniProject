"use strict";
const btn = document.getElementById("btn");
// By default typescript will assume btn type will be HTMLElement | null so one solution is to use ?
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    alert("CLICKED!!!");
});
// We can also use Typescript Non Null Assertion Operator !
// with TypeScript Non Null Assertion Operator
// It will tell TypeScript don't worry we assure btn will not be null
// Type Assertions -> button and input will have HTMLElement as parent class by default, but to make specific type we use as keyword
// and specify HTMLButtonElement or HTMLInputElement
const bton = document.getElementById("btn");
const input = document.getElementById("todoinput");
input;
bton.addEventListener("click", function () {
    alert(input.value);
    input.value = "";
});
let mystery = "Hello World!!!";
const numChars = mystery.length;
