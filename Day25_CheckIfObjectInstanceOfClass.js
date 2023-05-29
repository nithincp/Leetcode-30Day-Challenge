//Leetcode Problem - 2618

var checkIfInstanceOf = function (obj, classFunction) {
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== "function"
  ) {
    return false;
  }

  let currentPrototype = Object.getPrototypeOf(obj)
  while (currentPrototype !== null){
    if (currentPrototype === classFunction.prototype){
        return true
    }
    currentPrototype = Object.getPrototypeOf(currentPrototype)
  }

  return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

console.log(checkIfInstanceOf(new Date(), Date));
