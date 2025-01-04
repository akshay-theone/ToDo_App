let input = document.getElementById("inputBar");
let addBtn = document.getElementById("addBtn");
let container = document.getElementById("taskContainer");
let taskDiv = document.getElementById("taskDiv");
let delTask = document.getElementById("delTask");
let desc = document.getElementById("desc");
let delAll = document.getElementById("delAll");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  container.innerHTML = "";
  tasks.forEach((task, index) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let delLink = document.createElement("a");
    delLink.href = "#";
    let check = document.createElement("input");
    check.type = "checkbox";
    div.appendChild(check);
    div.appendChild(p);
    div.appendChild(delLink);

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("class", "size-6");
    svg.setAttribute("width", "30px");

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute(
      "d",
      "M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
    );
    path.setAttribute("clip-rule", "evenodd");
    svg.appendChild(path);
    delLink.appendChild(svg);

    div.classList.add("taskDiv");
    p.classList.add("desc");
    delLink.classList.add("delTask");
    check.classList.add("checkbox");
    p.innerText = task.description;

    if (task.completed) {
      check.checked = true;
      p.style.textDecoration = "line-through";
    }

    container.appendChild(div);

    check.addEventListener("change", () => {
      if (check.checked) {
        p.style.textDecoration = "line-through";
        task.completed = true;
      } else {
        p.style.textDecoration = "none";
        task.completed = false;
      }
      updateLocalStorage();
    });

    delLink.addEventListener("click", (e) => {
      e.preventDefault();
      tasks.splice(index, 1);
      updateLocalStorage();
      renderTasks();
    });
  });
}

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

renderTasks();

addBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Task cannot be empty!");
  } else {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let delLink = document.createElement("a");
    delLink.href = "#";
    let check = document.createElement("input");
    check.type = "checkbox";
    div.appendChild(check);
    div.appendChild(p);
    div.appendChild(delLink);

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("class", "size-6");
    svg.setAttribute("width", "30px");

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute(
      "d",
      "M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
    );
    path.setAttribute("clip-rule", "evenodd");
    svg.appendChild(path);
    delLink.appendChild(svg);

    div.classList.add("taskDiv");
    p.classList.add("desc");
    delLink.classList.add("delTask");
    check.classList.add("checkbox");
    p.innerText = input.value;

    let task = {
      description: input.value,
      completed: false,
    };

    tasks.push(task);
    input.value = "";
    updateLocalStorage();
    container.appendChild(div);

    check.addEventListener("change", () => {
      if (check.checked) {
        p.style.textDecoration = "line-through";
        task.completed = true;
      } else {
        p.style.textDecoration = "none";
        task.completed = false;
      }
      updateLocalStorage();
    });

    delLink.addEventListener("click", (e) => {
      e.preventDefault();
      container.removeChild(div);
      tasks = tasks.filter((t) => t !== task);
      updateLocalStorage();
    });
  }
});

delAll.addEventListener("click", () => {
  container.innerHTML = "";
  tasks = [];
  updateLocalStorage();
});
