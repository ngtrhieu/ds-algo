/**
 * Crack the Coding Interview
 * Chapter 1
 * Problem 8
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.
 */

export const zeroMatrix = matrix => {
  const numRow = matrix.length;
  if (!numRow) return matrix;

  const numCol = matrix[0].length;

  let firstColZeroed = false;
  for (let row = 0; row < numRow; ++row) {
    for (let col = 0; col < numCol; ++col) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        if (col !== 0) {
          matrix[0][col] = 0;
        } else {
          firstColZeroed = true;
        }
      }
    }
  }

  for (let row = 1; row < numRow; ++row) {
    for (let col = 1; col < numCol; ++col) {
      if (matrix[0][col] === 0) matrix[row][col] = 0;
      if (matrix[row][0] === 0) matrix[row][col] = 0;
    }
  }

  for (let col = 0; col < numCol; ++col) {
    if (matrix[0][0] === 0) matrix[0][col] = 0;
  }
  for (let row = 0; row < numRow; ++row) {
    if (firstColZeroed) matrix[row][0] = 0;
  }

  return matrix;
};
