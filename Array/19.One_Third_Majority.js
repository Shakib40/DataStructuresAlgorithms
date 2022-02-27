function OneThirdMajority(array){
    let dp = {};
    for (let i = 0; i < array.length; i++){
      
        if(array[i] in dp){
            dp[array[i]] += 1
        }else {
            dp[array[i]] = 1
        }
    }
    // console.log(dp);
    for(key in dp){
        if(dp[key] > (array.length / 3)){
            console.log(key);
        }
   }  
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = input[0];
    let array = input[1].trim().split(" ").map(Number);
    // console.log(N , array );
    OneThirdMajority(array)
   
  }
  if (process.env.USERNAME === "shakib") {
    runProgram(`3
    3 2 3`);
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

