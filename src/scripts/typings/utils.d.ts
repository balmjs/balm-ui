import deepmerge = require('deepmerge');

declare type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

declare interface JSONObject {
  [key: string]: JSONValue;
}

export declare interface Types {
  getType: (any: unknown) => string;

  isUndefined: (value: unknown) => boolean;
  isNull: (value: unknown) => boolean;
  isBoolean: (value: unknown) => boolean;
  isNumber: (value: unknown) => boolean;
  isString: (value: unknown) => boolean;
  isSymbol: (value: unknown) => boolean;
  isObject: (value: unknown) => boolean;
  isArray: (value: unknown) => boolean;
  isFunction: (value: unknown) => boolean;
}

declare type Merge = typeof deepmerge;

export declare interface Helpers {
  isEmpty: (value: unknown) => boolean;

  jsonEqual: (a: JSONObject, b: JSONObject) => boolean;
  isDeepEqual: (
    obj1: object,
    obj2: object,
    testPrototypes?: boolean
  ) => boolean;

  merge: Merge;

  toCamelCase: (str: string) => string;
  toCapitalize: (str: string) => string;
}

export declare function detectIE(): number | false;
