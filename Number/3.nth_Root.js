function nthRoot(N , M){
   
    let res = 1
    // console.log( res);
    let min = 1;
    while(res <= M){
        res = Math.pow(min , N)
        if(res == M){
            return min
        }
        if(res > M){
           return min-1
        }
        min++;
    } 

}
function runProgram(input) {
    input = input.trim().split("\n");
    let testcase = input[0];
    let line =1;
     
    for (let i = 0; i < testcase; i++){
        let [N,M] = input[line++].trim().split(" ").map(Number);
        // console.log(  N , M );
        console.log( nthRoot(N , M) );
    }
  }

  if (process.env.USERNAME === "shakib") {
    runProgram(`3
    2 9
    6 4096
    3 126`);
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

