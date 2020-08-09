import _ from 'lodash';

/**
 * given an unordered array consisting of consecutive integers
 * [0, 1, 2, 3, ..., n] without any duplicates. Find the minimum
 * number of swaps needed to sort the array in ascending order.
 */

export const minSwap = arr => {
  if (!arr || !_.isArray(arr)) return 0;

  let swap = 0;

  const visit = {};
  for (let i = 0; i < arr.length; ++i) {
    let count = 0;
    let curr = i;
    while (!visit[curr]) {
      visit[curr] = true;

      if (curr !== arr[curr]) {
        ++count;
        curr = arr[curr];
      }
    }

    if (count > 0) swap += count - 1;
  }

  return swap;
};
