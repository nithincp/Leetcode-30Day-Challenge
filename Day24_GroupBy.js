//Leetcode Problem - 2631

array = [{ id: "1" }, { id: "1" }, { id: "2" }];
fn = function (item) {
  return item.id;
};

Array.prototype.groupBy = function (fn) {
  const outputObject = {};
  const length = this.length;
  for (let i = 0; i < length; i++) {
    const key = fn(this[i]);
    if (key in outputObject) {
      outputObject[key].push(this[i]);
    } else {
      outputObject[key] = [this[i]];
    }
  }

  return outputObject;
};

console.log(array.groupBy(fn));
// output = {
//   1: [{ id: "1" }, { id: "1" }],
//   2: [{ id: "2" }],
// };
