//Leetcode Problem 2636

var promisePool = async function (functions, n) {
  return new Promise((resolve, reject) => {
    let inProgress = 0;
    let i = 0;

    if (i === functions.length){
        resolve()
    }

    function callback() {
      while (i < functions.length && inProgress < n) {
        inProgress++;
        functions[i++]().then(() => {
          inProgress--;
          if (i === functions.length) {
            if (inProgress <= 0) {
              resolve();
            }
          }
          callback()
        });
        callback()
      }
    }
    callback()
  });
};
