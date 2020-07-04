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

```js
types.getType(any);

types.isUndefined(value);
types.isNull(value);
types.isBoolean(value);
types.isNumber(value);
types.isString(value);
types.isSymbol(value);
types.isObject(value);
types.isArray(value);
types.isFunction(value);
```

> `getType` returns a string, others return a boolean.

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

```js
helpers.isEmpty(value);

helpers.jsonEqual(jsonA, jsonB); // The order of the properties IS IMPORTANT
helpers.isDeepEqual(obj1, obj2);

// New in 6.7.0
helpers.merge(target, source);
helpers.merge.all(arrayOfObjects);
```

- `isEmpty` - The following values are considered to be empty:
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

```js
detectIE();
```

> IE browser returns version, other browsers return `false`.
