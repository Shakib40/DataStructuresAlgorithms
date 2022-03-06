var missingNumber = function(nums) {
    let sum = 0, total = 0
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        total += i + 1
    }
    
    return sum
};

console.log( missingNumber([1,2,3,5]));