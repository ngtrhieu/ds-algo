/**
 * https://leetcode.com/problems/contains-duplicate/
 */
export default nums => {
  const hash = {};
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] in hash) return true;
    hash[nums[i]] = true;
  }
  return false;
};
