```html
<div v-anchor></div>
```

#### 1. Set Container

- `v-anchor.bodyElement`: custom html contianer (Default contianer is `<html>`)
- `v-anchor.html`: for html (e.g. markdown)
- `v-anchor.offset="offsetValue"`: set offset for scrollTop (Use `data-vanchor-offset` in `<html>` & `<body>` element)

> **offsetValue** is a number

```html
<html data-vanchor-offset="64">
  <!-- Anchors & Targets -->
</html>

<!-- OR -->

<div class="container" v-anchor.offset="64">
  <!-- Anchors & Targets -->
</div>
```

#### 2. Set Anchors & Targets

- `v-anchor:href`
- `v-anchor:id`

**2.1 Default Usage**

```html
<div v-anchor:href="'#target1'">Anchor 1</div>
<div v-anchor:href="'#target2'">Anchor 2</div>

<div v-anchor:id="'target1'">Target 1</div>
<div v-anchor:id="'target2'">Target 2</div>
```

**2.2 HTML Usage**

- `class="v-anchor" data-href="selector"`
- `id` or unique `class` attribute

```html
<div v-anchor.html>
  <div class="v-anchor" data-href="#target1">Anchor 1</div>
  <div class="v-anchor" data-href="#target2">Anchor 2</div>

  <div id="target1">Target 3</div>
  <div id="target2">Target 4</div>
</div>
```
