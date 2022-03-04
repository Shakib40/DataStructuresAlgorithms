// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

// const findDuplicates = nums => {
//     const ans = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[Math.abs(nums[i])-1] < 0)
//             ans.push(Math.abs(nums[i]));
//         nums[Math.abs(nums[i])-1] = -1*nums[Math.abs(nums[i])-1];
//     }
//     return ans;
// };

// const findDuplicates = (nums) =>{
//    let str = "";
//    for (let i = 0; i < nums.length; i++){
//       let count = 0
//       for (let j = 0; j < nums.length; j++){
//           if(nums[i] == nums[j] && nums[i] != nums[i+1]){
//               count = count + 1
//           }
//       }
//       console.log(count)
//    }

// }

// console.log( findDuplicates([1,3,4,2,2,3,1]) );

console.log( findDuplicates([1,1,1,3,3,3,2,2,4,5]) );