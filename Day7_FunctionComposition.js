var functionComposition = function(functions){
    return function(x){

        if (!functions){
            return x
        }
        let output = x
        for (let i=functions.length-1;i>=0;i--){
            output = functions[i](output)
        }

        return output
    }
}


// const compose = functionComposition(functions)
// compose(10)