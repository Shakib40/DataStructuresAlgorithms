function SearchInSorted(array1, array2) {
  let stack  = merge(array1, array1.length-1, array2,  array2.length-1);
  return stack
}

var merge = function(nums1, m, nums2, n) {
  m--;
  n--;
  let i = nums1.length - 1;
  while (i >= 0) {
    if (n > -1 && m > -1 && nums1[m] >= nums2[n]) {
      nums1[i] = nums1[m];
      nums1[m] = nums2[n];
      m--;
    }
    else if (n > -1) {
      nums1[i] = nums2[n--];
    }
    i--;
  }
  return nums2;
};

function runProgram(input) {
    input = input.trim().split("\n");
    let testcase = input[0];
    let line =1;
     
    for (let i = 0; i < testcase; i++){
        let N = input[line++].trim();
        let array1 = input[line++].trim().split(" ").map(Number);
        let array2 = input[line++].trim().split(" ").map(Number);
        // console.log( array1 , array2  , N );
        console.log( SearchInSorted(array1, array2) );
    }
}

  if (process.env.USERNAME === "shakib") {
    runProgram(`5
    8
    1 2 3 5 8 8 9 9
    8 8 6 5 3 2 1 1
    9
    2 3 3 3 7 7 9 9 9
    9 9 9 8 6 5 4 3 1
    2
    4 7
    4 2
    3
    3 7 7
    8 5 1
    4
    2 7 7 8
    9 7 6 3`);
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


