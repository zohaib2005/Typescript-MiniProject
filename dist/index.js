"use strict";
// const btn = document.getElementById("btn");
// By default typescript will assume btn type will be HTMLElement | null so one solution is to use ?
// btn?.addEventListener("click", function () {
//   alert("CLICKED!!!");
// });
// We can also use Typescript Non Null Assertion Operator !
// with TypeScript Non Null Assertion Operator
// It will tell TypeScript don't worry we assure btn will not be null
// Type Assertions -> button and input will have HTMLElement as parent class by default, but to make specific type we use as keyword
// and specify HTMLButtonElement or HTMLInputElement
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    const newTodoText = input.value;
    const newLI = document.createElement("li");
    if (input.value === "") {
        alert("Input is empty");
        return;
    }
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(newTodoText);
    newLI.append(checkbox);
    list.append(newLI);
    console.log("SUBMITTED!");
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
