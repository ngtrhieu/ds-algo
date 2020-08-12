import _ from 'lodash';

/**
 * Given a string s containing all charactere, and an array arr containing unique characters, find the shortest substring in s that
 * contains all characters in arr.
 */

export const minSubstring = (s, arr) => {
  if (!s || !_.isString(s)) {
    return '';
  }

  if (!arr || !_.isArray(arr)) {
    return '';
  }

  const hash = arr.reduce(
    (hash, c) => ({
      ...hash,
      [c]: 0,
    }),
    {},
  );

  let uniqueChars = 0;

  let min = Infinity;
  let minStart = -1;
  let minEnd = -1;

  let start = 0;
  let end = 0;

  for (end = 0; end < s.length; ++end) {
    const endChar = s[end];

    // Encounter the necessary character
    // Keeping track of the count
    if (hash[endChar] !== undefined) {
      ++hash[endChar];
      if (hash[endChar] === 1) ++uniqueChars;
    }

    // If all necessary characters are found
    if (uniqueChars === arr.length) {
      // Attempt to remove unnecessary characters at the start
      while (start < end) {
        const c = s[start];

        // If encounter necessary chars
        // Remove down on only 1 copy that character
        if (hash[c] !== undefined) {
          if (hash[c] > 1) {
            --hash[c];
          } else {
            break;
          }
        }

        ++start;
      }

      // consider substring [start,end] as a candidate
      if (min > end - start) {
        min = end - start;
        minStart = start;
        minEnd = end;
      }

      // moving start up by 1 and continue searching
      const startChar = s[start];
      --hash[startChar];
      --uniqueChars;
      ++start;
    }
  }

  return min !== Infinity ? s.substring(minStart, minEnd + 1) : '';
};
