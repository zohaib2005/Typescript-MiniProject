"use strict";
// const btn = document.getElementById("btn");
// By default typescript will assume btn type will be HTMLElement | null so one solution is to use ?
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
        console.log("CLICKED");
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
    console.log("SUBMITTED!");
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
