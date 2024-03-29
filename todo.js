const text = document.querySelector(".box");
const addBtn = document.getElementById("btn");
const addedItems = document.querySelector(".addeditems");
const newBox = document.querySelector(".newbox");
const taskTracker = document.querySelector(".task-tracker");



let totalTasks =  0;
let completedTasks =  0;


let infoLi = document.createElement('li')
taskTracker.appendChild(infoLi)

taskTracker.style.display = 'inherit'

function addText() {
  

  if (text.value === "") {
    alert("the box should not be empty");
  } else {
    let newLi = document.createElement("li");
    newLi.innerHTML = text.value;

    let newDiv = document.createElement("span");
    newDiv.innerHTML = `\u00d7`;

    newLi.appendChild(newDiv);

    addedItems.appendChild(newLi);
    totalTasks++;
    updateTaskCount();
    taskTracker.style.display = 'inherit'
    
  }
  
  text.value = "";
  save()
}

function handleInnerContent(e) {
  
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    e.target.classList.contains('checked') ? completedTasks++ : completedTasks--;
    updateTaskCount();
    save()
    //e.target.classList.remove('unchecked')
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    completedTasks--;
    totalTasks--;
    updateTaskCount();
    save()
  }
  
}


function updateTaskCount() {
  completedTasks = Math.max(0, completedTasks) 
  totalTasks = Math.max(0, totalTasks) 
  infoLi.innerHTML = `Total Tasks: ${totalTasks} , Completed Tasks: ${completedTasks}`;
  
}


addBtn.addEventListener("click", () => {
  addText();
  
});

addedItems.addEventListener("click", handleInnerContent, false);


function save() {
  localStorage.setItem('data', addedItems.innerHTML)
  localStorage.setItem('data2', infoLi.innerHTML)
}

function load () {
  addedItems.innerHTML = localStorage.getItem('data')
  infoLi.innerHTML = localStorage.getItem('data2')
}

load ()