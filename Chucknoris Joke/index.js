// document.getElementById('btnApi').addEventListener('click', loadData);

// function loadData(e) {
//     const numThis = document.getElementById('number').value;
//     console.log(numThis);
//     fetch(`http://api.icndb.com/jokes/random/${numThis}`)
//     .then(res => res.json())
//     .then(data => {
//         let output = '<h1>This is Chuck Noris JOKES</h1>';
//         if (data.type === 'success') {
//             data.value.forEach(element => {
//                 output += `
//                     <li>${element.joke}</li>
//                 `
//             });
//         }
//         document.getElementById('cuk').innerHTML = output;
//     })

//     // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
//     // for example : Clicking on a "Submit" button, prevent it from submitting a form

//     e.preventDefault();
// }

const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
]

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach(o => {
            output += `
                <li>${o.title}</li>
            `
        })
        document.getElementById('checkCallback').innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is Post Three'});

getPost();