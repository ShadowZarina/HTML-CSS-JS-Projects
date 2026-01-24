/* Variable Initialization */

const button = document.querySelector("button");
const addButton = document.getElementsByClassName("add-button");
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

function handleButtonClick() {
    alert("Button clicked!");
    console.log("A new button was clicked!");
}

    const newButton = document.createElement("button");

    // 2. Set the button's text content
    newButton.textContent = "Click Me!";

    // (Optional) Add a class for styling with CSS
    newButton.classList.add("my-dynamic-button");

    // 3. Add an event listener for clicks
    newButton.addEventListener("click", handleButtonClick);

    // 4. Append the button to the desired location in the HTML
    const container = document.getElementById("button-container");
    container.appendChild(newButton);
});
/* Function for Shape Despawning */

