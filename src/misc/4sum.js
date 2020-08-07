const find2Sum = (arr, sum) => {
  const result = [];

  const hash = {};
  for (let i = 0; i < arr.length; ++i) {
    const item = arr[i];
    const compliment = sum - item;
    if (hash[compliment]) {
      result.push([item, compliment]);
    } else {
      hash[item] = true;
    }
  }
  return result;
};

const find4Sum = (arr, sum) => {
  const pairSums = {};
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      const sum = arr[i] + arr[j];
      if (pairSums[sum]) {
        pairSums[sum].push([i, j]);
      } else {
        pairSums[sum] = [[i, j]];
      }
    }
  }

  const findNonDuplicates = (pairs1, pairs2) => {
    for (let p1 = 0; p1 < pairs1.length; ++p1) {
      for (let p2 = 0; p2 < pairs2.length; ++p2) {
        const [a, b] = pairs1[p1];
        const [c, d] = pairs2[p2];
        if (a !== c && a !== d && b !== c && b !== d) {
          return [arr[a], arr[b], arr[c], arr[d]].sort();
        }
      }
    }
  };

  const pairOf2Sums = find2Sum(Object.keys(pairSums), sum);
  for (let i = 0; i < pairOf2Sums.length; ++i) {
    const [sum1, sum2] = pairOf2Sums[i];
    const pairs1 = pairSums[sum1];
    const pairs2 = pairSums[sum2];
    const result = findNonDuplicates(pairs1, pairs2);
    if (result) return result;
  }

  // check for 2 pairs of same amount
  if (sum % 2 === 0 && pairSums[sum / 2]) {
    const pairs = pairSums[sum / 2];
    const result = findNonDuplicates(pairs, pairs);
    if (result) return result;
  }

  return [];
};

export default find4Sum;
