//Leetcode Problem - 2677

var chunkArray = function (arr, size) {
  let i;
  const outputArray = [];
  let tempArray;
  if (arr.length === 0){
    return []
  }
  if (arr.length < size) {
    return [arr];
  }

  for (i = 0; i < arr.length; i++) {
    tempArray = arr.slice(i, i + size);
    outputArray.push(tempArray);
    i += size - 1;
  }

  return outputArray;
};
arr = [1, 9, 6, 3, 2];
size = 3;
console.log(chunkArray(arr, size));
