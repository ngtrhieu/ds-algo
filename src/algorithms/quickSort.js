const partition = (arr, comparer, start, end) => {
  const pivot = arr[end];

  let i = start;
  for (let j = start; j <= end; ++j) {
    if (comparer(arr[j], pivot) < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      ++i;
    }
  }

  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
};

const quickSort = (arr, comparer, start, end) => {
  const queue = [[start, end]];
  const quickSortImpl = (arr, start, end) => {
    if (start < end) {
      const pivot = partition(arr, comparer, start, end);
      queue.push([start, pivot - 1]);
      queue.push([pivot + 1, end]);
    }
  };
  while (queue.length) {
    const [start, end] = queue.shift();
    quickSortImpl(arr, start, end);
  }
};

export default (arr, comparer = (a, b) => a - b) => {
  const copy = [...arr];
  quickSort(copy, comparer, 0, copy.length - 1);
  return copy;
};
