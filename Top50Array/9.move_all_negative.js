function segregateElements(arr,n){
    let left  = 0;
    let right = arr.length -1

    while(left < right){
      
        while( left < right && arr[left]  > 0){
           left++;
        }

        while( left < right && arr[right] < 0){
            right--;
        }

        if( left < right ){
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++;
            right--;
        }
    }
    return arr
}

console.log( segregateElements([1, -1, 3, 2, -7, -5, 11, 6]) );