// Leetcode Problemm - 2632

var curry = function(fn){
    
    return function curried (...args){

        if (fn.length === args.length){
            return fn(...args)
        }
        else{
            return (...newArgs) => {
                return curried(...args,...newArgs)
            }
        }
    }
}