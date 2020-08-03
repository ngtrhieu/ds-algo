/**
 * Crack the Coding Interview
 * Chapter 1
 * Problem 7
 * Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
 * write a method to rotate the image by 90 degrees. Can you do this in place?
 */

export const rotate = matrix => {
  const size = matrix.length;

  for (let row = 0; row < size >> 1; ++row) {
    for (let col = row; col < size - row - 1; ++col) {
      [
        matrix[row][col],
        matrix[size - 1 - col][row],
        matrix[size - 1 - row][size - 1 - col],
        matrix[col][size - 1 - row],
      ] = [
        matrix[size - 1 - col][row],
        matrix[size - 1 - row][size - 1 - col],
        matrix[col][size - 1 - row],
        matrix[row][col],
      ];
    }
  }

  return matrix;
};
