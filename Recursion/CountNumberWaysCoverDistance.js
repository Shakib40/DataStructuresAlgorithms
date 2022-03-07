// function NumberOfWayReturn(N){
//   if(N==0){
//       return 1;
//   }
//     if(N <0){
//       return 0;
//   }

//   return NumberOfWayReturn(N-1) + NumberOfWayReturn(N-2) + NumberOfWayReturn(N-3);
// }

function NumberOfWayReturn(N){
    let count = []
    count[0] =1
    if(N >=1){
        count[1] = 1
    }
    if(N >=2){
        count[2] = 2
    }

    for(let i =3 ; i <= N; i++){
        count[i] = count[i-1] + count[i-2] + count[i-3];
    }
    return count[N]
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = input[0];
    // console.log(N);
    console.log(NumberOfWayReturn(N));
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

