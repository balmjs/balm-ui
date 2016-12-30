<template>
  <div class="docs-slider">
    <!-- <h4>{{ $t('slider.basic') }}</h4> -->
    <ui-slider :min="-5" :max="5" :model="slider1" @change="onChange"></ui-slider>

    <!-- <h4>{{ $t('slider.advanced') }}</h4> -->

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
