//Leetcode Problem - 2628

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
  if (o1 === o2) {
    return true;
  }
  if (o1 === null || o2 === null) return false;
  if (String(o1) !== String(o2)) return false;

  if (typeof o1 !== "object") {
    return o1 === o2;
  }

  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);

  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) return false;

    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) return false;
    }

    return true;
  }

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (!areDeeplyEqual(o1[key], o2[key])) return false;
  }

  return true;
};
