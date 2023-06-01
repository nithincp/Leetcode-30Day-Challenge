//Leetcode problem - Array Wrapper

var ArrayWrapper = function (nums) {
  this.arr = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  let result = 0;
  this.arr.forEach((element) => {
    result = result + element;
  });
  return result;
};

ArrayWrapper.prototype.toString = function () {
  let outputString = "[";
  this.arr.forEach((element) => {
    outputString += element + ",";
  });
  outputString += "]";
  return outputString.replace(",]","]")
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
