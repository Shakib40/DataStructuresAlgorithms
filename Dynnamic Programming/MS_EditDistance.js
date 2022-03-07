// 2021-12-22 10:45:00
// timelimit
function min(x, y, z){
	if (x <= y && x <= z)	return x;
	if (y <= x && y <= z)	return y;
	else	return z;
}

function editDist(str1, str2, m, n){
	if (m == 0) return n;

	if (n == 0)	return m;

	if (str1[m - 1] == str2[n - 1])
		return editDist(str1, str2, m - 1, n - 1);

	return 1 +
	min(editDist(str1, str2, m, n - 1), 
		editDist(str1, str2, m - 1, n), 
		editDist(str1, str2, m - 1, n - 1)); 
}


function runProgram(input) {
    input = input.trim().split("\n");
    let test = input[0];
    let line = 1;

    for (let i = 0; i < test ; i++) {
        let str1 = input[line++].trim();
        let str2 = input[line++].trim();
        console.log( editDist(str1, str2, str1.length , str2.length));
    }
   
  }
  if (process.env.USERNAME === "shakib") {
    runProgram(`3
    abcde
    abde
    abde
    abcde
    abcde
    abxde
    `);
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
