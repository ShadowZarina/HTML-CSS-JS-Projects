const list = document.querySelectorAll("ul");
const listItem = document.querySelectorAll("li");
const input = document.querySelector("input");
const title = document.querySelector("h3");
const addListButton = document.querySelector(".add-list-button");
const addItemButton = document.querySelector(".add-item-button");

button.addEventListener("click", function() {
    const inputValue = inputField.value;

    // Check if the input value is not empty
    if (inputValue.trim() !== '') {
        const newListItem = document.createElement('li');

        newListItem.textContent = inputValue;

        // Append the new list item to the unordered list
        myList.appendChild(newListItem);

        // Clear the input field
        inputField.value = '';
    input.textContent = "";
});


<template id="list-item-template">
      <li class="list-item"></li>
      <button class="delete-item">x</button>
    </template>

const deleteItemButton = document.createElement("button")

button.addEventListener("click", function() {
    const inputValue = inputField.value;

    // Check if the input value is not empty
    if (inputValue.trim() !== '') {
        const newListItem = document.createElement('li');

        newListItem.textContent = inputValue;

        // Append the new list item to the unordered list
        myList.appendChild(newListItem);

        // Clear the input field
        inputField.value = '';
    input.textContent = "";
});

list.appendChild(h3);
list.appendChild(button);

input.textContent = "";
span.textContent = "Delete";

list.appendChild("listItem");

WebGL2RenderingContext()

Create a function that will run in response to the button being clicked.
Inside the function body, start off by storing the current value of the input element in a variable.

Next, empty the input element by setting its value to an empty string — "".

Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
Append the span and the button as children of the list item.
Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
Append the list item as a child of the list.

Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
Finally, use the focus() method to focus the input element ready for entering the next shopping list item.

