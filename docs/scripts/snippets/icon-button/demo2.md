```html
<!-- Using Material Icons -->
<ui-icon-button v-model="value1" :toggle="icon1"> </ui-icon-button>

<!-- Using Font Awesome -->
<ui-icon-button v-model="value2">
  <template #default="{ onClass, offClass }">
    <i :class="[onClass, icon2.on]"></i>
    <i :class="[offClass, icon2.off]"></i>
  </template>
</ui-icon-button>

<!-- Using SVG Icons -->
<ui-icon-button>
  <template #default="{ onClass, offClass }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      :class="onClass"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      :class="offClass"
    >
      <path
        d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      />
    </svg>
  </template>
</ui-icon-button>

<!-- Using Image Icons -->
<ui-icon-button>
  <template #default="{ onClass, offClass }">
    <img src="/path/to/image1.png" :class="onClass" />
    <img src="/path/to/image2.png" :class="offClass" />
  </template>
</ui-icon-button>

<!-- Disabled Icons -->
<ui-icon-button :toggle="icon1" disabled></ui-icon-button>
```

```js
export default {
  data() {
    return {
      value1: false,
      icon1: {
        on: 'favorite',
        off: 'favorite_border'
      },
      value2: true,
      icon2: {
        on: 'fa fa-star',
        off: 'fa fa-star-o'
      }
    };
  }
};
```
