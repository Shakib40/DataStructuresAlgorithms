// let productExceptSelf = function(nums) {
//     let final=[];

//     for(let i=0;i<nums.length;i++){
//         let prod=1;
//         for( let j=0; j<nums.length; j++){
//             if(j !=i){
//                 prod=prod*nums[j];
//             }
//         }
//         final.push(prod);
//     }
//     let str = "";
//     for( let d of final ){
//         str +=  d + " ";
//     }
//     return str;
// };

var productExceptSelf = function(nums) {
    const result = [];
    let productSoFar = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar
        productSoFar *= nums[i]
    }
    productSoFar = 1
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= productSoFar
        productSoFar *= nums[j]
    }
    let str = "";
    for( let d of result ){
        str +=  d + " ";
    }
    return str;
};

function runProgram(input) {
    input = input.trim().split("\n");
    let testcase = input[0];
    let line =1;
     
    for (let i = 0; i < testcase; i++){
        let N = input[line++].trim();
        let array = input[line++].trim().split(" ").map(Number);
        // console.log(N , array);
        console.log( productExceptSelf(array));
    }
   
  }
  if (process.env.USERNAME === "shakib") {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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

