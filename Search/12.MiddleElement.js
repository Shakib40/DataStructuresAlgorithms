function MiddleElement(array , N){
 let position = 1

 let left_check = 0;
 let right_check = 0;

 while (position < N -1){

    for (let i = 0; i < position; i++) {
        if(array[i]> array[position] ){
            left_check = 1
        }
    }
    
    for (let i = position+1; i < array.length; i++) {
        if(array[i] < array[position] ){
            right_check = 1
        }
    }
    
    if( left_check == 0 &&  right_check == 0){
        return array[position]
    }
    position++

    left_check = 0
    right_check = 0
 }
 return -1

}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = input[0];
    let array = input[1].trim().split(" ").map(Number);
    // console.log(array , N );
    console.log( MiddleElement(array , N) );
}

  if (process.env.USERNAME === "shakib") {
    runProgram(`5
    4 3 6 7 8`);
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

