let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', function(e) {
    let inputThis = e.target.value.toUpperCase();

    let ul = document.getElementById('names');

    let li = ul.querySelectorAll('li.collection-item');

    console.log(li)

    console.log(li)
    for (let i = 0; i < li.length; i++) {
        // let a = li[i].getElementsByTagName('a')[0];

        // You can take textContent
        let a = li[i].textContent;

        console.log(a);

        // if matched
        if (a.toUpperCase().indexOf(inputThis) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
        
    }
})