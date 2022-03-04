function rotatematrix(m, n, mat){
    let row = 0, col = 0;
    let prev, curr;

    while (row < m && col < n){
        if (row + 1 == m || col + 1 == n) {break}
        prev = mat[row + 1][col];
   
        for(let i = col; i < n; i++){
            curr = mat[row][i];
            mat[row][i] = prev;
            prev = curr;
        }
        row++;

        for(let i = row; i < m; i++){
            curr = mat[i][n - 1];
            mat[i][n - 1] = prev;
            prev = curr;
        }
        n--;
        if (row < m){
            for(let i = n - 1; i >= col; i--){
                curr = mat[m - 1][i];
                mat[m - 1][i] = prev;
                prev = curr;
            }
        }
        m--;
   
        if (col < n){
            for(let i = m - 1; i >= row; i--)
            {
                curr = mat[i][col];
                mat[i][col] = prev;
                prev = curr;
            }
        }
        col++;
    }
    return mat
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = input[0];
    let matrix = [];
    let line = 1;
    for (let i = 0; i < N; i++) {
        let array = input[line++].trim().split(" ").map(Number);
        matrix.push(array) 
    }
    // console.log( matrix); 
    let data = rotatematrix(N, N, matrix)
    let str = ""

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            str += matrix[i][j] + " "
        }
        str += '\n'
    }
    console.log( str );
  }


  if (process.env.USERNAME === "shakib") {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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

