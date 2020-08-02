import roman from './romanToInt';

describe('romanToInt', () => {
  test('1 - 5', () => {
    expect(roman('I')).toBe(1);
    expect(roman('II')).toBe(2);
    expect(roman('III')).toBe(3);
    expect(roman('IV')).toBe(4);
    expect(roman('V')).toBe(5);
  });
  test('6 - 10', () => {
    expect(roman('VI')).toBe(6);
    expect(roman('VII')).toBe(7);
    expect(roman('VIII')).toBe(8);
    expect(roman('IX')).toBe(9);
    expect(roman('X')).toBe(10);
  });

  test('higher numbers', () => {
    expect(roman('XVIII')).toBe(18);
    expect(roman('XXIX')).toBe(29);
    expect(roman('XIV')).toBe(14);
    expect(roman('XXXVI')).toBe(36);
  });

  test('years', () => {
    expect(roman('MDCC')).toBe(1700);
    expect(roman('MCMXCIII')).toBe(1993);
    expect(roman('MCMXCV')).toBe(1995);
    expect(roman('MCMXCIX')).toBe(1999);
  });
});
