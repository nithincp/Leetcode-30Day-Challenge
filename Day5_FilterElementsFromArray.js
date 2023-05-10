var filterElements = function(arr, fn){
    const outputArray = []

    for (let i =0;i<arr.length;i++){
        if(fn(arr[i],i)){
            outputArray.push(arr[i])
        }
    }

    return outputArray

    /*
        return arr.filter(fn)
    */ 
}