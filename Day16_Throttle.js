// Leetcode Problem - 2676

var throttle = function (fn, t) {
  const arguments = [];
  let id;
  const prevFunCall = [];
  return function (...args) {
    if (prevFunCall.length === 0) {
      prevFunCall.push(Date.now());
      fn(...args);
    } else {
      const prevFunCallTime = prevFunCall[prevFunCall.length - 1];
      const currentTime = Date.now();
      if (currentTime - prevFunCallTime < t) {
        const functionToCallAt = t - (currentTime - prevFunCallTime);
        arguments = [...args];
        clearTimeout(id);
        id = setTimeout(() => {
          prevFunCall.push(Date.now());
          fn(...args);
        }, functionToCallAt);
      } else {
        prevFunCall.push(Date.now());
        fn(...args);
      }
    }
  };
};

var throttled = throttle(console.log, 100);
throttled("log"); // logs immediately
throttled("log"); // logged at t=100ms
