// Input: nums = [1,2,3,1]
// Output: true

var containsDuplicate = function(nums) {
    let obj = {};
    
    for (let x of nums) {
        if (obj[x]) {
            return true
        } else {
            obj[x] = 1
        }
    }
    return false
};
