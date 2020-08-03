import _ from 'lodash';

/**
 * Crack the Coding Interview
 * Chapter 1
 * Problem 1
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

export const isUnique = str => {
  const hash = {};
  return _.every(str, c => {
    if (c in hash) {
      return false;
    } else {
      hash[c] = true;
      return true;
    }
  });
};

// - If not able to use extra data structure:
// bruteforce O(n^2)
// - If not able to use extra space:
// heap inplace
// then see next two consecutive pop is the same O(nlogn)
