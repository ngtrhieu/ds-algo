import _ from 'lodash';

/**
 * https://leetcode.com/problems/valid-anagram/
 */

export default (s, t) => {
  if (s.length !== t.length) return false;

  const size = s.length;
  let index = 0;
  for (; index < size; ++index) {
    if (s[index] !== t[index]) break;
  }
  if (index === size) return true;

  const hash = {};
  for (let i = index; i < size; ++i) {
    if (s[i] in hash) {
      ++hash[s[i]];
    } else {
      hash[s[i]] = 1;
    }
  }

  for (let i = index; i < size; ++i) {
    if (t[i] in hash) {
      --hash[t[i]];
      if (hash[t[i]] === 0) delete hash[t[i]];
    } else {
      return false;
    }
  }

  return _.keys(hash).length === 0;
};
