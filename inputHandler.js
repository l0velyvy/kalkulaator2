const readline = require('readline');
const calculator = require('./calculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startInput() {
  rl.question('Enter the length of side "a": ', (a) => {
    rl.question('Enter the length of side "b": ', (b) => {
      const hypotenuse = calculator.calculateHypotenuse(parseFloat(a), parseFloat(b));
      console.log(`The length of the hypotenuse is: ${hypotenuse.toFixed(2)}`);
      rl.close();
    });
  });
}

module.exports = { startInput };