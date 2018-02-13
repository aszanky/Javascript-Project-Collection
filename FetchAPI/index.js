let text = document.getElementById('getText');
let users = document.getElementById('getUsers');
let posts = document.getElementById('getPosts');
let addPosts = document.getElementById('addPost');

text.addEventListener('click', getText);
users.addEventListener('click', getUsers);
posts.addEventListener('click', getPosts);
addPosts.addEventListener('submit', addPost);

function getText() {
    // passing url/file
    fetch('sample.txt')
    .then((res) => res.text())
    //get data

    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })

    // catch error
    .catch((err) => {
        console.log(err);
    })
}

function getUsers() {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach(i => {
           output += `
            <ul class='list-group mb-3'>
                <li class='list-group-item'>ID : ${i.id}</li>
                <li class='list-group-item'>Name : ${i.name}</li>
                <li class='list-group-item'>Email : ${i.email}</li>
            </ul>
           `
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch((err) => {
        console.log(err);
    })
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>POSTS</h2>';
        data.forEach(post => {
            output += `
                <div class='card card-body mb-3'>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `
        })
        document.getElementById('output').innerHTML = output;
    })
    .catch((err) => {
        console.log(err);
    })
}

function addPost(e) {
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    // example Clicking on a "Submit" button, prevent it from submitting a form
    e.preventDefault();
    
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        /* When sending data to a web server, the data has to be a string.
            Convert a JavaScript object into a string with JSON.stringify().
        */
            body: JSON.stringify({
            title: title,
            body: body
        })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    
}