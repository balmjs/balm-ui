```html
<div class="demo">
  <ui-tab-scroller
    ref="scroller"
    v-model="value"
    class="demo-scroller"
    @change="balmUI.onChange('scrollValue', $event)"
  >
    <span v-for="i in 32" :key="i" class="demo-cube"></span>
  </ui-tab-scroller>
</div>

<div class="demo-controller">
  <div class="demo-controller-row">
    <label for="id0">Scroll to</label>
    <input
      id="id0"
      v-model="scrollValue"
      class="demo-scroll-value"
      type="number"
      name="scrollLeft"
    />
    <button type="submit" @click="balmUI.onChange('value', +scrollValue)">
      Scroll
    </button>
  </div>
  <div class="demo-controller-row">
    <button
      type="button"
      class="demo-decrement"
      @click="$refs.scroller.increment(-50)"
    >
      -50
    </button>
    <button
      type="button"
      class="demo-increment"
      @click="$refs.scroller.increment(+50)"
    >
      +50
    </button>
  </div>
</div>
```

- using Composable API

  ```js
  import { reactive, toRefs } from 'vue';
  import { useEvent } from 'balm-ui';

  const state = reactive({
    value: 0,
    scrollValue: 0
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
        value: 0,
        scrollValue: 0
      };
    }
  };
  ```
