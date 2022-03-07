let  NumberOfWayReturn = function(n) {
    let arr=[];
    arr[0]=1;
    arr[1]=1;
    arr[2]=2;
    
    for(let i=3; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
    }
    return arr[n];
  };

function runProgram(input) {
    input = input.trim().split("\n");
    let N = input[0];
    console.log(N);
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

