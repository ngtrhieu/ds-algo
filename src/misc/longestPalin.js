import _ from 'lodash';

export const longestPalin = str => {
  let maxLength = 0;

  if (!_.isString(str) || str.length === 0) return maxLength;

  // odd size palin
  for (let i = 0; i < str.length; ++i) {
    let j = 0;
    for (; j <= i; ++j) {
      if (i + j >= str.length) break;
      if (str[i - j] !== str[i + j]) break;
    }
    const length = j * 2 - 1;
    maxLength = Math.max(length, maxLength);
  }

  if (str.length === 1) return maxLength;

  // even size palin
  for (let i = 1; i < str.length; ++i) {
    let j = 0;
    for (; j < i; ++j) {
      if (i + j >= str.length) break;
      if (str[i - 1 - j] !== str[i + j]) break;
    }
    const length = j * 2;
    maxLength = Math.max(length, maxLength);
  }

  return maxLength;
};
