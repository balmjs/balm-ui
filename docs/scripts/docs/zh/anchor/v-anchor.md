```html
<div v-anchor></div>
```

### 1. 设置锚点容器

- `v-anchor.bodyElement`: 自定义 HTML 容器（默认容器为 `<html>`）
- `v-anchor.html`: 启用 HTML 锚点（例如 markdown）
- `v-anchor.offset="offsetValue"`: 为页面滚动设置偏移量（在 `<html>` 或自定义容器上使用 `data-vanchor-offset` 属性设置全局偏移量）

> **offsetValue** 值为数字

```html
<html data-vanchor-offset="64">
  <!-- Anchors & Targets -->
</html>

<!-- 或 -->

<div class="container" v-anchor.offset="64">
  <!-- Anchors & Targets -->
</div>
```

### 2. 设置锚点和目标

- `v-anchor:href`
- `v-anchor:id`

#### 2.1 默认用法

```html
<div v-anchor:href="'#target1'">Anchor 1</div>
<div v-anchor:href="'#target2'">Anchor 2</div>

<div v-anchor:id="'target1'">Target 1</div>
<div v-anchor:id="'target2'">Target 2</div>
```

#### 2.2 HTML 用法

- 设置锚点 `class="v-anchor" data-href="selector"`
- 设置目标 `id` 或唯一的 `class`

```html
<div v-anchor.html>
  <div class="v-anchor" data-href="#target1">Anchor 1</div>
  <div class="v-anchor" data-href="#target2">Anchor 2</div>

  <div id="target1">Target 3</div>
  <div id="target2">Target 4</div>
</div>
```
