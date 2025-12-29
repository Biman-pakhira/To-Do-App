let main = document.querySelector("#main");
let taskName= document.querySelector("input");
let addTask= document.querySelector("form");
addTask.addEventListener("submit",(task)=>{
    task.preventDefault();
    let tasks = document.createElement("div");
    tasks.classList.add("addedtask");
    
    let h1 = document.createElement("h1");
    h1.textContent=taskName.value;

    tasks.appendChild(h1);
    main.appendChild(tasks);
})