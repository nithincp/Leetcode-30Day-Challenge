var once = function(fn){
    let count = 1

    return function(...args){
        if (count === 1){
            count++
            return fn(...args)
        }
        else{
            return undefined
        }
    }

}

// var func = once((a,b,c) => a+b+c)
// func(1,2,3)