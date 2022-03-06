// Input:
// N = 5
// vector = {1, 1, 1, 1, 1}
// X = 1
// Output: 
// 5
// Explanation: Frequency of 1 is 5.

// function findFrequency(v, n, x){
   
//     let count = 0;
//     for (let dd  of v) {
//         if( dd == x){
//             count++;
//         }
//     }
//     return count;
// }


// function findFrequency(v, n, x){
   
//     let map = new Map()

//     for (let d of v) {
//       if( map.has(d) ){
//           map.set( d , map.get(d) + 1)
//       }else{
//           map.set(d, 1)
//       }
//     }
//     return map
// }

console.log( findFrequency([1,1,1,3,3,6,1,2,4,2] ,  10 , 2) );
