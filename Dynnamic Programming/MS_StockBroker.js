// 2021-12-22 10:45:00
// timelimit


function maxProfit(array, N){
  let max = 0;
  let profit = 0;

  for(let i=0; i<array.length; i++) {

    for(let j = 0 ; j < array.length ; j++) {
        if(i != j && i < j && array[i] < array[j]) {
          profit = Math.abs( array[i] -  array[j]); 
          if(max < profit) max = profit;
        }
    }
  }
  return max;
}

function runProgram(input) {
    input = input.trim().split("\n");
    let test = input[0];
    let line = 1;
  
    for(let i = 0; i < test; i++) {
        let N = input[line++].trim();
        let array = input[line++].trim().split(" ").map(Number);
        console.log(maxProfit(array, N));
    }
   }

  if (process.env.USERNAME === "shakib") {
    runProgram(`2
    6
    7 1 5 3 6 4
    4
    4 3 2 1
    `);
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

