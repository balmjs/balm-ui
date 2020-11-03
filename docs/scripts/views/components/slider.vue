<template>
  <docs-page name="slider" demo-count="2" without-css>
    <template #hero>
      <ui-form>
        <ui-form-field id="hero-slider-wrapper">
          <ui-icon>volume_mute</ui-icon>
          <ui-slider ref="slider" v-model="value"></ui-slider>
          <ui-icon>volume_up</ui-icon>
        </ui-form-field>
      </ui-form>
      <div>Volume: {{ value }}%</div>
    </template>

    <!-- Content -->
    <ui-form class="demo-controls">
      <ui-form-field>
        <ui-checkbox id="slider-disabled" v-model="disabled"></ui-checkbox>
        <label for="slider-disabled">Disabled</label>
      </ui-form-field>
    </ui-form>

    <section class="demo-wrapper">
      <div class="demo">
        <h6 :class="$tt('headline6')">
          Continuous slider (Value: {{ value1 }})
        </h6>
        <div class="example-slider-wrapper">
          <ui-slider
            v-model="value1"
            :disabled="disabled"
            @change="onChange"
          ></ui-slider>
        </div>
      </div>

      <div class="demo">
        <h6 :class="$tt('headline6')">
          Continuous range slider (Value: {{ value2 }})
        </h6>
        <div class="example-slider-wrapper">
          <ui-slider
            v-model="value2"
            :disabled="disabled"
            @change="onChange"
          ></ui-slider>
        </div>
      </div>

      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <h6 :class="$tt('headline6')">Discrete slider (Value: {{ value3 }})</h6>
        <div class="example-slider-wrapper">
          <ui-slider
            v-model="value3"
            type="discrete"
            :step="10"
            :disabled="disabled"
          ></ui-slider>
        </div>
      </div>

      <div class="demo">
        <h6 :class="$tt('headline6')">
          Discrete slider with tick marks (Value: {{ value4 }})
        </h6>
        <div class="example-slider-wrapper">
          <ui-slider
            v-model="value4"
            type="discrete"
            with-tick-marks
            :step="10"
            :disabled="disabled"
          ></ui-slider>
        </div>
      </div>

      <div class="demo">
        <h6 :class="$tt('headline6')">
          Discrete range slider (Value: {{ value5 }})
        </h6>
        <div class="example-slider-wrapper">
          <ui-slider
            v-model="value5"
            type="discrete"
            :step="10"
            :disabled="disabled"
          ></ui-slider>
        </div>
      </div>

      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
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
      value1: 50,
      value2: [30, 70],
      value3: 50,
      value4: 50,
      value5: [20, 50],
      disabled: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.value = 50;
        this.$refs.slider.recompute();
      }, 1e3);
    });
  },
  methods: {
    onChange(value) {
      console.log('onChange', value);
    }
  }
};
</script>
