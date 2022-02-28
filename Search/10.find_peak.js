function findPeak(array , N){
   let low = 0;
   let high = N
   while (low <= high){
       let mid = low + Math.floor( (high - low)/2 )

       if(mid> 0 && mid < N){

          if(array[mid] > array[mid+1] && array[mid] > array[mid-1]){
              return array[mid]
          }else if(array[mid+1] > array[mid]){
              low = mid + 1
          }else{
              high = mid - 1
          }
       }else if(mid == 0){
           if(array[0] > array[1]){
                return array[0]
           }else{
               return array[1]
           } 
       }else if(mid == N){
            if(array[N] > array[N-1]){
                 return[N]
            }else{
                array[N-1]
            } 
       }
   }
   return -1
}

let array = [10,20,15,2,23,90,67 ]

console.log( findPeak(array , array.length-1) );
