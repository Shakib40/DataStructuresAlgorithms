// var threeSumClosest = function(nums, target) {
    
//     for (let index = 1; index < nums.length-1; index++) {
//         const element = array[index];
        
//     }
// };

function TripletSum(array , target){

    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length ; i++) {
        let left = i+1 ; right = array.length - 1
        let sum = 0;
        while (left < right){
            sum = array[i] + array[left] + array[right]
            if(sum == target){
                return array[i] +" " + array[left] + " " + array[right]
            }
            if(sum < target){
                left++;
            }else{
                right--;
            }
        }
    }
    return -1;
}

var nums = [-1,2,1,-4], target = 1

console.log( TripletSum(nums, target) );