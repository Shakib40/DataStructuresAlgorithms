function lowerBond(array,N,K){
    let curr = -1;
    let low = 0;
    let high = N - 1

    while(low <= high){
      
        let mid = low + Math.floor( (high - low)/2 )
        if(array[mid] == K){
            curr = mid
            high = mid - 1
        }else if( array[mid] <= K){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return curr
}

function upperBond(array,N,K){
    let curr = -1;
    let low = 0;
    let high = N - 1

    while(low <= high){
      
        let mid = low + Math.floor( (high - low)/2 )
        if(array[mid] == K){
            curr = mid
            low = mid + 1
        }else if( array[mid] <= K){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return curr
}

function runProgram(input) {
    input = input.trim().split("\n");
    let [N,K] = input[0].split(" ").map(Number);
    let array = input[1].trim().split(" ").map(Number);
    let first = lowerBond(array,N,K)
    let last = upperBond(array,N,K)
    if( first == -1 && last == -1){
        console.log("-1");
    }else{
        console.log( last - first + 1 );
    }
}

  if (process.env.USERNAME === "shakib") {
    runProgram(`6 3
    2 3 3 3 6 9`);
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

