document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const tasksList = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = document.querySelector("#new-task-description").value;

const listItem = document.createElement("li");
listItem.textContent = inputValue;

const removeButton = document.createElement("button");
removeButton.textContent = "Remove Task";
removeButton.addEventListener("click", (e) => {
  listItem.remove();
});

listItem.appendChild(removeButton);
tasksList.appendChild(listItem);
form.reset();
  });
});