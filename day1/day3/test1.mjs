import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Simple Calculator (Node.js .mjs)");
console.log("Format: number operator number (e.g. 5 + 3)");

rl.question("Enter expression: ", (input) => {
  try {
    const result = eval(input);
    console.log("Result:", result);
  } catch (err) {
    console.log("Invalid expression");
  }
  rl.close();
});