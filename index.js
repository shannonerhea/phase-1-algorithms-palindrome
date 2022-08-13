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
function isPalindrome(word) {
  let reversed = word.split("").reverse().join("")
  return word === reversed

}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
