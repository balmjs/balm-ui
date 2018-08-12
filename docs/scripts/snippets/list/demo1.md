```html
<ui-list-group class="demo-list-group--custom">
  <ui-list-group-subheader>Folders</ui-list-group-subheader>
  <ui-list twoLine avatar class="demo-list demo-list--with-avatars demo-list--custom demo-list--icon-placeholders">
    <ui-item v-for="(item, index) in folders"
      :key="index"
      :firstIcon="item.first"
      :lastIcon="item.last">
      <ui-item-text>{{ item.text }}</ui-item-text>
      <ui-item-subtext>{{ item.subtext }}</ui-item-subtext>
    </ui-item>
  </ui-list>

  <ui-list-divider inset></ui-list-divider>

  <ui-list-group-subheader>Files</ui-list-group-subheader>
  <ui-list twoLine avatar class="demo-list demo-list--with-avatars demo-list--custom demo-list--icon-placeholders">
    <ui-item v-for="(item, index) in files"
      :key="index"
      :firstIcon="item.first"
      :lastIcon="item.last">
      <ui-item-text>{{ item.text }}</ui-item-text>
      <ui-item-subtext>{{ item.subtext }}</ui-item-subtext>
    </ui-item>
  </ui-list>
</ui-list-group>
```
