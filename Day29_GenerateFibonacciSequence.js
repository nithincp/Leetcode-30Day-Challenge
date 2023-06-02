// Leetcode Problem - 2648

var fibGenerator = function* () {
  let num1 = 0;
  let num2 = 1;
  yield num1;
  yield num2;

  while(true){
    let result = num1 + num2
    num1 = num2
    num2 = result
    yield result;
  }
  
};

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);