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

// add feature
if (process.argv.includes('--version')) {
  console.log("Simple Calculator version 1.0");
  process.exit(0);
}   
if (process.argv.includes('--help')) {
  console.log("Usage: node test.mjs [options]");
  console.log("Options:");
  console.log("  --version   Show version number");
  console.log("  --help      Show this help message");
  process.exit(0);
}
// more features can be added here in the future, such as support for more complex expressions, history of calculations, etc.
if (process.argv.includes('--history')) {
  console.log("History feature is not implemented yet.");
  process.exit(0);
}   
let history = [];
rl.question("Enter expression: ", (input) => {
  try {
    const result = eval(input);
    console.log("Result:", result);
    history.push({ expression: input, result });
  } catch (err) {
    console.log("Invalid expression");
  }
  rl.close();
});
