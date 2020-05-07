<template>
  <ui-page-structure name="button" demoCount="1">
    <template #hero>
      <div class="hero-demo">
        <ui-button :type="typeOption" v-a11y>{{ text }}</ui-button>
      </div>
      <div class="hero-options">
        <ui-select
          class="hero-option"
          :options="TypeOptions"
          v-model="typeOption"
          >Type</ui-select
        >
        <ui-textfield class="hero-option" v-model="text">
          Button Text
        </ui-textfield>
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo-controls">
        <ui-form-field>
          <ui-checkbox
            id="toggle-disabled"
            v-model="controls.disabled"
          ></ui-checkbox>
          <label for="toggle-disabled"
            >Disabled buttons (excluding links)</label
          >
        </ui-form-field>
      </div>

      <div class="example">
        <ui-button :disabled="controls.disabled">Text</ui-button>
        <ui-button outlined :disabled="controls.disabled">Outlined</ui-button>
        <ui-button raised :disabled="controls.disabled">Raised</ui-button>

        <ui-button icon="favorite" :disabled="controls.disabled"
          >Icon</ui-button
        >
        <ui-button :disabled="controls.disabled">
          Trailing Icon
          <template #after="{ iconClass }">
            <svg-logo :class="iconClass"></svg-logo>
          </template>
        </ui-button>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </ui-page-structure>
</template>

<script>
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

export default {
  metaInfo: {
    titleTemplate: '%s - Button'
  },
  data() {
    return {
      // hero
      TypeOptions,
      typeOption: 0,
      text: 'Button',
      // demo
      controls: {
        disabled: false
      }
    };
  }
};
</script>
