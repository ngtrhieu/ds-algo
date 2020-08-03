/**
 * Crack the Coding Interview
 * Chapter 1
 * Problem 6
 * Implement a method to perform basic string compression using the counts of repeated characters.
 * For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not
 * become smaller than the original string, your method should return the original string. You can
 * assume the string has only uppercase and lowercase letters (a - z).
 */

// assume you want `aaab` to be `a3b1` instead of just simply `a3b` (smaller compression)
// assume you want `aaabb` to be `a3b2` instead of `a3bb` (same compression)

export const compress = str => {
  const resArr = [];

  let curr = null;
  let count = 0;

  for (let i = 0; i < str.length; ++i) {
    const char = str[i];
    if (curr === char) {
      ++count;
    } else {
      if (curr) {
        resArr.push(curr, count);
      }
      curr = char;
      count = 1;
    }
  }

  if (curr) {
    resArr.push(curr, count);
  }

  const result = resArr.join('');
  return result.length < str.length ? result : str;
};
