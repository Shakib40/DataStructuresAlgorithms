function pivotPosition( array , N){
    
    let low = 0;
    let high = array.length -1

    if( array[low] <= array[high] ){
        return 0
    }
    while(low <= high){
        
        let mid = low + Math.floor( (high - low)/2 )
        if( array[mid] > array[mid+1] ){
          return mid + 1
        }else if( array[mid] < array[mid-1] ){
              return mid
        }else if( array[low] <= array[mid]){
            low = mid + 1
        }else if( array[mid] <= array[high]){
            high = mid - 1
        }
    }
    return -1
}

function BinarySearch( array , low , high , target){
   
    while(low <= high){
        let mid = low + Math.floor( (high - low)/2 )

        if( array[mid] == target){
            return mid
        }else if( array[mid] < target){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return -1
}

function findElement(array , N , target ){
   let index = pivotPosition( array , array.length-1)
   
   let x = BinarySearch( array , 0 , index  , target)
   let y = BinarySearch( array , index , N , target)

   if(x == -1 && y == -1){
       return -1
   }
   if(x >=0){
       return x
   }else{
       return y
   }
}


let array = [13,14,18,20,22,26,30,35,40,50,2,5,6,8,11,12];

console.log( findElement(array , array.length-1 , 13 ) );

