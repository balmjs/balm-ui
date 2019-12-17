```html
<ui-list :type="2" avatar>
  <template v-for="(item, index) in items">
    <ui-item-divider v-if="item === '-'" :key="index"></ui-item-divider>
    <ui-item v-else :key="index">
      <template #before="{ iconClass }">
        <ui-icon :class="iconClass">folder</ui-icon>
      </template>
      <ui-item-text-content>
        <ui-item-text1>{{ item.text }}</ui-item-text1>
        <ui-item-text2>{{ item.subtext }}</ui-item-text2>
      </ui-item-text-content>
      <ui-item-last-content>
        <ui-icon>info</ui-icon>
      </ui-item-last-content>
    </ui-item>
  </template>
</ui-list>
```
