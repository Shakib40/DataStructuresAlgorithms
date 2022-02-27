function CommonStart( str1 , str2 , str3 ) {
   
    let result = ""
    for ( var i = 0; i < str1.length ; i++ ) {

        if( str1[i] === str2[i]  ){
            if( str1[i] === str3[i]){
                if(str2[i] === str3[i]){
                    result += str1[i]
                }
            }
        }
    }
    return result.length > 0 ? result : "None"
}

function runProgram(input) {
    input = input.trim().split("\n");
    let [str1 , str2 , str3] = input[1].trim().split(" ");
    // console.log( str1 + " " + str2 + " " + str3);
    console.log(CommonStart( str1 , str2 , str3 ) );
  }


  if (process.env.USERNAME === "shakib") {
    runProgram(`1
    yrbrbyrbrybrbbr yrbbryrbb ybrrbyrbrybrbbr`);
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

