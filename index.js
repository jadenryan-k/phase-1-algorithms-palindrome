function isPalindrome(word) {
  // Write your algorithm here
  //check if a word is a palindrome
  const palindrome = word.split('').reverse().join('');
  if (palindrome===word){
    return true
  }
  else {
    return false
  }
}

/* 
  Add your pseudocode here
  Split a word into letters then reverse the letter and join them back
  Check if the word is a palindrome and true if it is and false otherwise
*/

/*
  Add written explanation of your solution here
*/

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
