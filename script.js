let main = document.querySelector("#main");
let taskName= document.querySelector("input");
let addTask= document.querySelector("form");
addTask.addEventListener("submit",(task)=>{
    task.preventDefault();
    let tasks = document.createElement("div");
    tasks.classList.add("addedtask");
    
    let unlists = document.createElement("ul"); 
    let liItem = document.createElement("li");
    liItem.textContent=taskName.value;

    liItem.appendChild(unlists);
    tasks.appendChild(liItem);
    main.appendChild(tasks);
})