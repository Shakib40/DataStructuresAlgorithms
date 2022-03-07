const findDuplicates = nums => {
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i])-1] < 0)
            ans.push(Math.abs(nums[i]));
        nums[Math.abs(nums[i])-1] = -1*nums[Math.abs(nums[i])-1];
    }
    return ans;
};