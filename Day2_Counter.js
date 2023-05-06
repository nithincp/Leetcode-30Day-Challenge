//Leetcode Problem - 2620

var createCounter = function(n){
    return function(){
        return n++
    }
}

const counter = createCounter(10)
counter()