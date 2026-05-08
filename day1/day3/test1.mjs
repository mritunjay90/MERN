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