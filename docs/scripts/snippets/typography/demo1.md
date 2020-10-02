```html
<h1 :class="$tt('headline1')">Headline 1</h1>
<h2 :class="$tt('headline2')">Headline 2</h2>
<h3 :class="$tt('headline3')">Headline 3</h3>
<h4 :class="$tt('headline4')">Headline 4</h4>
<h5 :class="$tt('headline5')">Headline 5</h5>
<h6 :class="$tt('headline6')">Headline 6</h6>

<div :class="$tt('subtitle1')">Subtitle 1</div>
<div :class="$tt('subtitle2')">Subtitle 2</div>

<div :class="$tt('body1')">
  Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur.
</div>
<div :class="$tt('body2')">
  Body 2 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur.
</div>

<div :class="$tt('button')">Button text</div>
<div :class="$tt('caption')">Caption text</div>
<div :class="$tt('overline')">Overline text</div>

<div :class="$tt('custom-style-1')">Custom style 1</div>
<div :class="$tt('custom-style-2')">Custom style 2</div>
```

```scss
.mdc-typography--custom-style-1 {
  color: red;
}

.mdc-typography--custom-style-2 {
  color: blue;
}
```

```js
// main.js

// `app`: Vue app
app.use(BalmUI, {
  $typography: ['custom-style-1', 'custom-style-2']
});
```
