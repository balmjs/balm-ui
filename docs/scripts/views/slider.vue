<template>
  <div class="docs-slider">
    <div class="component-title">
      <h3>Slider</h3>
      <p>Selecting a value out of a range.</p>
    </div>

    <!-- <h4>{{ $t('slider.basic') }}</h4> -->
    <ui-slider :min="-5" :max="5" :model="slider1" @change="onChange"></ui-slider>

    <!-- <h4>{{ $t('slider.advanced') }}</h4> -->
    // TODO
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider1: 0
    };
  },
  methods: {
    onChange(data) {
      this.slider1 = data;
    }
  }
};
</script>
