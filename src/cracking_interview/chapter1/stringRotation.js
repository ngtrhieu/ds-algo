/**
 * Crack the Coding Interview
 * Chapter 1
 * Problem 9
 * Assume you have amethod isSubstring which checks if one word is asubstring of another. Given two strings,
 * s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g.,"waterbottle"
 * is a rotation of "erbottlewat").
 */

export const isRotation = (s1, s2) => (s2 + s2).includes(s1);
