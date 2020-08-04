import _ from 'lodash';

/**
 * Given a string, find the longest substring with the same number of '0' and '1'.
 *
 */

export const longestBW = str => {
  if (!str || !_.isString(str)) return 0;

  const hash = { 0: -1 };

  let max = 0;
  let diff = 0;
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === '0') {
      --diff;
    } else if (str[i] === '1') {
      ++diff;
    } else {
      continue;
    }

    if (diff in hash) {
      max = Math.max(max, i - hash[diff]);
    } else {
      hash[diff] = i;
    }
  }

  return max;
};
