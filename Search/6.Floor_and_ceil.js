function floorAndCeil(array , target){
   
    let low = 0;
    let high = array.length -1
    let floor = -1;
    let ceil = -1;

    while(low <= high) {
        
        let mid = low + Math.floor( (high - low)/2 )

        if( array[mid] == target){
           floor = mid
           ceil = mid
           return [floor, ceil]
        }else if( array[mid] < target){
            floor = mid
            low = mid + 1
        }else{
            high = mid - 1
            ceil = mid
        }
    }

    return [floor , ceil]
}

let array = [1,2,8,10,10,12,19,31]
let target = 13
console.log( floorAndCeil(array , target) );
