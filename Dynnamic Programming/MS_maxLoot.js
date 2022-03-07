// 2021-12-22 10:45:00
// working
function maxLoot(array, n){
    if (n == 0)
        return 0;
    if (n == 1)
        return array[0];
    if (n == 2)
        return Math.max(array[0], array[1]);

    let dp = new Array(n);

    dp[0] = array[0];
    dp[1] = Math.max(array[0], array[1]);

    for (let i = 2; i<n; i++)
        dp[i] = Math.max( array[i] + dp[i-2] , dp[i-1]);

    return dp[n-1];
}

function runProgram(input) {
    input = input.trim().split("\n");
    let test = input[0];
    let line = 1;

    for(let i = 0; i < test; i++) {
        let N = input[line++].trim();
       let array = input[line++].trim().split(" ").map(Number);
       console.log( maxLoot(array, N) );
    }

   
  }
  if (process.env.USERNAME === "shakib") {
    runProgram(`3
    2
    1 100
    3
    2 100 99
    4
    100 1 1 100`);
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