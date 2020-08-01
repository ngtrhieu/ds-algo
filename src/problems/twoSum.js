/**
 * https://leetcode.com/problems/two-sum/
 */
export default (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; ++i) {
    const compliment = target - nums[i];
    if (compliment in hash) {
      return [hash[compliment], i];
    } else {
      hash[nums[i]] = i;
    }
  }
  return undefined;
};
