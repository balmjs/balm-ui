<template>
  <ui-page name="slider" demo-count="1">
    <template #hero>
      <ui-form>
        <ui-form-field id="hero-slider-wrapper">
          <ui-icon>volume_mute</ui-icon>
          <ui-slider id="hero-slider" ref="slider" v-model="value" max="100" label="Select Volume"></ui-slider>
          <ui-icon>volume_up</ui-icon>
        </ui-form-field>
      </ui-form>
      <div>Volume: {{ value }}%</div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">Continuous Slider</h6>
      <div class="demo">
        <div
          :class="[
            'example-slider-wrapper',
            { 'custom-bg': controls.customColor }
          ]"
        >
          <ui-slider
            id="continuous-mdc-slider"
            v-model="value1"
            :min="min"
            :max="max"
            :step="step"
            :disabled="controls.disabled"
            @change="onChange"
          ></ui-slider>
        </div>
        <p>Value: {{ value1 }}</p>
      </div>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">Discrete Slider</h6>
      <div class="demo">
        <div
          :class="[
            'example-slider-wrapper',
            { 'custom-bg': controls.customColor }
          ]"
        >
          <ui-slider
            id="discrete-mdc-slider"
            v-model="value2"
            type="discrete"
            :min="min"
            :max="max"
            :step="step"
            :disabled="controls.disabled"
            label="Select Value"
          ></ui-slider>
        </div>
        <p>Value: {{ value2 }}</p>
      </div>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">Discrete Slider with Tick Marks</h6>
      <div class="demo">
        <div
          :class="[
            'example-slider-wrapper',
            { 'custom-bg': controls.customColor }
          ]"
        >
          <ui-slider
            id="discrete-mdc-slider-w-marker"
            v-model="value3"
            type="discrete"
            display-marker
            :min="min"
            :max="max"
            :step="step"
            :disabled="controls.disabled"
            label="Select Value"
          ></ui-slider>
        </div>
        <p>Value: {{ value3 }}</p>
      </div>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">Custom Colored Discrete Slider with Tick Marks</h6>
      <div class="demo">
        <div
          :class="[
            'example-slider-wrapper',
            { 'custom-bg': controls.customColor }
          ]"
        >
          <ui-slider
            id="custom-discrete-mdc-slider-w-marker"
            v-model="value4"
            type="discrete"
            display-marker
            class="demo-slider--custom"
            :min="min"
            :max="max"
            :step="step"
            :disabled="controls.disabled"
            label="Select Value"
          ></ui-slider>
        </div>
        <p>Value: {{ value4 }}</p>
      </div>
    </section>

    <ui-form class="demo-controls">
      <div class="demo-param-field-group">
        <label class="demo-param-field">
          <span class="demo-param-input-label">Min:</span>
          <input v-model="min" name="min" type="number" min="-100" max="100" />
        </label>
        <label class="demo-param-field">
          <span class="demo-param-input-label">Max:</span>
          <input v-model="max" name="max" type="number" min="-100" max="100" />
        </label>
        <label class="demo-param-field">
          <span class="demo-param-input-label">Step:</span>
          <input v-model="step" name="step" type="number" min="0" max="100" />
        </label>
      </div>
      <div class="demo-param-field-group">
        <ui-form-field>
          <ui-checkbox id="slider-disabled" v-model="controls.disabled"></ui-checkbox>
          <label for="slider-disabled">Disabled</label>
        </ui-form-field>
        <ui-form-field>
          <ui-checkbox id="slider-custom-bg" v-model="controls.customColor"></ui-checkbox>
          <label for="slider-custom-bg">Use Custom BG Color</label>
        </ui-form-field>
      </div>
    </ui-form>
  </ui-page>
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
