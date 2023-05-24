// Leetcode Problem - 2700

obj1 = {
  a: 1,
  v: 3,
  x: [],
  z: {
    a: null,
  },
};
obj2 = {
  a: 2,
  v: 4,
  x: [],
  z: {
    a: 2,
  },
};

var diffObjects = function (obj1, obj2) {
  const outputObject = {};
  if (!isObject(obj1) && !isObject(obj2)) {
    return obj1 === obj2 ? {} : [obj1, obj2];
  }

  if (!isObject(obj1) || !isObject(obj2)) {
    return [obj1, obj2];
  }

  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return [obj1, obj2];
  }

  const keys1 = Object.keys(obj1);
  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] in obj2) {
      const output = diffObjects(obj1[keys1[i]], obj2[keys1[i]]);
      if (Object.keys(output).length > 0) {
        outputObject[keys1[i]] = output;
      }
    }
  }

  return outputObject;

  function isObject(obj) {
    return typeof obj === "object" && obj !== null;
  }
};

console.log(diffObjects(obj1, obj2));

// Input:
// obj1 = {
//     "a": 1,
//     "v": 3,
//     "x": [],
//     "z": {
//       "a": null
//     }
//   }

// obj2 = {
//     "a": 2,
//     "v": 4,
//     "x": [],
//     "z": {
//       "a": 2
//     }
//   }
