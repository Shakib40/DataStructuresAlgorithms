// 2021-12-22 10:45:00
// Working

function isSubSequence(str1, str2, m, n){
    let j = 0;
    
    for (let i = 0; i < n && j < m; i++)
        if (str1[j] == str2[i])
            j++;

    return (j == m);
}


function runProgram(input) {
    input = input.trim().split("\n");
    let test = input[0];
    let line = 1;

    for (let i = 0; i < test ; i++) {
        let str1 = input[line++].trim();
        let str2 = input[line++].trim();
        let res = isSubSequence(str1, str2, str1.length, str2.length);
        if(res) {
            console.log("YES");
        } else {
            console.log("NO");
        }    
    }
   
  }
  if (process.env.USERNAME === "shakib") {
    runProgram(`2
    abc
    adbce
    ax
    xaa`);
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



