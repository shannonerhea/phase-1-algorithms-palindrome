/* MDN psges i used
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/

/*
im going to split the word on a space, 
reverse it 
and then join it again
return the reversed word 
*/



// const checkPalindrome = string => {
//   let reversed = ''
//   let newString = string.toLowerCase()
//   for (let i = newString.length -1 ; i >= 0 ; i--) {
//     const currentLetter = newString[i];
//     reversed += currentLetter;
//   }
  
//   return reversed === newString ? true : false
  
// }
// function isPalindrome(word) {
//   if (word.length <= 1) {
//     return true
//   } else {
//     if(word[0] === word[word.length - 1]) {
//       isPalindrome(word.slice(1, -1))
//     } else {
//       return false
//     }
//   }
// }
// function isPalindrome(str)
// {
//      return str === str.split('').reverse().join('')
// }
// function isPalindrome(word) {
//   reversed = "";
//   i = 0
//   while i < word.length;
//    reversed = word[i] + reversed
//    i += 1
//    if (word === reversed) {
//     return true;
//    } else {
//     return false
//    };
// };


// function isPalindrome(word) {
//   reversed = "";
//   for (let i = 0; i < word.length; i++) {
//     reversed = word[i] + reversed
//     if (word === reversed) {
//       return true;
//     } else {
//       return false
//     };
//   };
// };
// const isPalindrome = (word) => {
//   let reversed = word.split("").reverse().join("")
//   return reversed

//  }

// // You can run `node index.js` to view these console logs
// //if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
  // console.log("=>", isPalindrome("racecar"));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", isPalindrome("robot"));



// function isPalindrome(word) {
//   let reversed = word.split("").reverse().join("")
//   return word === reversed

// }

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }
