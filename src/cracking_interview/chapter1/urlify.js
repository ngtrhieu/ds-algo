export const urlify = str => {
  // mimic-ing stringbuilder
  const sb = [];

  // trim the start whitespace
  let i = 0;
  while (i < str.length) {
    if (str[i] !== ' ') break;
    ++i;
  }

  let hasSpace = false;
  for (; i < str.length; ++i) {
    hasSpace = hasSpace || str[i] === ' ';
    if (str[i] !== ' ') {
      if (hasSpace) {
        hasSpace = false;
        sb.push('%20');
      }
      sb.push(str[i]);
    }
  }

  return sb.join('');
};
