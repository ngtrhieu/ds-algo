import _ from 'lodash';

export const isUnique = str => {
  const hash = {};
  return _.every(str, c => {
    if (c in hash) {
      return false;
    } else {
      hash[c] = true;
      return true;
    }
  });
};
