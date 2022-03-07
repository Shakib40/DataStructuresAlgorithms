function minCoins(coins,  N, target){
  if (target == 0)
    return 0;
  
 let res =Number.MAX_SAFE_INTEGER;
  
  for (let i=0; i<N; i++){
    if (coins[i] <= target){
     let sub_res = 1 + minCoins(coins, N, target-coins[i]);
      if (sub_res < res)
        res = sub_res;
    }
  }
  return res;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [N,target] = input[0].split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  // console.log(N ,target,array); 
  console.log(minCoins(array,N,target)); 
}
if (process.env.USERNAME === "shakib") {
  runProgram(`3 11
  1 5 7`);
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


