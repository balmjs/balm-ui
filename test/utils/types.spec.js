import {
  isUndefined,
  isNull,
  isBoolean,
  isNumber,
  isString,
  isSymbol,
  isObject,
  isArray,
  isFunction
} from '@/utils/types';

describe('Utilities', () => {
  it('`isBoolean`', () => {
    let isDone = false;

    expect(isBoolean(isDone)).toBe(true);
  });

  it('`isNumber`', () => {
    let decimal = 6;
    let hex = 0xf00d;
    let binary = 0b1010;
    let octal = 0o744;

    expect(isNumber(decimal)).toBe(true);
    expect(isNumber(hex)).toBe(true);
    expect(isNumber(binary)).toBe(true);
    expect(isNumber(octal)).toBe(true);
    expect(isNumber(NaN)).toBe(false);
  });

  it('`isString`', () => {
    let color = 'blue';

    expect(isString(color)).toBe(true);
  });

  it('`isArray`', () => {
    let list = [1, 2, 3];

    expect(isArray(list)).toBe(true);
  });

  it('`isFunction`', () => {
    function warnUser() {
      console.log('This is my warning message');
    }

    expect(isFunction(warnUser)).toBe(true);
  });

  it('`isUndefined`', () => {
    let u = undefined;

    expect(isUndefined(u)).toBe(true);
  });

  it('`isNull`', () => {
    let n = null;

    expect(isNull(n)).toBe(true);
  });

  it('`isObject`', () => {
    let o = { prop: 0 };

    expect(isObject(o)).toBe(true);
    expect(isObject(null)).toBe(false);
    expect(isObject(42)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });

  // it('`isSymbol`', () => {
  //   let s = new Symbol();

  //   expect(isSymbol(s)).toBe(true);
  // });
});
