//INPUT : [ 12,34,45,9,8,90,3]
// OUTPUT : [12,34,8,90,45,9,3]

// function SeperateEvenOdd(array){
//     let even = [];
//     let odd = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             even.push(array[i])
//         }else{
//             odd.push(array[i])
//         }
//     }
//     let output = even.concat(odd)
//     let str = ''
//     for(x of output) {
//         str += x + ' '
//     }
//     return str
// }
// console.log(SeperateEvenOdd([ 12,34,45,9,8,90,3] ));

// Time : O(N)
// Space : O(1)

// function SeperateEvenOdd(array){ 
//   let left = 0;
//   let right = array.length -1;

//   while (left < right){
 
//     while (left < right && array[left] % 2 == 0){
//        left++;
//     }

//     while (left < right && array[right] % 2 == 1){
//       right--;
//     }

//     if( left < right){
//         let temp = array[left]
//         array[left] = array[right]
//         array[right] = temp
//         left++;
//         right--
//     }
//   }
//   return array

// }
// console.log(SeperateEvenOdd([ 12,34,45,9,8,90,3] ));



// function SeperateEvenOdd(array){
  
// }
// console.log(SeperateEvenOdd([ 12,34,45,9,8,90,3] ));
