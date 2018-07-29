```html
<div>
  <label>Pick a Food Group:</label>
  <ui-dropdown
    v-model="selected.value"
    :selectedIndex="selected.index"
    :options="options"
    defaultLabel="All"
    :defaultValue="0"
    @selected="$balmUI.onChange('selected', $event)">
  </ui-dropdown>

  <ui-button raised
    @click="$balmUI.onChange('selected.index', 0)">
    Set Selected Index (0)
  </ui-button>
  <ui-button raised
    @click="$balmUI.onChange('selected.value', 'meat')">
    Set Value to Meat
  </ui-button>
</div>
```
