/**
 * Crack the Coding Interview
 * Chapter 1
 * Problem 5
 * There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
 * EXAMPLE
 * pale, ple -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bake -> false
 */

const checkSingleEdit = (str1, str2) => {
  let edit = 0;
  for (let i = 0; i < str1.length; ++i) {
    if (str1[i] !== str2[i]) ++edit;
    if (edit >= 2) return false;
  }
  return true;
};

const checkSingleRemove = (str1, str2) => {
  let removal = 0;
  for (let i = 0; i < str1.length; ++i) {
    if (str1[i] !== str2[i - removal]) ++removal;
    if (removal >= 2) return false;
  }
  return true;
};

export const oneAway = (str1, str2) => {
  if (str1.length === str2.length) {
    return checkSingleEdit(str1, str2);
  } else {
    return checkSingleRemove(
      ...(str1.length > str2.length ? [str1, str2] : [str2, str1]),
    );
  }
};
