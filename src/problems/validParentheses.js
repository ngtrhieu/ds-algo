const parenPairs = {
  '(': ')',
  '{': '}',
  '[': ']',
};

export default s => {
  const stack = [];
  for (let i = 0; i < s.length; ++i) {
    if (s[i] in parenPairs) {
      stack.push(s[i]);
    } else {
      var last = stack.pop();
      if (parenPairs[last] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
