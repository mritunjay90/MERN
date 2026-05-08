export function greet(name = 'World') {
  return `Hello, ${name}!`;
}

if (process.argv[1] === import.meta.url) {
  const name = process.argv[2] || 'World';
  console.log(greet(name));
}
