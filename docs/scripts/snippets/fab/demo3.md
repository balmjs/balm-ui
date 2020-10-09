```html
<div class="fab-motion-container">
  <div class="fab-motion-container__view">
    <p>View one (with FAB)</p>
  </div>
  <div
    class="fab-motion-container__view"
    :class="{'fab-motion-container__view--exited': !exited}"
  >
    <p>View two (without FAB)</p>
    <p>
      <ui-button
        id="enter-exit-back"
        :disabled="!exited"
        @click="balmUI.onHide('exited')"
        >Go back</ui-button
      >
    </p>
  </div>
  <ui-fab
    id="enter-exit-add"
    class="demo-absolute-fab"
    icon="add"
    :exited="exited"
    @click="balmUI.onShow('exited')"
    >add</ui-fab
  >
</div>
```

- using Composable API

  ```js
  import { reactive, toRefs } from 'vue';
  import { useEvent } from 'balm-ui';

  const state = reactive({
    exited: false
  });

  export default {
    setup() {
      const balmUI = useEvent();

      return {
        balmUI,
        ...toRefs(state)
      };
    }
  };
  ```

- using Legacy API

  ```js
  import { useEvent } from 'balm-ui';

  export default {
    data() {
      return {
        balmUI: useEvent(),
        exited: false
      };
    }
  };
  ```

```css
.demo-absolute-fab {
  position: absolute;
  z-index: 1;
  right: 1rem;
  bottom: 1rem;
}

.fab-motion-container {
  position: relative;
  overflow: hidden;
  width: 20rem;
  height: 10rem;
  margin: 1rem;
  padding: 0 1rem;
  border: 1px solid #ccc;
}

.fab-motion-container__view {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transition: transform 375ms cubic-bezier(0, 0, 0.2, 1);
  background-color: #fff;
  will-change: transform;
}

.fab-motion-container__view--exited {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transform: translateY(100%);
}
```
