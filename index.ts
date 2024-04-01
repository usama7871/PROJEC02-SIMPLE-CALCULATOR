import * as readlineSync from 'readline-sync';

class Calculator {
  history: string[] = [];

  constructor() {}

  add(a: number, b: number) {
    const result = a + b;
    this.history.push(`${a} + ${b} = ${result}`);
    return result;
  }

  subtract(a: number, b: number) {
    const result = a - b;
    this.history.push(`${a} - ${b} = ${result}`);
    return result;
  }

  multiply(a: number, b: number) {
    const result = a * b;
    this.history.push(`${a} * ${b} = ${result}`);
    return result;
  }

  divide(a: number, b: number) {
    if (b === 0) {
      console.log("Error: Cannot divide by zero.");
      return NaN;
    }
    const result = a / b;
    this.history.push(`${a} / ${b} = ${result}`);
    return result;
  }

  displayHistory() {
    console.log("Calculation History:");
    this.history.forEach(entry => console.log(entry));
  }
}

const calculator = new Calculator();

function showMenu() {
  console.log("\n1. Add");
  console.log("2. Subtract");
  console.log("3. Multiply");
  console.log("4. Divide");
  console.log("5. View Calculation History");
  console.log("6. Exit");
}

function getUserInput() {
  return parseInt(readlineSync.question("Enter your choice: "));
}

while (true) {
  showMenu();
  const choice = getUserInput();

  switch (choice) {
    case 1:
      const addA = parseFloat(readlineSync.question("Enter first number: "));
      const addB = parseFloat(readlineSync.question("Enter second number: "));
      console.log(`Result: ${calculator.add(addA, addB)}`);
      break;
    case 2:
      const subA = parseFloat(readlineSync.question("Enter first number: "));
      const subB = parseFloat(readlineSync.question("Enter second number: "));
      console.log(`Result: ${calculator.subtract(subA, subB)}`);
      break;
    case 3:
      const mulA = parseFloat(readlineSync.question("Enter first number: "));
      const mulB = parseFloat(readlineSync.question("Enter second number: "));
      console.log(`Result: ${calculator.multiply(mulA, mulB)}`);
      break;
    case 4:
      const divA = parseFloat(readlineSync.question("Enter first number: "));
      const divB = parseFloat(readlineSync.question("Enter second number: "));
      console.log(`Result: ${calculator.divide(divA, divB)}`);
      break;
    case 5:
      calculator.displayHistory();
      break;
    case 6:
      console.log("Exiting...");
      process.exit(0);
    default:
      console.log("Invalid choice. Please enter a number between 1 and 6.");
  }
}
