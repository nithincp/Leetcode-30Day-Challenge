//Leetcode problem - 2633

const Person = {
  name: "nithin",
  age: 27,
  passion: "Make the world a better place",
  smoker: false,
  favoriteNumbers: [11, 7],
  courses: {
    neetcode: "going well",
    ineuron: ["oct", "nov", "dec"],
    learnweb3: [
      {
        junior: "inprogress",
      },
      {
        senior: "yet to start",
      },
    ],
  },
};

var jsonStringify = function (object) {
  if (typeof object === "string") {
    return `"${object}"`;
  } else if (
    typeof object === "number" ||
    typeof object === "boolean" ||
    object === null ||
    object === undefined
  ) {
    return `${object}`;
  }

  //Array
  if (Array.isArray(object)) {
    const values = object.map((obj) => jsonStringify(obj));
    return `[${values.join(",")}]`;
  }
  //Object
  if (typeof object === "object") {
    const keys = Object.keys(object);
    const values = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
    return `{${values.join(",")}}`;
  }
};

console.log(jsonStringify(Person));
