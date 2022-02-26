function MajorityElement(array , N){
    let obj = {}

    // if( (array.length -1) ==2 ){
    //     return array[0]
    // }

    // if( (array.length -1) ==1 ){
    //     return array[0]
    // }
    for(x of array){
        if(x in obj){
         obj[x] = obj[x] + 1
        }else{
            obj[x] = 1
        }
    }

    for(y in obj){
        if(obj[y] > (array.length-1)/2 ){
            return y
        }
    }
    return -1
}

// function MajorityElement(array , N){
//     array.sort(function(a,b){ return a - b}) // Merge sort O(NlogN)
 
//     for( let i=0; i < N/2 ; i++){
//         if(array[i] == array[i + N/2]){
//             return array[i];
//         }
//     }
//     return -1
// }


function runProgram(input) {
    input = input.trim().split("\n");
    let testcase = input[0];
    let line =1;
     
    for (let i = 0; i < testcase; i++){
        let N = input[line++].trim();
        let array = input[line++].trim().split(" ").map(Number);
        // console.log(N , array , Q );
        console.log( MajorityElement(array , N) );
    }
   
  }
  if (process.env.USERNAME === "shakib") {
    runProgram(`2
    6
    1 1 1 1 2 3
    5
    1 1 2 2 3`);
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

