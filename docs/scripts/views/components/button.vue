<template>
  <docs-page name="button" :apis="['button', 'v-button']" demo-count="1">
    <template #hero>
      <div class="hero-demo">
        <ui-button v-a11y :type="typeOption">{{ text }}</ui-button>
      </div>
      <div class="hero-options">
        <ui-select
          v-model="typeOption"
          class="hero-option"
          :options="TypeOptions"
        >
          Type
        </ui-select>
        <ui-textfield v-model="text" class="hero-option">
          Button Text
        </ui-textfield>
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo-controls">
        <ui-form-field>
          <ui-checkbox
            v-model="disabled"
            input-id="toggle-disabled"
          ></ui-checkbox>
          <label for="toggle-disabled">Disabled buttons</label>
        </ui-form-field>
      </div>

      <div class="demo">
        <ui-button :disabled="disabled">Text</ui-button>
        <ui-button outlined :disabled="disabled">Outlined</ui-button>
        <ui-button raised :disabled="disabled">Raised</ui-button>

        <ui-button icon="favorite" :disabled="disabled">Icon</ui-button>
        <ui-button :disabled="disabled">
          Trailing Icon
          <template #after="{ iconClass }">
            <svg-logo :class="iconClass"></svg-logo>
          </template>
        </ui-button>

        <a v-button href="javascript:void(0)">Link</a>
        <router-link v-button :to="{ name: 'general.button' }">
          Router Link
        </router-link>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
import { reactive, toRefs } from 'vue';

const TypeOptions = [
  {
    label: 'Text',
    value: 0
  },
  {
    label: 'Outlined',
    value: 1
  },
  {
    label: 'Raised',
    value: 2
  },
  {
    label: 'Unelevated',
    value: 3
  }
];

const state = reactive({
  // hero
  typeOption: 0,
  text: 'Button',
  // demo
  disabled: false
});

export default {
  metaInfo: {
    titleTemplate: '%s - Button'
  },
  setup() {
    return {
      TypeOptions,
      ...toRefs(state)
    };
  }
};
</script>
