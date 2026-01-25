const addCounterBtn = document.getElementById("addCounterBtn");
const counterContainer = document.getElementById("counterContainer");

addCounterBtn.addEventListener("click", () => {
    // Create counter wrapper
    const counterDiv = document.createElement("div");
    counterDiv.classList.add("counter");

    // Counter value
    let count = 0;

    // Display
    const display = document.createElement("span");
    display.textContent = count;
    display.classList.add("counter-display");

    // Increment button
    const incBtn = document.createElement("button");
    incBtn.textContent = "+";
    incBtn.addEventListener("click", () => {
        count++;
        display.textContent = count;
    });

    // Decrement button
    const decBtn = document.createElement("button");
    decBtn.textContent = "−";
    decBtn.addEventListener("click", () => {
        count--;
        display.textContent = count;
    });

    // Append everything
    counterDiv.appendChild(decBtn);
    counterDiv.appendChild(display);
    counterDiv.appendChild(incBtn);

    counterContainer.appendChild(counterDiv);
});
