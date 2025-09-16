//module wrapper function
//(function (exports, require, module, __filename, __dirname) {});

  function addition(a, b){
      return a + b;
    }
    function subtraction(a, b){
      return a - b; 
    }
    function multiplication(a, b){
      return a * b; 
    }
    function division(a, b){
      return a / b;
    }
    module.exports = {
      addition, subtraction, multiplication, division
    };
//module.exports.addition = addition;
//module.exports.subtraction = subtraction;
// module.exports = {
//   addition:addition,
//   subtraction:subtraction
// }

//console.log(module)
console.log('filename:', __filename);
console.log('dirname:', __dirname);