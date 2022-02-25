// INPUT : [12,3,4,1,6,9] , sum = 24
// OUTPUT : 12,3,9

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


console.log(TripletSum([12,3,4,1,6,9] ,24));