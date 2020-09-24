<template>
  <docs-page name="divider" demo-count="2">
    <template #hero>
      <div class="hero-demo">
        <ui-divider v-show="withText" :type="typeOption">With Text</ui-divider>
        <ui-divider v-show="!withText" :type="typeOption"></ui-divider>
      </div>
      <div class="hero-options">
        <ui-form-field>
          <ui-checkbox id="divider-with-text" v-model="withText"></ui-checkbox>
          <label for="divider-with-text">With text</label>
        </ui-form-field>
        <ui-select
          v-model="typeOption"
          class="hero-option"
          :options="TypeOptions"
          >Type</ui-select
        >
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
      <div class="demo">
        <ui-divider></ui-divider>
      </div>
      <div class="demo">
        <ui-divider>Text</ui-divider>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Vertical divider with text</h6>
      <div class="demo">
        <ui-divider type="|" class="vertical-divider-demo">
          <template #left>
            <div class="block red"></div>
          </template>
          or
          <template #right>
            <div class="block blue"></div>
          </template>
        </ui-divider>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
import { reactive, toRefs } from 'vue';

const TypeOptions = [
  {
    label: 'Horizontal',
    value: 0
  },
  {
    label: 'Vertical',
    value: 1
  }
];

const state = reactive({
  withText: false,
  typeOption: 0
});

export default {
  metaInfo: {
    titleTemplate: '%s - Text Divider'
  },
  setup() {
    return {
      // hero
      TypeOptions,
      ...toRefs(state)
    };
  }
};
</script>
