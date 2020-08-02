/**
 * https://leetcode.com/problems/container-with-most-water/
 */

export default function maxArea(heights) {
  if (!Array.isArray(heights)) return 0;
  if (heights.length < 2) return 0;

  const calculateArea = (left, right) =>
    Math.min(heights[left], heights[right]) * (right - left);

  let left = 0;
  let right = heights.length - 1;
  let max = calculateArea(left, right);

  while (left < right) {
    if (heights[left] < heights[right]) {
      ++left;
    } else if (heights[left] > heights[right]) {
      --right;
    } else {
      ++left;
      --right;
    }
    max = Math.max(max, calculateArea(left, right));
  }

  return max;
}
