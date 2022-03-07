function power_sum(X,M,P){

    let tmp = Math.pow(M,P);
    
    if(tmp == X) return 1;
    
    if(tmp > X) return 0;
    
    return power_sum(X, M+1, P) + power_sum(X-tmp, M+1, P);
}

function runProgram(input) {
    input = input.trim().split("\n");
    let [X,N] = input[0].split(" ").map(Number);
    // console.log(X,N );
    console.log(power_sum(X, 1, N));
  }
  if (process.env.USERNAME === "shakib") {
    runProgram(`10 2`);
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

