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
