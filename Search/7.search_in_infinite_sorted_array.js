function search(array , target){

    let low = 0;
    let high = 1

    while(array[high] < target ){
        low = high
        high = high * 2
        // console.log( low , high );
    }

    // return [low, high];
    let data =  binarySearch( array , low , high , target)
    return data
}

function binarySearch( array , low , high , target){
    
    while (low <= high){
        
        let mid = low + Math.floor( (high - low)/2 )

        if( array[mid] == target){
            return mid
        }else if(array[mid] < target){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return -1
}

let array = [1,3, 5, 7,  9,  11,  13,  15 ,  17,  , 19,  21,  23,  25 ,  27,  29,  31,  33]

let target = 19

console.log( search(array , target) );