import mergeSort from './mergeSort';
import sortingInputs from '../utils/sortingInputs';

describe('heapSort', () => {
  sortingInputs({ algorithm: mergeSort, test, expect });
});
