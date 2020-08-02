const mergeSort = (arr, comparer, start, end) => {
  if (start < end) {
    const mid = (start + end) >>> 1;

    mergeSort(arr, comparer, start, mid);
    mergeSort(arr, comparer, mid + 1, end);

    const temp = [...arr];

    let i = start;
    let j = mid + 1;

    for (let index = start; index <= end; ++index) {
      if (i > mid) {
        arr[index] = temp[j++];
      } else if (j > end) {
        arr[index] = temp[i++];
      } else if (comparer(temp[i], temp[j]) <= 0) {
        arr[index] = temp[i++];
      } else {
        arr[index] = temp[j++];
      }
    }
  }
};

export default (arr, comparer = (a, b) => a - b) => {
  const copy = [...arr];
  mergeSort(copy, comparer, 0, copy.length - 1);
  return copy;
};
