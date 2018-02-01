let inputNum = document.getElementById('lbsInput');
let gr = document.getElementById('grOutput');
let kg = document.getElementById('kgOutput');
let oz = document.getElementById('ozOutput');
let output = document.getElementById('output');

output.style.visibility = 'hidden';

// reset value when refresh
inputNum.value = '';

inputNum.addEventListener('input', function(e) {
    // Visibility become visible
    output.style.visibility = 'visible';

    // get value from input
    let lbs = e.target.value;

    // change innerHTML
    gr.innerHTML = lbs/0.00220462;
    kg.innerHTML = lbs/2.2046226218;
    oz.innerHTML = lbs*16;
})