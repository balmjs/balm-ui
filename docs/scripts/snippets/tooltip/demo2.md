```html
<ui-button data-tooltip-id="tooltip-demo-2">Hello</ui-button>
<ui-tooltip-anchor>
  <ui-tooltip id="tooltip-demo-2" rich>
    <template #title>Lorem Ipsum</template>
    <template #default="{ linkClass }">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium
      vitae est et dapibus. Aenean sit amet felis eu lorem fermentum aliquam sit
      amet sit amet eros.
      <a :class="linkClass">link</a>
    </template>
  </ui-tooltip>
</ui-tooltip-anchor>
```
