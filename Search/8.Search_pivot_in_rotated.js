// function pivotPosition( array , N){
    
//     let low = 0;
//     let high = array.length -1

//     if( array[low] <= array[high] ){
//         return 0
//     }
//     while(low <= high){
        
//         let mid = low + Math.floor( (high - low)/2 )
//         if( array[mid] > array[mid+1] ){
//           return mid + 1
//         }else if( array[mid] < array[mid-1] ){
//               return mid
//         }else if( array[low] <= array[mid]){
//             low = mid + 1
//         }else if( array[mid] <= array[high]){
//             high = mid - 1
//         }
//     }
//     return -1
// }


function pivotPosition( array , N){
    
    let low = 0;
    let high = array.length -1

    if( array[low] <= array[high] ){
        return 0
    }
    while(low <= high){
        
        let mid = low + Math.floor( (high - low)/2 )
        if( array[mid] > array[mid+1] ){
          return N- mid + 1
        }else if( array[mid] < array[mid-1] ){
              return N- mid
        }else if( array[low] <= array[mid]){
            low = mid + 1
        }else if( array[mid] <= array[high]){
            high = mid - 1
        }
    } 
    return -1
}

let array = [13,14,18,20,22,26,30,35,40,50,2,5,6,8,11,12];
console.log( pivotPosition( array , array.length-1) );




// // //50 
// // 40 // 2

// // //2
// // 50 // 5


