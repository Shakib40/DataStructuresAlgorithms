// INPUT : [-7,1,5,2,-4,3,0]
// OUTPUT : 3

// function EquilibriumIndex(array){
//     let left = 0;
//     let right = array.length - 1;
//     let mid = 1
//     let sum_left = 0;
//     let sum_right = 0;

//     while (  mid < array.length -1 ){
       
//         for ( i = 0; i < mid; i++ ){
//          sum_left += array[i]
//         }

//         for ( j = mid+1; j < array.length; j++ ){
//           sum_right += array[j]
//         }

//         if( sum_left == sum_right ){
//             return mid
//         }else{
//             mid = mid + 1
//         }
//     }
//     return -1
// }


function EquilibriumIndex(array){
   let sum = 0;
   let leftsum = 0;

   for(let i = 0; i < array.length; i++){
       sum += array[i]
   }

   for(let i = 0; i < array.length; i++){
       sum -= array[i]

       if(leftsum == sum){
         return i
       }
       leftsum += array[i]
   }
   return -1
}

console.log( EquilibriumIndex( [-7,1,5,2,-4,3,0]  ));

console.log( EquilibriumIndex( [3,3,5,5,1]  ));