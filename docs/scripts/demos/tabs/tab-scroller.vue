<template>
  <section class="demo-wrapper">
    <h6 :class="$tt('headline6')">1.3 Tab Scroller</h6>

    <div class="demo">
      <ui-tab-scroller
        ref="scroller"
        v-model:scrollX="value"
        class="demo-scroller"
        @update:scroll-x="balmUI.onChange('scrollValue', $event)"
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
    <ui-snippet :code="$store.demos[8]"></ui-snippet>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useEvent } from 'balm-ui';

const state = reactive({
  value: 0,
  scrollValue: 0
});

export default {
  // Composition API
  setup() {
    const balmUI = useEvent();

    return {
      balmUI,
      ...toRefs(state)
    };
  }
  // Options API
  // data() {
  //   return {
  //     balmUI: useEvent(),
  //     value: 0,
  //     scrollValue: 0
  //   };
  // }
};
</script>
