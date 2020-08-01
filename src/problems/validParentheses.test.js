import validParen from './validParentheses';

describe('validParentheses', () => {
  test('sample test', () => {
    expect(validParen('()')).toBe(true);
    expect(validParen('()[]{}')).toBe(true);
    expect(validParen('(]')).toBe(false);
    expect(validParen('([)]')).toBe(false);
    expect(validParen('{[]}')).toBe(true);
  });

  test('empty', () => {
    expect(validParen('')).toBe(true);
  });

  test('nested parens', () => {
    expect(validParen('(()[]{})')).toBe(true);
    expect(validParen('[((])]')).toBe(false);
    expect(validParen('[([)]]')).toBe(false);
    expect(validParen('{{[]}}')).toBe(true);
  });

  test('series of nested parens', () => {
    expect(validParen('(()[]{})()')).toBe(true);
    expect(validParen('[](()[]{})')).toBe(true);
    expect(validParen('[((])]{}')).toBe(false);
    expect(validParen('()[([)]]')).toBe(false);
    expect(validParen('{{[]}}{}')).toBe(true);
  });

  test('incomplete parens', () => {
    expect(validParen('(')).toBe(false);
    expect(validParen('}')).toBe(false);
    expect(validParen('[}]')).toBe(false);
  });
});
