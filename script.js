// // Step 1: Select important elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Step 2: Add Event Listener to the Add Button
addBtn.addEventListener("click", addTask);

// Step 3: Define the function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Do nothing if input is empty
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Step 4: Create <li> element for new task
  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-actions">
      <button class="delete">Delete</button>
    </div>`;

  // Step 5: Add kar list me
  taskList.appendChild(li);

  // Step 6: Clear input field
  taskInput.value = "";

  // Step 7: Add Delete functionality to this new delete button
  const deleteBtn = li.querySelector(".delete");
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
}

// All-Clear button
const clearAll = document.querySelector('#allClear');
clearAll.addEventListener("click", function(){
  document.getElementById("taskList").innerHTML="";
  localStorage.removeItem("tasks")
})

// Enter daba ke add task

const enterTask = document.getElementById('taskInput');
enterTask.addEventListener("keydown", function(e){
  if(e.key==="Enter"){
    addTask();
  }
})
