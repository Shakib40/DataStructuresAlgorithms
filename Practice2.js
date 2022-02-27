function MajorityElement(array){
   
    
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = input[0];
    let array = input[1].trim().split(" ").map(Number);
    // console.log(N , array ); 
    console.log( MajorityElement(array) );
  }

  if (process.env.USERNAME === "shakib") {
    runProgram(`5
    3 3 5 5 1`);
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

