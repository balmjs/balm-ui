type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

interface JSONObject {
  [key: string]: JSONValue;
}

export interface Types {
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

type MergeFunction = (target: object, source: object) => object;
type MergeAllFunction = (arrayOfObjects: object[]) => object;
type Merge =
  | MergeFunction
  | {
      all: MergeAllFunction;
    };

export interface Helpers {
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

export const detectIE: () => string | false;
