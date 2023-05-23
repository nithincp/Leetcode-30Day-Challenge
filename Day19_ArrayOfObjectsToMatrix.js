//Leetcode problem - 2675

arr = [[[[1]]], [[[2]]], [[[3]]]];

var jsonToMatrix = function (arr) {
  const outputArray = [];
  const keySet = new Set();

  for (const element of arr) {
    helperKeys(element, "");
  }

  function helperKeys(obj, path) {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      if (obj[key] != null && typeof obj[key] === "object") {
        helperKeys(obj[key], newPath);
      } else {
        keySet.add(newPath);
      }
    }
  }

  const keys = Array.from(keySet).sort();
  outputArray.push(keys);
  console.log(keys);

  for (const element of arr) {
    const keyVal = {};
    helperValues(element, "", keyVal);
    let row = [];
    for (const key of keys) {
      if (key in keyVal) {
        row.push(keyVal[key]);
      } else {
        row.push("");
      }
    }
    outputArray.push(row);
  }

  function helperValues(obj, path, keyVal) {
    for (const key in obj) {
      const newpath = path ? `${path}.${key}` : key;
      if (obj[key] !== null && typeof obj[key] === "object") {
        helperValues(obj[key], newpath, keyVal);
      } else {
        keyVal[newpath] = obj[key];
      }
    }
  }

//   arr = [[ 0:[ 0:[ 0:1]]], [[[2]]], [[[3]]]];

  return outputArray;
};

const output = jsonToMatrix(arr);
console.log(output);

// arr = [
//     {"b": 1, "a": 2},
//     {"b": 3, "a": 4}
//   ]
//   Output:
//   [
//     ["a", "b"],
//     [2, 1],
//     [4, 3]
//   ]
