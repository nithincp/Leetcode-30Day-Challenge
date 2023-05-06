const higherOrderFunc = function(){
    let value = 0

    const incrementFunction = () => {
        return ++value
    }

    return {
        increment : incrementFunction
    }
}


const returnValue1 = higherOrderFunc()
const returnValue2 = higherOrderFunc()

console.log(returnValue1.increment());
console.log(returnValue2.increment());

console.log(returnValue1.increment());