const singleNumber = (array) => {
    let res = array[0]

    for( let i = 1; i < array.length; i++ ){
        res = res ^ array[i]
    }
    return res
}

function runProgram(input) {
  input = input.trim().split("\n");
  let testcase = input[0];
  let line =1;
   
  for (let i = 0; i < testcase; i++){
      let N = input[line++].trim();
      let array = input[line++].trim().split(" ").map(Number);
      // console.log( array , N );
      console.log( singleNumber(array) );
  }
 
}
if (process.env.USERNAME === "shakib") {
  runProgram(`2
  1
  5
  5
  1 2 1 3 2`);
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

