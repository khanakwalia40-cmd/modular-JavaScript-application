// displayTodos.js
export function displayTodos(data) {
  const container = document.getElementById("todos-container");
  container.innerHTML = "";

  data.forEach((todo) => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.margin = "4px";
    div.style.padding = "6px";

    div.innerHTML = `
      <p><strong>ID:</strong> ${todo.id}</p>
      <p><strong>Title:</strong> ${todo.title}</p>
      <p><strong>Completed:</strong> ${todo.completed}</p>
    `;
    container.appendChild(div);
  });
}
