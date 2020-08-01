import _ from 'lodash';

/**
 * https://leetcode.com/problems/maximum-subarray/
 */

export default nums => {
  if (nums.length === 0) {
    return undefined;
  }

  const { max } = _.reduce(
    nums,
    ({ sum, max }, num) => {
      sum = Math.max(num, sum + num);
      max = Math.max(max, sum);
      return { sum, max };
    },
    { sum: -Infinity, max: -Infinity },
  );

  return max;
};
