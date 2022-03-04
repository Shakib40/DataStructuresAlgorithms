var check = function(nums) {
  let decreased = false
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < nums[i - 1]) {
      if (decreased) {
        return "NO"
      }
      decreased = true
    }
  }
  return decreased ? "YES" : "NO"
};

function runProgram(input) {
    input = input.trim().split("\n");
    let N = input[0];
    let array = input[1].trim().split(" ").map(Number);
    // console.log(array , N );
    console.log( check(array));
  }

  if (process.env.USERNAME === "shakib") {
    runProgram(`6
    3 4 7 9 1 2`);
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

