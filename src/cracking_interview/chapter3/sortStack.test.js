import _ from 'lodash';
import { sortStack as sort } from './sortStack';
import sortingInputs from '../../utils/sortingInputs';

describe('sortStack', () => {
  // sort stack put the smallest number to top of the stack (i.e: last of array)
  // need to reverse the final array before send out
  const reverseSort = stack => _.reverse(sort(stack));
  sortingInputs({ algorithm: reverseSort, test, expect });
});
