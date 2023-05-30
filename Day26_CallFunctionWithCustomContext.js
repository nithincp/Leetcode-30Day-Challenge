// Leetcode Problem - 2693

Function.prototype.callPolyfill = function (context, ...args) {
    return this.bind(context)(...args)
};

function increment() {
  this.count++;
  return this.count;
}
console.log(increment.callPolyfill({ count: 1 }))
