// Leetcode Problem - 2649

var inorderTraversal = function* (arr) {
  if (!Array.isArray(arr)) {
    yield arr;
    return;
  }
  for (const element of arr) {
    yield* inorderTraversal(element);
  }
};

const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
