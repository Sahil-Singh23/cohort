/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const sortedString1 = str1.toLowerCase().split("").sort().join("");
  const sortedString2 = str2.toLowerCase().split("").sort().join("");
  if (sortedString1 == sortedString2) {
    return true;
  }
  return false;
}

module.exports = isAnagram;
