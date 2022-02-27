function LocalMaxima(array , N){
   if(N < 3){
       return -1
   }
   let count = 0;

   for( let i = 1; i < array.length -1; i++){
       if(array[i-1] < array[i] && array[i] > array[i+1]){
           count++;
       }
   }
   return count
}

function runProgram(input) {
    input = input.trim().split("\n");
    let testcase = input[0];
    let line =1;
     
    for (let i = 0; i < testcase; i++){
        let N = input[line++].trim();
        let array = input[line++].trim().split(" ").map(Number);
        // console.log( array , N  );
        console.log(LocalMaxima(array , N) );
    }
   
  }
  if (process.env.USERNAME === "shakib") {
    runProgram(`2
    2
    1 2
    10
    884 729 768 201 266 494 597 328 705 287`);
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

