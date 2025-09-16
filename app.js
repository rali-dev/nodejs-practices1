// const {addition, subtraction} = require('./calculator');
// const calculator = require('./calculator');
// const path = require('path');
// const os = require('os');
 const fs = require('fs');


// let parsedPath = path.parse(__filename);

// console.log(calculator.subtraction(8,5));
// console.log(parsedPath);
// console.log('Free memory:', os.freemem());
// console.log('Total memory:', os.totalmem());
// const files = fs.readdirSync('./');
fs.readdir('./', (err, files) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Files:', files);
  }
});
