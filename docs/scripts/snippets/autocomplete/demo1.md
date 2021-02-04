```html
<ui-autocomplete
  v-model="keywords"
  :source="source"
  placeholder="Try to type"
></ui-autocomplete>
```

```js
export default {
  data() {
    return {
      keywords: '',
      source: [
        'ActionScript',
        'AppleScript',
        'Asp',
        'BASIC',
        'C',
        'C++',
        'Clojure',
        'COBOL',
        'ColdFusion',
        'Erlang',
        'Fortran',
        'Groovy',
        'Haskell',
        'Java',
        'JavaScript',
        'Lisp',
        'Perl',
        'PHP',
        'Python',
        'Ruby',
        'Scala',
        'Scheme'
      ]
    };
  }
};
```
