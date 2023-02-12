module.exports = function check(str, bracketsConfig) {

let stack = [];
let bracketsOpen = []; 
let bracketClose = [];
let bracketObj = {};

for(let j=0; j<bracketsConfig.length; j++) {
 bracketsOpen.push(bracketsConfig[j][0]);
 bracketClose.push(bracketsConfig[j][1]);
 bracketObj[bracketsConfig[j][0]] = bracketsConfig[j][1];
};

for(let i=0; i<str.length; i++) {  
   let lastItem = stack[stack.length-1];
   if(bracketsOpen.includes(str[i])) {
       stack.push(str[i]);
   } else {
       if(str.length === 0) return false;
       if(str[i] === bracketObj[lastItem] ) {
           stack.pop(lastItem);
       } else {
           stack.push(str[i]);
       };
   };
   if(str[i] === lastItem && bracketObj[str[i]] === lastItem ) {
       stack.pop(lastItem);
       stack.pop(lastItem);
   };
}

return stack.length === 0;
}


//   console.log(str, bracketsConfig);
//    // '([{}])'
//  // [['(', ')'], ['[', ']'], ['{', '}']]
//  let stack = [];
//  let bracketsOpen = []; 
//  let bracketClose = [];
//  let bracketObj = {};

// for(let j=0; j<bracketsConfig.length; j++) {
//   bracketsOpen.push(bracketsConfig[j][0]);
//   bracketClose.push(bracketsConfig[j][1]);
//   bracketObj[bracketsConfig[j][0]] = bracketsConfig[j][1];
// };
// //console.log(bracketsOpen, bracketClose);
// console.log(bracketObj);

// for(let i=0; i<str.length; i++) {
    
//     let lastItem = stack[stack.length-1];
//     if(bracketsOpen.includes(str[i])) {
//         stack.push(str[i]);
//     } else {
//         if(str.length === 0) return false;
//         if(str[i] === bracketObj[lastItem]) {
//             stack.pop(lastItem);
//         };
//     }; 
// }
// console.log(stack);
// return stack.length === 0;