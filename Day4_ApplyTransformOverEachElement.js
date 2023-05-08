var map = function(arr,fn){
    const outputArray = []

    for (let i =0;i<arr.length;i++){
        outputArray.push(fn(arr[i], i))
    }

    return outputArray
}