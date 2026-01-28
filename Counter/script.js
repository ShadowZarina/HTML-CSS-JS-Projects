// Select elements
const countersContainer = document.querySelector(".counters");
const addCounterBtn = document.getElementById("add-counter-btn");

// Function to create a new counter
function createCounter() {
    let count = 0;

    // Counter box
    const counterBox = document.createElement("div");
    counterBox.classList.add("counter-box");

    // Counter display
    const counterDisplay = document.createElement("div");
    counterDisplay.classList.add("counter");
    counterDisplay.textContent = count;

    // Increment button
    const incrementBtn = document.createElement("button");
    incrementBtn.textContent = "Click me!";

    // Button functionality
    incrementBtn.addEventListener("click", () => {
        count++;
        counterDisplay.textContent = count;
    });

    // Assemble counter box
    counterBox.appendChild(counterDisplay);
    counterBox.appendChild(incrementBtn);

    // Add to page
    countersContainer.appendChild(counterBox);
}

// Add counter button
addCounterBtn.addEventListener("click", createCounter);
