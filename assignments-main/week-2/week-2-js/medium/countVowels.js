/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  var modi = str.toLowerCase().split("");
  var count = 0;
  for (var i = 0; i < modi.length; i++) {
    const cur = modi[i];
    if (cur == "a" || cur == "e" || cur == "i" || cur == "o" || cur == "u")
      count++;
  }
  return count;
}

module.exports = countVowels;
