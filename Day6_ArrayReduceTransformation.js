// Leetcode Problem - 2626

var arrayReduce = function(nums,fn,init){
    if (nums.length === 0){
        return init
    }

    let val = init
    for(let i=0;i<nums.length;i++){
        val = fn(val,nums[i])
    }

    return val

    /*
    let val = 0

    return nums.reduce((val,num) => fn(val,num), init)
    
    */
}