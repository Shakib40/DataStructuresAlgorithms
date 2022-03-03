function NumberOfWays(N){
    if(N <0){
        return 0
    }
    if(N ==0){
        return 1
    }

    return NumberOfWays(N-3) + NumberOfWays(N-2) + NumberOfWays( N -1)

 }

function runProgram(input) {
    input = input.trim().split("\n");
    let N = input[0];
    // console.log(N); 
    console.log( NumberOfWays(N) );
}

  if (process.env.USERNAME === "shakib") {
    runProgram(`4`);
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

