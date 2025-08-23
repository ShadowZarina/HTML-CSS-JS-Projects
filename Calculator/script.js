const number = document.getElementsByClassName("number");
const operation = document.getElementsByClassName("operation");
const buttons = document.querySelectorAll("button[data-operator]");
const display = document.getElementById("display");

display.textContent = "";
display.style.color = "white";

https://www.w3schools.com/js/js_htmldom_document.asp

display.removeChild(text)
display.appendChild(text)

document.getElementById(id).onclick = function(){code}


/* TO-DO
- display error message when dividing by 0
- disable typing 0 on its own unless a decimal point is used
- When a result is displayed, pressing a new digit should clear the result 
and start a new calculation instead of appending the digit to the existing result.
- disable consecutive button presses
- make sure operation runs ONLY AFTER PRESSING EQUAL 
*/

/*
element.innerHTML =  new html 
element.attribute = new value	
element.style.property = new style

let currentNumber;

number.addEventListener('click', () => {
  // Get the value from the 'value' attribute
  currentNumber += digit;
  const buttonValueString = myButton.value;
  // Convert the string to an integer
  const buttonNumber = parseInt(buttonValueString);

  console.log("Button 1 value as number:", buttonNumber);
});

// Add an event listener to the second button
anotherButton.addEventListener('click', () => {
  // Get the value from the 'data-number' attribute
  const dataNumberString = anotherButton.dataset.number;
  // Convert the string to an integer
  const dataNumber = parseInt(dataNumberString);

  console.log("Button 2 data-number as number:", dataNumber);
});

*/


// OPERATORS

let operator = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    operator = button.getAttribute("data-operator");
    console.log("Selected operator:", operator);

    // Now you can call your operate function
    operate(operator, a, b);

  });
});

function operate(operator, a,b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Error: Invalid operator";
  }
}

/*

2. JavaScript concepts you’ll use

getAttribute("data-number") or innerText → grab the actual digit that was clicked.

String concatenation (currentValue += digit) → so that pressing 1 then 2 gives "12".

parseInt() or parseFloat() → to convert the string into a real number when you’re ready to calculate.

3. Variables you’ll need
currentNumber → what the user is typing right now.

firstOperand and secondOperand → store values for calculation.

operator → what you already set up with operator buttons.

4. Extra touches
Update the screen → use something like element.textContent = currentNumber to display what’s being typed.

Clear button → reset variables back to empty strings/numbers.
*/

clearButton.addEventListener('click', () => {
  display.textContent = '';
});

backButton.addEventListener('click', () => {
  currentNumber = currentNumber.slice(1);
  display.textContent = currentNumber;
});
