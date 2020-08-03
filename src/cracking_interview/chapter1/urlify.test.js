import { urlify } from './urlify';

describe('urlify', () => {
  test('sample test', () => {
    expect(urlify('Mr John Smith   ')).toEqual('Mr%20John%20Smith');
  });

  test('empty', () => {
    expect(urlify('')).toEqual('');
    expect(urlify('   ')).toEqual('');
  });

  test('normal string', () => {
    expect(urlify('hello')).toEqual('hello');
    expect(urlify('hello world')).toEqual('hello%20world');
  });

  test('extra spacing', () => {
    expect(urlify('hello  world')).toEqual('hello%20world');
    expect(urlify('hello  world  ')).toEqual('hello%20world');
    expect(urlify('  hello  world')).toEqual('hello%20world');
    expect(urlify('  hello  world  ')).toEqual('hello%20world');
  });
});
