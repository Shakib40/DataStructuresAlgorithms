function getPairsCount(array , target){
  
    let count = 0;
    array.sort( (a,b) => a-b)

    let left = 0;
    let right = array.length - 1

    while(left < right){

        if( (array[left] + array[right]) == target){
            count++;
        }
        if( (array[left] + array[right]) <= target ){
            left++;
        }else{
            right--;
        }
    }
    return count
}

// [1,1,5,7]

console.log( getPairsCount([1, 5, 7, 1] , 6) );