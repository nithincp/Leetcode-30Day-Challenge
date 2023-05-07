//Leetcode Problem - 2665

var createCounter = function(init){
    const initBackUp = init

    return {
        increment : () => { return ++init},
        decrement : () => { return --init},
        reset : () => { 
            init = initBackUp
            return init
        }
    }
}

const counter = createCounter(5)
counter.increment()
counter.decrement()
counter.reset()