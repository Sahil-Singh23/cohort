/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowercaseString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const rev = lowercaseString.split("").reverse().join("");

  return lowercaseString == rev;
}

module.exports = isPalindrome;
