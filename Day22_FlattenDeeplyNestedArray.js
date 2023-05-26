// Leetcode Problem - 2625

const arr = [
  1,
  3,
  [11, 14],
  [22, 24, 26, 27],
  [
    [34, 32, 31, 38],
    [45, 43, 47, 49],
    [57, 56, 54, 51, 52],
  ],
];

const n = 2;
var flat = function (arr, n) {
  let outputArray = [];

  for (const element of arr) {
    if (!Array.isArray(element)) {
      outputArray.push(element);
    } else {
      if (n - 1 >= 0) {
        const output = flat(element, n - 1);
        for (item of output){
            outputArray.push(item)
        }
      } else {
        outputArray.push(element);
      }
    }
  }

  return outputArray;
};

console.log(flattenArray(arr, n));
