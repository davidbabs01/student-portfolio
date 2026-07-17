const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {

    taskList.innerHTML = "";

    taskCount.textContent = tasks.length;

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.className = "task";

        if (task.completed) {

            li.classList.add("completed");

        }

        li.innerHTML = `

            <span>${task.text}</span>

            <div class="actions">

                <button class="complete-btn">✓</button>

                <button class="delete-btn">Delete</button>

            </div>

        `;

        li.querySelector(".complete-btn").addEventListener("click", () => {

            tasks[index].completed = !tasks[index].completed;

            saveTasks();

            renderTasks();

        });

        li.querySelector(".delete-btn").addEventListener("click", () => {

            tasks.splice(index,1);

            saveTasks();

            renderTasks();

        });

        taskList.appendChild(li);

    });

}

addTaskBtn.addEventListener("click", () => {

    const task = taskInput.value.trim();

    if(task===""){

        alert("Please enter a task.");

        return;

    }

    tasks.push({

        text:task,

        completed:false

    });

    saveTasks();

    renderTasks();

    taskInput.value="";

});

renderTasks();
