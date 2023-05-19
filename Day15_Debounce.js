//Leetcode Problem - 2627

var debounce = function (fn, t) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), executionTime);
  };
};

// let start = Date.now();
// function log(...inputs) {
//   console.log([Date.now() - start, inputs]);
// }
// const dlog = debounce(log, 50);
// setTimeout(() => dlog(1), 50);
// setTimeout(() => dlog(2), 75);
