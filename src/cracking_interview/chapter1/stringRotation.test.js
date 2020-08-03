import { isRotation } from './stringRotation';

describe('stringRotation', () => {
  test('empty', () => {
    expect(isRotation('', '')).toBe(true);
  });

  test('waterbottle', () => {
    expect(isRotation('waterbottle', 'erbottlewat')).toBe(true);
    expect(isRotation('waterbottle', 'erbottlewa')).toBe(false);
  });

  test('no rotation', () => {
    expect(isRotation('waterbottle', 'waterbottle')).toBe(true);
  });
});
