# 升级向导

- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-10">从 9.x 升级到 10.0</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-9_27">从 9.x 升级到 9.27.0+</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-9">从 8.x 升级到 9.0</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-8">从 7.x 升级到 8.0</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-7">从 6.x 升级到 7.0</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-6">从 5.x 升级到 6.0</a>

<div id="up-to-10"></div>

## 从 9.x 升级到 10.0

### BREAKING CHANGES

#### Props

- `<ui-chips>`: 重命名属性 `chips` 为 `items`

<div id="up-to-9_27"></div>

## 从 9.x 升级到 9.27.0+

### BREAKING CHANGES

- 组件平移: 移动 `UiAutocomplete`, `UiDatepicker`, `UiRangepicker` 从 `balm-ui-plus.js` 到 `balm-ui.js` 库
- 插件平移: 移动 `$alert`, `$confirm`, `$toast` 从 `balm-ui-plus.js` 到 `balm-ui.js` 库

<div id="up-to-9"></div>

## 从 8.x 升级到 9.0

### BREAKING CHANGES

#### Props

- `<ui-icon-button>`, `<ui-textfield>`, `<ui-autocomplete>`, `<ui-editor>`, `<ui-select>`, `<ui-checkbox>`, `<ui-radio>`, `<ui-chips>`, `<ui-datepicker>`, `<ui-rangepicker>`, `<ui-switch>`, `<ui-slider>`: 重命名属性 `model` 为 `modelValue`
- `<ui-drawer>`, `<ui-menu>`: 重命名属性 `open` 为 `modelValue`
- `<ui-tab-bar>`, `<ui-tabs>`: 重命名属性 `active` 为 `modelValue`
- `<ui-pagination>`: 重命名属性 `page` 为 `modelValue`
- `<ui-textfield>`, `<ui-autocomplete>`, `<ui-checkbox>`, `<ui-radio>`, `<ui-file>`, `<ui-datepicker>`, `<ui-switch>`: 重命名属性 `id` 为 `inputId`

#### Events

- `<ui-icon-button>`, `<ui-drawer>`, `<ui-tab-bar>`, `<ui-tabs>`, `<ui-menu>`, `<ui-pagination>`, `<ui-editor>`, `<ui-select>`, `<ui-checkbox>`, `<ui-radio>`, `<ui-chips>`, `<ui-datepicker>`, `<ui-rangepicker>`, `<ui-switch>`, `<ui-slider>`: 事件属性 `@change` 为 `@update:modelValue`
- `<ui-textfield>`, `<ui-autocomplete>`: 事件属性 `@input` 为 `@update:modelValue`

<div id="up-to-8"></div>

## 从 7.x 升级到 8.0

### Features

- 新组件:
  - `<ui-banner>`
  - `<ui-tooltip>`
  - `<ui-nav-item>`
- 新插件:
  - `$bus`
  - `$store`
- `$theme`: 全新的主题 APIs
- `v-shape`: 全新的形状 APIs
- `<ui-menuitem>`: 新增属性 `value`
- `<ui-form>`: 新增属性 `itemMarginBottom`, `labelWidth`, `labelMarginRight`, `labelMarginBottom`
- Sass: 复写变量更简洁

  - 旧的

    ```scss
    @use '@material/button/variables';
    ```

  - 新的

    ```scss
    @use '@material/button';
    ```

### BREAKING CHANGES

- `$themeColor`, `$setTheme`, `$textColor`, `$setTextTheme`: 已弃用。使用 `$theme` 代替
- `<ui-slider>`: 重命名属性 `displayMarker` 为 `withTickMarks`
- `<ui-pagination>`:
  - 移除插槽属性 `before`, `before-jumper` 和 `after-jumper`
  - 新增插槽属性 `first` 和 `last`
- `<ui-nav>`: 移除插槽属性 `itemClass`, `activeClass`。使用新组件 `<ui-nav-item>`

<div id="up-to-7"></div>

## 从 6.x 升级到 7.0

### BREAKING CHANGES

- `<ui-table>`: thead 自定义对象中的 `by` 字段重命名为 `columnId`

<div id="up-to-6"></div>

## 从 5.x 升级到 6.0

### Features

- `<ui-drawer>`: 新增属性 `viewportHeight`
- `<ui-menu>`, `<ui-select>`: 各新增属性 `fullwidth`
- `<ui-textfield>`: 新增属性 `prefixText`, `suffixText`, `endAligned`, `withCounter`
- `v-anchor`: 新增修饰符 `bodyElement`

### BREAKING CHANGES

- 弃用组件:
  - `<ui-a>`
  - `<ui-icon-a>`
- `<ui-nav>`: 重命名插槽属性 `activatedClass` 为 `activeClass`
- `<ui-textfield>`: 移除属性 `dense`
- `<ui-textfield-helper>`: 重命名属性 `counter` 为 `withCounter`
- `<ui-textfield-counter>`: 移除组件。使用 `<ui-textfield-helper withCounter>` 或 `<ui-textfield withCounter>` 来代替
