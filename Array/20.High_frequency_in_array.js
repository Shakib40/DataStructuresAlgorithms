function HighFrequency(array){
    let dp = {};
    for (let i = 0; i < array.length; i++){
      
        if(array[i] in dp){
            dp[array[i]] += 1
        }else {
            dp[array[i]] = 1
        }
    }
    let data = 0;
    let value = 0;
    for(key in dp){
        if(dp[key] > value){
            value = dp[key];
            data = key
        }
   }  
   console.log(data);
}

function runProgram(input) {
    input = input.trim().split("\n");
    let test = input[0];
    let line = 1;

    for (let i = 0 ; i < test; i++) {
        let N = input[line++].trim();
        let array = input[line++].trim().split(" ").map(Number);
        // console.log(N , array );
        HighFrequency(array)
    }
   
  }
  if (process.env.USERNAME === "shakib") {
    runProgram(`2
    6
    1 4 4 4 5 3
    11
    1 2 3 4 5 4 3 2 1 3 4`);
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

