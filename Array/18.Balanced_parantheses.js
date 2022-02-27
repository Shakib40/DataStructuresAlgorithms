// var isValid = function(s) {
//     let stack = [];

//     for (let i = 0; i < s.length; i++) {
      
//       if(stack.length == 0 && ( s[i] == ')' || s[i] == '}' || s[i] == ']') ) {
//           return "not balanced"
//       }
      
//       if( s[i] == '(' || s[i] == '{' || s[i] == '['){
//         stack.push( s[i] )
//       }

//       if( s[i] == ')' &&  stack[stack.length - 1] == '(' ){
//         stack.pop()
//       }

//       if( s[i] == '}' &&  stack[stack.length - 1] == '{' ){
//         stack.pop()
//       }

//       if( s[i] == ']' &&  stack[stack.length - 1] == '[' ){
//         stack.pop()
//       }

//     }
//     return stack.length > 0 ? "not balanced" : "balanced" 
// };

var isValid = function(s) {
  if (s.length <=1) return "not balanced"
  
  let stack = []
  let hash = {
      '(' : ')',
      '[' : ']',
      '{' : '}'
  }
  
  for(let i = 0; i < s.length; i++){
      if (hash[s[i]]) stack.push(hash[s[i]])
      else if (s[i] !== stack.pop()) return "not balanced"
  }
  return stack.length > 0 ? "not balanced" : "balanced"
};

function runProgram(input) {
    input = input.trim().split("\n");
    let testcase = input[0];
    let line =1;
     
    for (let i = 0; i < testcase; i++){
        let brackets = input[line++].trim();
        // console.log(brackets);
        console.log( isValid(brackets) );
    }
   
  }
  if (process.env.USERNAME === "shakib") {
    runProgram(`3
    {([])}
    ()
    ([]
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

