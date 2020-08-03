import { compress } from './stringCompression';

describe('stringCompression', () => {
  test('empty', () => {
    expect(compress('')).toEqual('');
  });

  test('length 1', () => {
    expect(compress('a')).toEqual('a');
  });

  test('length 2', () => {
    expect(compress('aa')).toEqual('aa');
    expect(compress('ab')).toEqual('ab');
  });

  test('length 3', () => {
    expect(compress('aaa')).toEqual('a3');
    expect(compress('aab')).toEqual('aab');
    expect(compress('abc')).toEqual('abc');
  });

  test('length 4', () => {
    expect(compress('aaaa')).toEqual('a4');
    expect(compress('aaab')).toEqual('aaab');
    expect(compress('abbb')).toEqual('abbb');
    expect(compress('aabb')).toEqual('aabb');
    expect(compress('aabc')).toEqual('aabc');
  });

  test('length 5', () => {
    expect(compress('aaaaa')).toEqual('a5');
    expect(compress('aaaab')).toEqual('a4b1');
    expect(compress('abbbb')).toEqual('a1b4');
    expect(compress('aaabb')).toEqual('a3b2');
    expect(compress('aabcc')).toEqual('aabcc');
  });

  test('long string', () => {
    expect(compress('aabcccccaaa')).toEqual('a2b1c5a3');
    expect(compress('abcdef')).toEqual('abcdef');
    expect(compress('abbcdef')).toEqual('abbcdef');
    expect(compress('abbcccccf')).toEqual('a1b2c5f1');
  });
});
