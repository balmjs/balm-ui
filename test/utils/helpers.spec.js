import { isEmpty, jsonEqual, isDeepEqual } from '@/utils/helpers';

describe('Utilities: helpers', () => {
  // `isEmpty`
  it('`""`(an empty string) is empty', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('`0`(0 as an integer) is empty', () => {
    expect(isEmpty(0)).toBe(true);
  });

  it('`0.0`(0 as a float) is empty', () => {
    expect(isEmpty(0.0)).toBe(true);
  });

  it('`"0"`(0 as a string) is empty', () => {
    expect(isEmpty('0')).toBe(true);
  });

  it('`null` is empty', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('`false` is empty', () => {
    expect(isEmpty(false)).toBe(true);
  });

  it('`[]`(an empty array) is empty', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('`{}`(an empty object) is empty', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('An empty Map or Set is empty', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  // `jsonEqual`
  it('Two JSON data is equal', () => {
    let a = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    let b = { a: 1, b: 2, c: 3, d: 4, e: 5 };

    expect(jsonEqual(a, b)).toBe(true);
  });

  it('Two JSON data is not equal', () => {
    let a = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    let b = { e: 5, d: 4, c: 3, b: 2, a: 1 };

    expect(jsonEqual(a, b)).toBe(false);
  });

  // `isDeepEqual`
  it('Two JSON data is deep equal', () => {
    let a = 1;
    let b = 1;
    let fn1 = new Function('a', 'b', 'return a + b');
    let fn2 = new Function('a', 'b', 'return a + b');
    let date1 = new Date('December 17, 1995 03:24:00');
    let date2 = new Date('1995-12-17T03:24:00');
    let obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    let obj2 = { e: 5, d: 4, c: 3, b: 2, a: 1 };

    if (DEBUG) {
      console.log('[OUTPUT]:', '\n', fn1.toString(), '\n', fn2.toString());
    }

    expect(isDeepEqual(a, b)).toBe(true);
    expect(isDeepEqual(fn1, fn2)).toBe(true); // Just for anonymous function
    expect(isDeepEqual(date1, date2)).toBe(true);
    expect(isDeepEqual(obj1, obj2)).toBe(true);
    expect(isDeepEqual(obj1, obj2, true)).toBe(true);
  });
});
