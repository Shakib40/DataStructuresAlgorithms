// function reverse (arr , left, right) {

//     while (left < right){
//         let temp = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp
//         left = left + 1
//         right = right - 1
//     }
//     return arr
// }

// function RotateArray(arr , d) {
//     if(d == 1){
//         reverse (arr , 0 , d)
//         reverse (arr , d+1 , arr.length-1)
//         reverse (arr , 0 , arr.length-1)
//         }else{
//         reverse (arr , 0 , d-1)
//         reverse (arr , d , arr.length-1)
//         reverse (arr , 0 , arr.length-1)
//     }

//     let str = ''
//     for( x of arr ) {
//         str += x + ' '
//     } 
//     return str
// }

var RotateArray = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k));
  let str = ''
    for( x of nums ) {
        str += x + ' '
    } 
    return str
};

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

function runProgram(input) {
    input = input.trim().split("\n");
    let testcase = input[0];
    let line =1;
     
    for (let i = 0; i < testcase; i++){
        let [N, K] = input[line++].trim().split(" ").map(Number);
        let array = input[line++].trim().split(" ").map(Number);
        // console.log( array , N ,  K% N );
        console.log( RotateArray( array , K % N ) );
    }   
}

  if (process.env.USERNAME === "shakib") {
    runProgram(`3
    3 1
    1 2 3
    2 2
    1 2
    2 3
    1 2`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }

