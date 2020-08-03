/**
 * Crack the Coding Interview
 * Chapter 1
 * Problem 2
 * Given two strings, write a method to decide if one is a permutation of the
 * other.
 */

import _ from 'lodash';

export const checkPermutationTrivial = str =>
  str === _.reverse(str.split('')).join('');

export const checkPermutation = str => {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start++] !== str[end--]) return false;
  }

  return true;
};
