//Leetcode Problem - 2621

async function sleep(millis){
    return new Promise((resolve,reject) => setTimeout(resolve,millis))
}

// let t = Date.now()
// sleep(1000).then(() => console.log(Date.now() - t))