```html
<section>
  <h3>Leading Checkbox {{ checkedValues }}</h3>
  <ui-list avatar class="demo-list demo-list">
    <ui-item v-for="(item, index) in items" :key="index" firstPlaceholder v-ripple>
      <template slot="before">
        <ui-checkbox noLabel
          v-model="checkedValues"
          :value="index"></ui-checkbox>
      </template>
      <label :for="`leading-${index}`">{{ item.text }}</label>
    </ui-item>
  </ui-list>
</section>

<section>
  <h3>Leading Radio Buttons ({{ checkedValue }})</h3>
  <ui-list avatar class="demo-list demo-list">
    <ui-item v-for="(item, index) in items" :key="index" firstPlaceholder v-ripple>
      <template slot="before">
        <ui-radio noLabel
          name="leading-radios"
          v-model="checkedValue"
          :value="index"></ui-radio>
      </template>
      <label :for="`leading-${index}`">{{ item.text }}</label>
    </ui-item>
  </ui-list>
</section>
```
