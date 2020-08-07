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

export const manachers = str => {
  if (!_.isString(str) || str.length === 0) return 0;

  const arr = [' ', ...str.split('').join(' ').split(''), ' '];
  const range = _.times(arr.length, _.constant(0));

  let center = 0;
  let right = 0;

  let maxLength = 0;

  for (let index = 0; index < arr.length; ++index) {
    if (index < right) {
      // OPTIMIZATION HERE
      // already out of what center cover
      range[index] = Math.min(right - index, range[2 * center - index]);
    }

    // attempt to expand around index
    const a = index + range[index] + 1;
    const b = index - range[index] - 1;
    while (a < arr.length && b >= 0 && arr[a] === arr[b]) {
      ++range[index];
      ++a;
      --b;
    }

    // check whether index's range exists center's range
    if (index + range[index] > right) {
      center = index;
      right = index + range[index];
      maxLength = Math.max(maxLength, range[index]);
    }

    // early termination.
    if (right >= arr.length) break;
  }

  return maxLength;
};
