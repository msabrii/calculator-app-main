let operand1 = "";
let operand2 = "";
let operation = null;

function registerInput(input) {
  let outputDisplay = document.getElementById("output-display-text");
  if (operation == null) {
    operand1 += input;
    outputDisplay.textContent += input;
  } else {
    operand2 += input;
    outputDisplay.textContent += input;
  }
  console.log(input, operand1, operand2);
}

function setOperation(op) {
  console.log("setting operation to", op);
  let outputDisplay = document.getElementById("output-display-text");
  operation = op;
  outputDisplay.textContent += " " + op + " ";
}

function reset() {
  let outputDisplay = document.getElementById("output-display-text");
  outputDisplay.textContent = "";
  operation = null;
  operand1 = "";
  operand2 = "";
}

function deleteInput() {
  let outputDisplay = document.getElementById("output-display-text");
  outputDisplay.textContent = outputDisplay.textContent.slice(
    0,
    outputDisplay.textContent.length - 1
  );
  if (operation == null) {
    operand1 = operand1.slice(0, operand1.length - 1);
  } else {
    operand2 = operand2.slice(0, operand2.length - 1);
  }
}

function calculate() {
  let outputDisplay = document.getElementById("output-display-text");
  let final = null;
  console.log(operation);
  switch (operation) {
    case "+":
      final = Number(operand1) + Number(operand2);
      break;
    case "-":
      final = Number(operand1) - Number(operand2);
      break;
    case "x":
      final = Number(operand1) * Number(operand2);
      break;
    case "/":
      final = Number(operand1) / Number(operand2);
  }
  outputDisplay.textContent = final;
  operand1 = final;
  operand2 = "";
  console.log(final);
}
