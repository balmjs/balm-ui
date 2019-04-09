import { expect } from 'chai';
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

describe('Utilities: types', () => {
  it('`isBoolean`', () => {
    let isDone = false;

    expect(isBoolean(isDone)).to.be.true;
  });

  it('`isNumber`', () => {
    let decimal = 6;
    let hex = 0xf00d;
    let binary = 0b1010;
    let octal = 0o744;

    expect(isNumber(decimal)).to.be.true;
    expect(isNumber(hex)).to.be.true;
    expect(isNumber(binary)).to.be.true;
    expect(isNumber(octal)).to.be.true;
    expect(isNumber(NaN)).to.be.false;
  });

  it('`isString`', () => {
    let color = 'blue';

    expect(isString(color)).to.be.true;
  });

  it('`isArray`', () => {
    let list = [1, 2, 3];

    expect(isArray(list)).to.be.true;
  });

  it('`isFunction`', () => {
    function sum(a, b) {
      return a + b;
    }
    let GeneratorFunction = Object.getPrototypeOf(function*() {}).constructor;
    let g = new GeneratorFunction('a', 'yield a * 2');

    expect(isFunction(sum)).to.be.true;
    expect(isFunction(g)).to.be.true;
  });

  it('`isUndefined`', () => {
    let u = undefined;

    expect(isUndefined(u)).to.be.true;
  });

  it('`isNull`', () => {
    let n = null;

    expect(isNull(n)).to.be.true;
  });

  it('`isObject`', () => {
    let o = { prop: 0 };

    expect(isObject(o)).to.be.true;
    expect(isObject(null)).to.be.false;
    expect(isObject(42)).to.be.false;
    expect(isObject('string')).to.be.false;
    expect(isObject(undefined)).to.be.false;
  });

  it('`isSymbol`', () => {
    let s = Symbol();

    expect(isSymbol(s)).to.be.true;
  });
});
