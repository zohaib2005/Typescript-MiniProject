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

interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos")!;
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
}

function createTodo(todo: Todo) {
  const newLI = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
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
