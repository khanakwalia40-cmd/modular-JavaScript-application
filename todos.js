// todos.js
import { displayTodos } from "./displayTodos.js";

async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    displayTodos(data); // use module to render
  } catch (err) {
    console.error(err);
  }
}

getTodos();
