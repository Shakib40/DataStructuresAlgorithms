//INPUT : [7,2,4,6,4,2,6]
// OUTPUT : 7

// let singleNumber = function(nums) {
//     let map=new Map();
//     let val=0;
    
//     for(let x of nums){
//         if(map.has(x)){
//         map.set(x,map.get(x)+1);
//     }
//     else{
//         map.set(x,1);
//     }
// }

//     for(let [k,v] of map){
//         if(map.get(k)===1){
//             val=k;
//             break;
//         }
//     }
//     return val;
// };


// const singleNumber = (array) => {
//     let res = array[0]

//     for( let i = 1; i < array.length; i++ ){
//         res = res ^ array[i]
//     }
//     return res
// }

// console.log(singleNumber([7,2,4,6,4,2,6]));


// const singleCharacter = (str) => {
//     let res = str[0]

//     for (let i = 1; i < str.length; i++) {
//         res = res ^ str[i]
//     } 
//     return res
//  }
 
//  console.log( singleCharacter( [ 'a','v','b','c','v','b','c']) );
