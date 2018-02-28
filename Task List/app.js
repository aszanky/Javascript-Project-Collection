// define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listener


// load all event listener
function loadEventListeners() {

}

// Add Task
form.addEventListener('submit', addTask);

function addTask(e) {

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create Text Node and append to li
    li.appendChild(document.createTextNode(taskInput.value));


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

    // Clear input
    taskInput.value = '';

    console.log(li)

    e.preventDefault();
}