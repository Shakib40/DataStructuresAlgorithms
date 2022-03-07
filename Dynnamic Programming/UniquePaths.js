// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.


var uniquePaths = function(m, n) {
    const res = [];
    for (let i = 0; i < n; i++) res.push([...new Array(m).fill(1)]); // initialize list
    
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            res[i][j] = res[i-1][j] + res[i][j-1];
        }
    }
    return res[n-1][m-1];
    
};

// console.log(uniquePaths(3,7));

var uniquePaths = function(m, n) {
    // first create a DP
    const DP = [];
    for (let i = 0; i <= m; i++) {
        DP[i] = [];
    }
    
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                DP[i][j] = 0;
            } else if (i === 1 && j === 1) {
                DP[i][j] = 1;
            } else {
                const sum = DP[i - 1][j] + DP[i][j - 1];
                DP[i][j] = sum;
            }
        }
    }
    
    return DP[m][n];
}