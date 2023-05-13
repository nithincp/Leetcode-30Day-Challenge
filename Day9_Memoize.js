//Leetcode Problem 2623

var memoize = function(fn){
    const map = new Map()

    return function(...args){
        const argumentCount = args.length

        if (argumentCount === 1){
            const argument = args[0]
            if (map.has(argument)){
                return map.get(argument)
            }
            else{
                const result = fn(...args)
                map.set(argument,result)
                return result
            }
        }
        else{
            const argument = `${args[0]},${args[1]}`
            if (map.has(argument)){
                return map.get(argument)
            }
            else{
                const result = fn(...args)
                map.set(argument,result)
                return result
            }
        }
    }
}


// let callCount = 0
// var memoizedFn = memoize((a,b) => {
//     callCount += 1
//     return a+b
// })

// memoizedFn(2,3)
// memoizedFn(2,3)
// console.log(callCount);