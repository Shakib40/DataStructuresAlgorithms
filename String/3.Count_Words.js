function WordFrequency(input){
  let map = new Map()
  for( data of input){
      if(map.has(data)){
        map.set(data, map.get(data) + 1);
      }else{
          map.set(data, 1)
      }
  }

  var mapAsc = new Map( [...map.entries()].sort());

  for( let [k , v] of mapAsc){
      console.log( k + " " + v)
  }   

}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = input[0];
    let line =1;
    let words = [];
    for (let i = 0; i <N ; i++){
        let array = input[line++].trim();
        words.push(array)
    }
    // console.log(words);
    WordFrequency(words)
  }


  if (process.env.USERNAME === "shakib") {
    runProgram(`4
    prateek
    nrupul
    yogesh
    prateek`);
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

