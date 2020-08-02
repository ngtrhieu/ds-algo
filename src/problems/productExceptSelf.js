import _ from 'lodash';

/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * Solution without division
 */

export default nums => {
  const leftProd = _.reduce(
    nums,
    (acc, num, index) => (!index ? [num] : [...acc, num * acc[acc.length - 1]]),
    [],
  );

  const rightProd = _.reduce(
    _.reverse(nums),
    (acc, num, index) => (!index ? [num] : [...acc, num * acc[acc.length - 1]]),
    [],
  );

  return _.map(
    nums,
    (_, index) =>
      (index ? leftProd[index - 1] : 1) *
      (nums.length - index - 1 ? rightProd[nums.length - index - 2] : 1),
  );
};
