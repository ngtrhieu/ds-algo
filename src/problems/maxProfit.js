import _ from 'lodash';
import maxSubArray from './maxSubArray';

/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
export default prices => {
  const diff = _.reduce(
    prices,
    (acc, _, index) =>
      index ? [...acc, prices[index] - prices[index - 1]] : acc,
    [],
  );

  return Math.max(maxSubArray(diff) || 0, 0);
};
