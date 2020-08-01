/**
 * Perform heapify a subheap with root at {index}
 * @param {Array} arr - the array of elements to sort
 * @param {Func} comparer - the comparer between two elements
 * @param {number} size - the size of the heap array
 * @param {number} index - the index of the heap root
 *
 * @returns {Array} arr - the same array passed in
 */
const heapify = (arr, comparer, size, index) => {
  // find the index of the largest elem among the parent and its 2 children
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < size && comparer(arr[left], arr[largest]) > 0) {
    largest = left;
  }

  if (right < size && comparer(arr[right], arr[largest]) > 0) {
    largest = right;
  }

  if (largest !== index) {
    // swap the parent and its largest child, then continue heaping
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    heapify(arr, comparer, size, largest);
  }

  return arr;
};

/**
 * Perform heapSort on the array.
 * Return the new sorted array. The original array is intact.
 *
 * @param {Array} arr - the array of elements to sort
 * @param {Func} comparer - the comparer between two elements
 *
 * @returns {Array} the sorted array
 */
export default (arr, comparer = (a, b) => a - b) => {
  const result = [...arr];
  const size = result.length;

  for (let i = size - 1; i >= 0; --i) {
    heapify(result, comparer, size, i);
  }

  for (let i = size - 1; i >= 0; --i) {
    [result[0], result[i]] = [result[i], result[0]];
    heapify(result, comparer, i, 0);
  }

  return result;
};
