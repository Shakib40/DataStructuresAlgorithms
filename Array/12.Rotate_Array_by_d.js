// INPUT : [1 , 2 , 3 , 4 , 5 , 6 , 7] and d = 2
// OUTPUT :
// d=1   [ 2 , 3 , 4 , 5 , 6 , 7 , 1]
// d =2  [ 3 , 4 , 5 , 6 , 7 , 1 , 2]

function reverse (arr , left, right) {
    
    if(arr.length == 1){
        return arr
    }
    while (left < right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left = left + 1
        right = right - 1
    }
    console.log("rev" ,  arr);
    return arr
}

// console.log(reverse( [1, 2, 3, 4, 5, 6 , 7] , 0 , 6) );

function RotateArray(arr , d) {
    if(d == 1){
    reverse (arr , 0 , d)
    reverse (arr , d+1 , arr.length-1)
    reverse (arr , 0 , arr.length-1)
    }else{
    reverse (arr , 0 , d-1)
    reverse (arr , d , arr.length-1)
    reverse (arr , 0 , arr.length-1)
    }
    return arr
}


// var RotateArray = function(nums, k) {
//     nums.unshift(...nums.splice(nums.length - k));
//     let str = ''
//       for( x of nums ) {
//           str += x + ' '
//       } 
//       return str
//   };
  
  // var RotateArray = function(nums, k) {
  //   let n = nums.length;
  //   if(k>=n) k%=n
  //   nums.unshift(...nums.slice(-k));
  //   nums.splice(n);
  //   let str = ''
  //     for( x of nums ) {
  //         str += x + ' '
  //     } 
  //     return str
  // };

console.log( RotateArray( [1, 2, 3, 4, 5, 6 , 7] , 2 ) );

console.log( RotateArray( [1, 2, 3,] , 1 ) );