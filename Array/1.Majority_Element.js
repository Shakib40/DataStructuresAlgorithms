//INPUT : [4,4,3,4,2,4,5,6,4,4]
//OUTPUT : 4


// explanation : the frequency of 4 is 5 which is greater the half of the size of the array in size

// Brute Force

// function findMajority(array){
//     let maxCount = 0;
//     let index = -1;
   
//     for(let i = 0; i < array.length ; i++){
//        let count = 0;
//        for(let j = 0; j < array.length ; j++){
//            if(array[i] == array[j]){
//                count = count + 1;
//            }
//        }
//        if(count > maxCount){
//            maxCount = count;
//            index = i
//        }
//     }

//     if(maxCount > (array.length-1)/2){
//        return array[index]
//     }else{
//         return -1
//     }
// }

// console.log(findMajority([4,4,3,4,2,4,5,6,4,4]));


// function MajorityElement(array){
//     let obj = {}
//     for(x of array){
//         if(x in obj){
//          obj[x] = obj[x] + 1
//         }else{
//             obj[x] = 1
//         }
//     }
    

//     for(y in obj){
//         if(obj[y] > (array.length-1)/2 ){
//             return y
//         }
//     }
//     return -1
// }

// console.log(MajorityElement([4,4,3,4,2,4,5,6,4,4]));

//Time : O(NlogN)
//Space : O(1)
function MajorityElement(array , N){
   array.sort(function(a,b){ return a - b}) // Merge sort O(NlogN)

   for( let i=0; i < N/2 ; i++){
       if(array[i] == array[i + N/2]){
           return array[i];
       }
   }
   return -1
}

console.log(MajorityElement([4,4,3,4,2,4,5,6,4,4] , 10));



// function MajorityElement(array){

// }

// console.log(MajorityElement([4,4,3,4,2,4,5,6,4,4]));