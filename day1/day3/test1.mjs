import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter operator (+, -, *, /): ", (operator) => {
    rl.question("Enter second number: ", (num2) => {
      num1 = Number(num1);
      num2 = Number(num2);

      if (isNaN(num1) || isNaN(num2)) {
        console.log("Error: Please enter valid numbers");
        rl.close();
        return;
      }

      let result;

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          if (num2 === 0) {
            result = "Error: Cannot divide by zero";
          } else {
            result = num1 / num2;
          }
          break;
        default:
          result = "Error: Invalid operator";
      }

      console.log("Result:", result);
      rl.close();
    });
  });
});