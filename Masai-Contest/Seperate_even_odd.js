function SeperateEvenOdd(array , N , Q){
 
    let even = []
    let odd = []
   
    for ( x of array ){
      if( x % 2 == 0 ){
         even.push(x)
      }else{
        odd.push(x)
      }
    }
    even.sort((a, b) => a - b)
    odd.sort((a, b) => a - b)

    if( Q % 2 == 0){
       result = odd.concat(even)
    }else{
       result = even.concat(odd)
    }
    let str = ""

    for(d of result){
      str += d + " "
    }
    return str 

}

function runProgram(input) {
    input = input.trim().split("\n");
    let testcase = input[0];
    let line =1;
     
    for (let i = 0; i < testcase; i++){
        let N = input[line++].trim();
        let array = input[line++].trim().split(" ").map(Number);
        let Q = input[line++].trim();
        // console.log( array , N , Q );
        console.log(SeperateEvenOdd(array , N , Q) );
    }
   
  }

  if (process.env.USERNAME === "shakib") {
    runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2`);
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

