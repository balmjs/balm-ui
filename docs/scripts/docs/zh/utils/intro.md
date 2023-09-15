# 常用工具库

## 1. 类型检测

默认用法

```js
import { types } from 'balm-ui';
```

独立用法

```js
import types from 'balm-ui/utils/types';
```

方法

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

独立用法

```js
import { helpers } from 'balm-ui';
```

独立用法

```js
import helpers from 'balm-ui/utils/helpers';
```

方法

```ts
helpers.isEmpty(value): boolean;

helpers.jsonEqual(jsonA, jsonB): boolean; // 属性的顺序很重要
helpers.isDeepEqual(obj1, obj2): boolean;

helpers.merge(target: object, source: object): object;
helpers.merge.all(arrayOfObjects: object[]): object;

// New in 9.28.0
helpers.toCamelCase(str: string): string;
helpers.toCapitalize(str: string): string;
```

- `isEmpty` 以下值被认为是空值：
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

独立用法

```js
import { detectIE } from 'balm-ui';
```

独立用法

```js
import detectIE from 'balm-ui/utils/ie';
```

方法

```ts
detectIE(): number | false;
```

> IE 浏览器返回版本号，其他浏览器返回 `false`

## 4. Ban debugger

> New in 10.23.0

默认用法

```js
import { ban } from 'balm-ui';
```

独立用法

```js
import ban from 'balm-ui/utils/ban';
```

方法

```ts
ban(): void;
```
