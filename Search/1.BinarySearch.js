// function BinarySearch(array , target){
   
//     let low = 0;
//     let high = array.length-1

//     while(low <= high){
        
//         let mid = low + Math.floor((high - low) / 2)

//         if( array[mid] == target){
//             return mid
//         }
//         if( array[mid] < target){
//             low = mid + 1
//         }else{
//             high = mid - 1
//         }
//     }
//     return -1
// }

// let array = [ 1, 3, 5, 7,  9 , 11 , 13, 15, 17];
// let target = 11
// console.log( BinarySearch(array , target) );




// function binarySearch( array , low , high , target ){
//     while(low <= high){

//         let mid = low + Math.floor( (high - low)/2)

//         if( array[mid] == target){
//             return mid
//         }
//         if( array[mid] < target ){
//             low = mid + 1
//         }else{
//             high = mid - 1
//         }
//     }
//    return -1;
// }

// let array = [ 1, 3, 5, 7,  9 , 11 , 13, 15, 17];
// console.log( binarySearch( array , 0  , array.length-1 , 11 ) );


function binarySearch( array , low , high , target ){
   if(low <= high ){

       let mid = low + Math.floor( (high - low)/2 )
       
       if(array[mid] == target){
          return mid
       }
       if(array[mid] < target){   
        return binarySearch( array , mid + 1 , high , target )
       }else{
        return binarySearch( array , low , mid-1 , target )
       } 
   } else{
       return -1
   }
   
}

let array = [ 1, 3, 5, 7,  9 , 11 , 13, 15, 17];
console.log( binarySearch( array , 0  , array.length-1 , 11 ) );