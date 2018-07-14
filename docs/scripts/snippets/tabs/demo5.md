```html
<ui-toolbar>
  <ui-toolbar-row>
    <ui-toolbar-section fit align="start">
      <ui-toolbar-title>Title</ui-toolbar-title>
    </ui-toolbar-section>
    <ui-toolbar-section align="end">
      <div>
        <ui-tab-bar v-model="active" class="custom-tab-bar-in-toolbar">
          <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
            {{ tab.label }}
          </ui-tab>
        </ui-tab-bar>
      </div>
    </ui-toolbar-section>
  </ui-toolbar-row>
</ui-toolbar>
```
