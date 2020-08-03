/**
 * Crack the Coding Interview
 * Chapter 1
 * Problem 3
 * Write a method to replace all spaces in a string with '%20: You may assume that the string
 * has sufficient space at the end to hold the additional characters, and that you are given the "true"
 * length of the string. (Note: If implementing in Java, please use a character array so that you can
 * perform this operation in place.)
 * EXAMPLE
 * Input: "Mr John Smith "J 13
 * Output: "Mr%20J ohn%20Smith"
 */

export const urlify = str => {
  // mimic-ing stringbuilder
  const sb = [];

  // trim the start whitespace
  let i = 0;
  while (i < str.length) {
    if (str[i] !== ' ') break;
    ++i;
  }

  let hasSpace = false;
  for (; i < str.length; ++i) {
    hasSpace = hasSpace || str[i] === ' ';
    if (str[i] !== ' ') {
      if (hasSpace) {
        hasSpace = false;
        sb.push('%20');
      }
      sb.push(str[i]);
    }
  }

  return sb.join('');
};
