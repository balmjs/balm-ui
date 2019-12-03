<template>
  <section class="example">
    <h5 :class="$tt('headline4')">1.3 Tab Scroller</h5>

    <div class="demo">
      <ui-tab-scroller
        ref="scroller"
        class="demo-scroller"
        v-model="value"
        @change="$balmUI.onChange('scrollValue', $event)"
      >
        <span v-for="i in 32" :key="i" class="demo-cube"></span>
      </ui-tab-scroller>
    </div>
    <div class="demo-controller">
      <div class="demo-controller-row">
        <label for="id0">Scroll to</label>
        <input
          id="id0"
          class="demo-scroll-value"
          type="number"
          name="scrollLeft"
          v-model="scrollValue"
        />
        <button type="submit" @click="$balmUI.onChange('value', +scrollValue)">
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
    <ui-accordion>
      <ui-markdown :text="code[8]"></ui-markdown>
    </ui-accordion>
  </section>
</template>

<script>
export default {
  props: {
    code: Array
  },
  data() {
    return {
      value: 0,
      scrollValue: 0
    };
  }
};
</script>
