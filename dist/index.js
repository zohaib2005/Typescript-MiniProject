"use strict";
const btn = document.getElementById("btn");
// By default typescript will assume btn type will be HTMLElement | null so one solution is to use ?
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    alert("CLICKED!!!");
});
// We can also use Typescript Non Null Assertion Operator !
// with TypeScript Non Null Assertion Operator
// It will tell TypeScript don't worry we assure btn will not be null
const bton = document.getElementById("btn");
bton.addEventListener("click", function () {
    alert("CLICKED!!!");
});
