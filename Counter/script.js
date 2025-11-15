const button = document.querySelector("button");
const display = document.getElementById("counter");

let count = 0;

function changeCount() {
    count++;
    display.innerHTML = count;
}

button.addEventListener('click', function() {
    changeCount();
});
