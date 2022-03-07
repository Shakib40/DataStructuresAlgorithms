// Input:   str1 = "geek", str2 = "gesek"
// Output:  1
// We can convert str1 into str2 by inserting a 's'.

// Input:   str1 = "cat", str2 = "cut"
// Output:  1
// We can convert str1 into str2 by replacing 'a' with 'u'.

// Input:   str1 = "sunday", str2 = "saturday"
// Output:  3
// Last three and first characters are same.  We basically
// need to convert "un" to "atur".  This can be done using
// below three operations. 
// Replace 'n' with 'r', insert t, insert a


// Working

function min(x, y, z){
    if (x <= y && x <= z)
        return x;
    if (y <= x && y <= z)
        return y;
    else
        return z;
}

function editDist(str1, str2, m, n){
      
    // If first string is empty, the 
    // only option is to insert all 
    // characters of second string into first
    if (m == 0)    return n;
  
    // If second string is empty, the only
    // option is to remove all characters 
    // of first string
    if (n == 0)    return m;
  
    // If last characters of two strings are
    // same, nothing much to do. Ignore last 
    // characters and get count for remaining 
    // strings.
    if (str1[m - 1] == str2[n - 1])
        return editDist(str1, str2, m - 1, n - 1);
  
    // If last characters are not same, consider all
    // three operations on last character of first
    // string, recursively compute minimum cost for all
    // three operations and take minimum of three
    // values.
    return 1 +  min(editDist(str1, str2, m, n - 1), // Insert
                editDist(str1, str2, m - 1, n), // Remove
                editDist(str1, str2, m - 1, n - 1)); // Replace
}
  
// Driver code
let str1 = "sunday";
let str2 = "saturday";

console.log( editDist(str1, str2, str1.length, str2.length));
