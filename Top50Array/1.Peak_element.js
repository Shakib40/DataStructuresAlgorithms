function PeakElement(array , N){
    let low = 0;
    let high = N -1

    while (low <= high){
        let mid = low + Math.floor( (high - low)/2 )

        if( mid > 0 && mid < N){
           
            if( array[mid] > array[mid+1] && array[mid] > array[mid-1] ){
                return array[mid];
            }else if( array[mid] < array[mid+1]){
                low = mid + 1
            }else{
                high = mid - 1
            }
        }else if( mid == 0 ){
            if( array[0] > array[1] ){
                return array[0];
            }else{
                return array[1]
            }
        }else if( mid == N){
            if( array[N] > array[N-1]){
               return array[N]
            }else{
                return array[N-1]
            } 
        }
    }
    return -1
}

console.log( PeakElement([1, 3, 20, 4, 1, 0] , 6) );


console.log( PeakElement([1, 3, 2] , 3) );

