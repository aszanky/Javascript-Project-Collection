// define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listener
loadEventListeners();

// load all event listener
function loadEventListeners() {
    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add Task
    form.addEventListener('submit', addTask);
    // Remove Task
    taskList.addEventListener('click', removeList);
    // Clear all Task
    clearBtn.addEventListener('click', removeAll);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

function getTasks() {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
         // Create Text NODE
         let textNode = document.createTextNode(task);
         // Create li element
         const li = document.createElement('li');
         // Add class
         li.className = 'collection-item';
         // Create Text Node and append to li
         li.appendChild(textNode);
 
 
         // Create new link element
         const link = document.createElement('a');
         // Add Class
         // secondary-content in materialize css make element is right from text
         link.className = 'delete-item secondary-content';
 
         // Add Icon html
         link.innerHTML = '<i class="fa fa-remove"></i>';
         //Append link to li
         li.appendChild(link);
 
         // Append li to ul
         taskList.appendChild(li);
    })
}

function addTask(e) {

    if (taskInput.value !== '') {
        // Create Text NODE
        let textNode = document.createTextNode(taskInput.value);
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create Text Node and append to li
        li.appendChild(textNode);


        // Create new link element
        const link = document.createElement('a');
        // Add Class
        // secondary-content in materialize css make element is right from text
        link.className = 'delete-item secondary-content';

        // Add Icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //Append link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);

        // Store in local storage
        storeTaskInLocalStorage(taskInput.value);

        // Clear input
        taskInput.value = '';

        console.log(li)
    } else {
        alert('Fill your Tasks');
    }

    e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {

    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeList(e) {
    // Check if contains delete-item or not
    if(e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();

        // Remove from LS
        removeTaskFromLS(e.target.parentElement.parentElement);
    }
}

// Remove from LS
function removeTaskFromLS(taskItem) {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task, index) => {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeAll() {
    // empty array slower than removeChild
    // taskList.innerHTML = '';

    //Fastest using removeChild;
    while(taskList.hasChildNodes()) {
        taskList.removeChild(taskList.firstChild);
    }

    localStorage.clear();
}

function filterTasks(e) {
    // Get value from input text filter
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach(val => {
        const item = val.firstChild.textContent;
        
        if (item.toLowerCase().indexOf(text) !== -1) {
            val.style.display = 'block';
        } else {
            val.style.display = 'none';
        }
    })
}
