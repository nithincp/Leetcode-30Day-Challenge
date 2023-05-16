//Leetcode Problem - 2637

var timeLimit = async function(fn,t){

  return async function(...args){
    return new Promise((resolve,reject) => {
      const id = setTimeout(() => reject('Time Limit Exceeded'), t)

      fn(...args)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => reject(error))
        .finally(() => clearTimeout(id))
    })
  }
}




// fn = async (n) => {
//   await new Promise((res) => setTimeout(res, 100));
//   return n * n;
// };
