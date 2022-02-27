var isAnagram = function(str1, str2) {
   
    if( str1.length != str2.length){
        return false;
    }
    let map1 = new Map()
    let map2 = new Map()

    for(let data of str1){
        if( map1.has(data) ){
           map1.set(data, map1.get(data) + 1)
        }else{
            map1.set(data, 1)
        }
    }

    for(let data of str2){
        if( map2.has(data) ){
           map2.set(data, map2.get(data) + 1)
        }else{
            map2.set(data, 1)
        }
    }
    for( let [k , v] of map1 ){
        if( map1.get(k) != map2.get(k) ){
            return false
        }
    }
    return true

}
function runProgram(input) {
    input = input.trim().split("\n");
    let testcase = input[0];
    let line =1;
     
    for (let i = 0; i < testcase; i++){
        let str1 = input[line++].trim();
        let str2 = input[line++].trim();
        // console.log( str1 , str2 );
        console.log( isAnagram( str1 , str2) );
    }
   
  }
  if (process.env.USERNAME === "shakib") {
    runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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

