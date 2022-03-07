// Input: arr[] = {3, 10, 2, 1, 20}
// Output: Length of LIS = 3
// The longest increasing subsequence is 3, 10, 20


// function longestIncreasingSubsequence(arr) {
//     let count = "";
//     var pos = arr[0];

//     for (let i = 0; i < arr.length; i++) {
        
//         console.log(arr[i]);

//         if( pos < arr[i]){

//            count += arr[i] + " ";
//            pos = arr[i];
//         }
//     }
//     console.log( count );
 
// }



let array = [50, 3, 10, 7, 40, 80];
console.log(array);

longestIncreasingSubsequence(arr);

// console.log( longestIncreasingSubsequence(arr));

