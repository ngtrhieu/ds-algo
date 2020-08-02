export default function romanToInt(roman) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  s = roman.toUpperCase();

  let num = 0;
  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    const n = i < s.length - 1 ? s[i + 1] : null;

    if (n && symbols[c] < symbols[n]) {
      num += symbols[n] - symbols[c];
      ++i;
    } else {
      num += symbols[c];
    }
  }

  return num;
}
