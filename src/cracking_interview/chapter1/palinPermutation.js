import _ from 'lodash';

/**
 * Crack the Coding Interview
 * Chapter 1
 * Problem 4
 * Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.
 * EXAMPLE
 * Input: Tact Coa
 * Output: True (permutations: "taco cat". "atco cta". etc.)
 */

export const palinPermutation = str => {
  const hash = {};
  _.each(str.toLowerCase().split(''), char => {
    // skip non alphabet character
    if (char.toLowerCase() === char.toUpperCase()) {
      return;
    }

    if (char in hash) {
      delete hash[char];
    } else {
      hash[char] = true;
    }
  });
  return Object.keys(hash).length < 2;
};

// linear time, constant space (only 26 chars)
