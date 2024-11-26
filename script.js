const display = document.getElementById("display");

function appendToDisplay(input) {
   display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
  display.value = add()
  }
  catch(error) {
    display.value = "Error!"
  }
}

function add(args) {
  let sum = 0;
  for (arg in args) {
    sum += arg;
  }
  return sum;
}