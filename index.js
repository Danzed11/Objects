
const chalk = require("chalk");
console.log(chalk.red.underline(
  ("Underline yo" + chalk.blue.bold(" With Blue Bolding"))+ "a red underlined string"));


console.log(chalk.rgb(180, 22, 68)(" Hello you"));

const name = 'Sindre';
console.log(chalk.green('Hello '), name);
// => 'Hello Sindre'