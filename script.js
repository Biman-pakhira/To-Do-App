let main = document.querySelector("#main");
let taskName = document.querySelector("input");
let addTask = document.querySelector("form");

let taskList = document.createElement("ul");
main.appendChild(taskList);

addTask.addEventListener("submit", (task) => {
    task.preventDefault();
    if (taskName.value.trim() !== "") {
        let li = document.createElement("li");
        li.classList.add("addedtask");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });
        li.appendChild(checkbox);

        let taskText = document.createElement("span");
        taskText.textContent = taskName.value;
        li.appendChild(taskText);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskName.value = "";
    }
});