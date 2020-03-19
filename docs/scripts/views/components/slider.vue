<template>
  <ui-page-structure name="slider" demoCount="1">
    <template #hero>
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
    </template>

    <!-- Content -->
    <section id="slider-example" class="example">
      <h6 :class="$tt('headline6')">Continuous Slider</h6>
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
            @change="onChange"
          ></ui-slider>
        </div>
        <p>Value: {{ value1 }}</p>
      </div>

      <h6 :class="$tt('headline6')">Discrete Slider</h6>
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

      <h6 :class="$tt('headline6')">Discrete Slider with Tick Marks</h6>
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

      <h6 :class="$tt('headline6')">
        Custom Colored Discrete Slider with Tick Marks
      </h6>
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
          <input name="min" type="number" min="-100" max="100" v-model="min" />
        </label>
        <label class="demo-param-field">
          <span class="demo-param-input-label">Max:</span>
          <input name="max" type="number" min="-100" max="100" v-model="max" />
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
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Slider'
  },
  data() {
    return {
      // hero
      value: 0,
      // demo
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
  mounted() {
    setTimeout(() => {
      this.value = 50;
    }, 1e3);

    setTimeout(() => {
      this.$refs.slider.recompute();
    }, 300);
  },
  methods: {
    onChange(value) {
      console.log('onChange', value);
    }
  }
};
</script>
