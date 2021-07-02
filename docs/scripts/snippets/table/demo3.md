```html
<ui-table
  :data="data"
  :thead="thead"
  :tbody="tbody"
  :tfoot="tfoot"
  :default-col-width="200"
  :scroll="{ x: 1600, y: 300 }"
  style="max-width: 800px"
></ui-table>
```

```js
export default {
  data() {
    return {
      thead: [
        'title1',
        'title2',
        'title3',
        'title4',
        'title5',
        'title6',
        'title7',
        'title8',
        'title9',
        'title10',
        'title11',
        'title12'
      ],
      tbody: [
        {
          field: 'a',
          width: 80,
          fixed: 'left'
        },
        {
          field: 'b',
          width: 100
          // fixed: 'left'
        },
        {
          field: 'c',
          width: 100
        },
        {
          field: 'c',
          width: 100
        },
        {
          field: 'c',
          width: 100
        },
        {
          field: 'c'
        },
        {
          field: 'c'
        },
        {
          field: 'c'
        },
        {
          field: 'c'
        },
        {
          field: 'c',
          width: 100
        },
        {
          field: 'b',
          width: 100
          // fixed: 'right'
        },
        {
          field: 'b',
          width: 80,
          fixed: 'right'
        }
      ],
      tfoot: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 10 },
        { value: 11 },
        { value: 12 }
      ],
      data: []
    };
  },
  created() {
    this.data = [
      { a: 'aaa', b: 'bbb', c: 'ContentContentContent', d: 3, key: '1' },
      { a: 'aaa', b: 'bbb', c: 'ContentContentContent', d: 3, key: '2' },
      { a: 'aaa', c: 'ContentContentContent', d: 2, key: '3' },
      { a: 'aaa', c: 'ContentContentContent', d: 2, key: '4' },
      { a: 'aaa', c: 'ContentContentContent', d: 2, key: '5' },
      { a: 'aaa', c: 'ContentContentContent', d: 2, key: '6' },
      { a: 'aaa', c: 'ContentContentContent', d: 2, key: '7' },
      { a: 'aaa', c: 'ContentContentContent', d: 2, key: '8' },
      { a: 'aaa', c: 'ContentContentContent', d: 2, key: '9' },
      { a: 'aaa', b: 'bbb', c: 'ContentContentContent', d: 3, key: '10' },
      { a: 'aaa', b: 'bbb', c: 'ContentContentContent', d: 3, key: '11' },
      { a: 'aaa', b: 'bbb', c: 'ContentContentContent', d: 3, key: '12' }
    ];
  }
};
```
