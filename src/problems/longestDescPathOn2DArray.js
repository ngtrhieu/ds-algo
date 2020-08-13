/**
 * Given a 2D array with distinct element integer and a staring coordinate, find
 * the longest path from the starting coordinate, providing you can only go (up, down,
 * left, right) to a next cell with smaller value.
 */

export const longestPath = (arr, s, t) => {
  if (!arr || arr.length === 0) return 0;

  const height = arr.length;
  const width = arr[0].length;

  let maxLength = 0;
  const stack = [{ coordinate: [s, t], length: 0 }];

  const traverse = ({ coordinate, length }) => {
    const [x, y] = coordinate;

    if (x < 0 || x >= width || y < 0 || y >= height) return;

    ++length;
    maxLength = Math.max(length, maxLength);

    if (x > 0 && arr[x - 1][y] < arr[x][y]) {
      stack.push({ coordinate: [x - 1, y], length });
    }

    if (x < width - 1 && arr[x + 1][y] < arr[x][y]) {
      stack.push({ coordinate: [x + 1, y], length });
    }

    if (y > 0 && arr[x][y - 1] < arr[x][y]) {
      stack.push({ coordinate: [x, y - 1], length });
    }

    if (y < height - 1 && arr[x][y + 1] < arr[x][y]) {
      stack.push({ coordinate: [x, y + 1], length });
    }
  };

  while (stack.length) {
    traverse(stack.pop());
  }

  return maxLength;
};
