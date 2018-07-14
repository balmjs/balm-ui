```html
<ui-toolbar>
  <ui-toolbar-row>
    <ui-toolbar-section fit align="start">
      <ui-tabs
        :items="tabs"
        v-model="active"></ui-tabs>
    </ui-toolbar-section>
  </ui-toolbar-row>
</ui-toolbar>

<section>
  <ui-panels class="panels" v-model="active">
    <ui-panel>Panel One</ui-panel>
    <ui-panel>Panel Two</ui-panel>
    <ui-panel>Panel Three</ui-panel>
  </ui-panels>
</section>
```
