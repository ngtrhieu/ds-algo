import _ from 'lodash';

/**
 * Find the longest string with unique characters
 */

export const longestString = str => {
  if (!str || !_.isString(str)) return 0;

  const hash = {};

  let max = 0;
  let start = 0;
  for (let i = 0; i < str.length; ++i) {
    if (str[i] in hash && hash[str[i]] >= start) {
      max = Math.max(max, i - start);
      start = hash[str[i]] + 1;
    }
    hash[str[i]] = i;
  }

  max = Math.max(max, str.length - start);
  return max;
};

/**
str   = 0 1 2 3 4 2 6 1 7 4 0 1
start = ^   ^   ^     ^
i     =           ^   ^   ^   ^
max   = 0         5       6   6
 */
