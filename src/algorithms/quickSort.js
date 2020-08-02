const quickSort = (arr, comparer, start, end) => {
  const queue = [[start, end]];

  const partition = (lo, hi) => {
    const pivot = arr[hi];

    let i = lo;
    for (let j = lo; j <= hi; ++j) {
      if (comparer(arr[j], pivot) < 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        ++i;
      }
    }

    [arr[i], arr[hi]] = [arr[hi], arr[i]];
    return i;
  };

  const quickSortImpl = (s, t) => {
    if (s < t) {
      const pivot = partition(s, t);
      queue.push([s, pivot - 1]);
      queue.push([pivot + 1, t]);
    }
  };

  while (queue.length) {
    const [s, t] = queue.shift();
    quickSortImpl(s, t);
  }
};

export default (arr, comparer = (a, b) => a - b) => {
  const copy = [...arr];
  quickSort(copy, comparer, 0, copy.length - 1);
  return copy;
};
