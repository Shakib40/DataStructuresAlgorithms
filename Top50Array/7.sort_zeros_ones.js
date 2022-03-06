// [1,1,1,0,1,0,0,1] 
function sortZerosOnes(array ) {
    let low = 0;
    let high = array.length -1

    while ( low < high ) {
         
        while ( low < high && array[low] == 0 ){
          low++;
        }

        while ( low < high && array[high] == 1 ){
          high--;
        }

        if( low < high ){
            let temp = array[low]
            array[low] = array[high]
            array[high] = temp
            low++;
            high--;
        }

    }
    return array
}

console.log( sortZerosOnes([1,1,1,0,1,0,0,1] ) );

console.log( sortZerosOnes([0,0,1,0,1,0,0,1] ) );

console.log( sortZerosOnes([1,1,0,0,1,0,0,0] ) );