<template>
  <div :class="[$tt('body1'), 'demo--slider']">
    <header class="hero component">
      <ui-form-field id="hero-slider-wrapper" block>
        <ui-icon>volume_mute</ui-icon>
        <ui-slider
          ref="slider"
          id="hero-slider"
          max="100"
          v-model="value"
          label="Select Volume"
        ></ui-slider>
        <ui-icon>volume_up</ui-icon>
      </ui-form-field>
      <div>{{ value }}</div>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <section id="slider-example" class="example">
        <h2>Continuous Slider</h2>
        <div class="slider-example">
          <div
            :class="[
              'example-slider-wrapper',
              { 'custom-bg': controls.customColor }
            ]"
          >
            <ui-slider
              id="continuous-mdc-slider"
              :min="min"
              :max="max"
              :step="step"
              v-model="value1"
              :disabled="controls.disabled"
              @input="onInput"
              @change="onChange"
            ></ui-slider>
          </div>
          <p>Value: {{ value1 }}</p>
        </div>

        <h2>Discrete Slider</h2>
        <div class="slider-example">
          <div
            :class="[
              'example-slider-wrapper',
              { 'custom-bg': controls.customColor }
            ]"
          >
            <ui-slider
              id="discrete-mdc-slider"
              type="discrete"
              :min="min"
              :max="max"
              :step="step"
              v-model="value2"
              :disabled="controls.disabled"
              label="Select Value"
            ></ui-slider>
          </div>
          <p>Value: {{ value2 }}</p>
        </div>

        <h2>Discrete Slider with Tick Marks</h2>
        <div class="slider-example">
          <div
            :class="[
              'example-slider-wrapper',
              { 'custom-bg': controls.customColor }
            ]"
          >
            <ui-slider
              id="discrete-mdc-slider-w-marker"
              type="discrete"
              displayMarker
              :min="min"
              :max="max"
              :step="step"
              v-model="value3"
              :disabled="controls.disabled"
              label="Select Value"
            ></ui-slider>
          </div>
          <p>Value: {{ value3 }}</p>
        </div>

        <h2>Custom Colored Discrete Slider with Tick Marks</h2>
        <div class="slider-example">
          <div
            :class="[
              'example-slider-wrapper',
              { 'custom-bg': controls.customColor }
            ]"
          >
            <ui-slider
              id="custom-discrete-mdc-slider-w-marker"
              type="discrete"
              displayMarker
              class="demo-slider--custom"
              :min="min"
              :max="max"
              :step="step"
              v-model="value4"
              :disabled="controls.disabled"
              label="Select Value"
            ></ui-slider>
          </div>
          <p>Value: {{ value4 }}</p>
        </div>

        <div class="demo-param-field-group">
          <label class="demo-param-field">
            <span class="demo-param-input-label">Min:</span>
            <input
              name="min"
              type="number"
              min="-100"
              max="100"
              v-model="min"
            />
          </label>
          <label class="demo-param-field">
            <span class="demo-param-input-label">Max:</span>
            <input
              name="max"
              type="number"
              min="-100"
              max="100"
              v-model="max"
            />
          </label>
          <label class="demo-param-field">
            <span class="demo-param-input-label">Step:</span>
            <input name="step" type="number" min="0" max="100" v-model="step" />
          </label>
        </div>
        <div class="demo-param-field-group">
          <ui-form-field block>
            <ui-checkbox
              id="slider-disabled"
              v-model="controls.disabled"
            ></ui-checkbox>
            <label for="slider-disabled">Disabled</label>
          </ui-form-field>
          <ui-form-field block>
            <ui-checkbox
              id="slider-custom-bg"
              v-model="controls.customColor"
            ></ui-checkbox>
            <label for="slider-custom-bg">Use Custom BG Color</label>
          </ui-form-field>
        </div>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="slider"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="slider"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Slider'
  },
  mixins: [snippets],
  data() {
    return {
      value: 50,
      value1: 20,
      value2: 20,
      value3: 20,
      value4: 20,
      min: 0,
      max: 50,
      step: 1,
      controls: {
        disabled: false,
        customColor: false
      }
    };
  },
  created() {
    this.showCode('slider');
  },
  mounted() {
    setTimeout(() => {
      this.$refs.slider.recompute();
    }, 300);
  },
  methods: {
    onInput(value) {
      console.log('onInput', value);
    },
    onChange(value) {
      console.log('onChange', value);
    }
  }
};
</script>
