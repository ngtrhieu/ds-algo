/**
 * Crack the Coding Interview
 * Chapter 3
 * Problem 5
 * Write a program to sort a stack such that the smallest items are on the top.
 * You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array).
 * The stack supports the following operations: push, pop, peek, and isEmpty.
 */

export const sortStack = stack => {
  const temp = [];
  while (stack.length) {
    temp.push(stack.pop());
    while (
      temp.length &&
      stack.length &&
      temp[temp.length - 1] > stack[stack.length - 1]
    ) {
      const t = stack.pop();
      stack.push(temp.pop());
      stack.push(t);
    }
  }
  while (temp.length) {
    stack.push(temp.pop());
  }
  return stack;
};
