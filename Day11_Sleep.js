//Leetcode Problem - 2621

async function sleep(millis){
    return new Promise((resolve,reject) => setTimeout(resolve,millis))
}

// let t = Date.now()
// sleep(1000).then(() => console.log(Date.now() - t))

// async function sleep(millis) {
//     await new Promise(resolve => setTimeout(resolve, millis));
//   }
  
//   const promise = sleep(1000);
//   promise.then(() => {
//     console.log('Promise resolved!');
//   });
  
//   console.log('After calling sleep function');