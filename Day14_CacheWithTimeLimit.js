//Leetcode Problem - 2622

var TimeLimitedCache = function () {
  const map = new Map();
  const initialTime = Date.now();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const curTime = Date.now();
  if (this.map.has(key)) {
    const [oldValue, durationFetched] = this.map.get(key);
    let newDuration
    if (durationFetched <= duration){
        newDuration = duration + durationFetched;
    }else if(durationFetched > duration){
        newDuration = (curTime - this.initialTime) + duration
    }
    this.map.set(key, [value, newDuration]);
    if (curTime - this.initialTime < newDuration) {
      return true;
    } else {
      return false;
    }
  } else {
    this.map.set(key, [value, duration]);
    return false;
  }
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const curTime = Date.now();
  if (this.map.has(key)) {
    const [value, duration] = this.map.get(key);
    if (curTime - this.initialTime < duration) {
      return this.map.get(key)[0];
    } else {
      return -1;
    }
  } else {
    return -1;
  }
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  const curTime = Date.now();
  let count = 0;
  this.map.forEach((value,key) => {
    if (curTime - this.initialTime < value[1]) {
      count++;
    }
  });
  return count;
};
