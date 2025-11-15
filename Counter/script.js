/* Variable Initialization */

const button = document.querySelector("button");
const display = document.getElementById("counter");
const shape = document.querySelectorAll(".shape");

let count = 0;

/* Function for Counter Update */

function changeCount() {
    count++;
    display.innerHTML = count;
}

button.addEventListener('click', function() {
    changeCount();
});

/* Function for Shape Spawning */

shape.addEventListener('click', function() {
    changeCount();
});

/* Function for Shape Despawning */