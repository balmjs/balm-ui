# Utilities

## 1. Types

Default Usage

```js
import { types } from 'balm-ui';
```

Individual Usage

```js
import types from 'balm-ui/utils/types';
```

Methods

```ts
types.getType(any): string;

types.isUndefined(value): boolean;
types.isNull(value): boolean;
types.isBoolean(value): boolean;
types.isNumber(value): boolean;
types.isString(value): boolean;
types.isSymbol(value): boolean;
types.isObject(value): boolean;
types.isArray(value): boolean;
types.isFunction(value): boolean;
```

## 2. Helpers

Default Usage

```js
import { helpers } from 'balm-ui';
```

Individual Usage

```js
import helpers from 'balm-ui/utils/helpers';
```

Methods

```ts
helpers.isEmpty(value): boolean;

helpers.jsonEqual(jsonA, jsonB): boolean; // The order of the properties IS IMPORTANT
helpers.isDeepEqual(obj1, obj2): boolean;

// New in 6.7.0
helpers.merge(target: object, source: object): object;
helpers.merge.all(arrayOfObjects: object[]): object;

// New in 8.38.0
helpers.toCamelCase(str: string): string;
helpers.toCapitalize(str: string): string;
```

- `isEmpty` The following values are considered to be empty:
  - `undefined`
  - `null`
  - `false`
  - `0`
  - `''`
  - `'0'`
  - `{}`
  - `[]`
  - an empty `map` or `set`

## 3. IE

Default Usage

```js
import { detectIE } from 'balm-ui';
```

Individual Usage

```js
import detectIE from 'balm-ui/utils/ie';
```

Methods

```ts
detectIE(): string | false;
```

> IE browser returns version, other browsers return `false`.
