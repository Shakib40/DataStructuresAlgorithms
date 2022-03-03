function FourPart(array , N){
let sum = 0;
let a1 = 0;
let a5 = N;

let a3 = a1 + Math.floor( ( a5 - a1 ) / 2)
let a2 = a1 + Math.floor( ( a3 - a1 ) / 2)
let a4 = a3 + Math.floor( ( a5 - a3)/2)


  
  let c1 = 0
  for (let i = a1 ; i < a2 ; i++) {
    c1 += array[i]
  }

  let c2 = 0
  for (let i = a2 ; i < a3 ; i++) {
    c2 += array[i]
  }
  
  let c3 = 0
  for (let i = a3 ; i < a4 ; i++) {
    c3 += array[i]
  }
  
  let c4 = 0
  for (let i = a4 ; i < a5 ; i++) {
    c4 += array[i]
  }
  
  return  c1*2 + c2 + 2*c3 + c4 

}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = input[0];
    let array = input[1].trim().split(" ").map(Number);
    // console.log(array,N );
    console.log( FourPart(array , N) );
}

  if (process.env.USERNAME === "shakib") {
    runProgram(`8
    1 2 3 4 5 6 7 8`);
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

