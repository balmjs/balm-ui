<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
const UI_BOTTOM_NAVIGATION = {
  FIXED_ADJUST: {
    STANDARD: 'mdc-bottom-navigation--fixed-adjust',
    STACKED: 'mdc-bottom-navigation--stacked-fixed-adjust'
  }
};

export default {
  name: 'UiBottomNavigation',
  props: {
    contentSelector: {
      type: String,
      required: true
    },
    stacked: {
      type: Boolean,
      default: false
    },
    min: {
      type: Boolean,
      default: false
    },
    max: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      destinations: 4
    };
  },
  computed: {
    className() {
      let result = [
        'mdc-bottom-navigation',
        {
          'mdc-bottom-navigation--stacked': this.stacked
        }
      ];

      let width = Math.floor(100 / this.destinations);
      result.push(`mdc-bottom-navigation--dest-${width}`);

      return result;
    }
  },
  created() {
    if (this.min) {
      this.destinations = 3;
    } else if (this.max) {
      this.destinations = 5;
    }
  },
  mounted() {
    let content = document.querySelector(this.contentSelector);
    content.classList.add(UI_BOTTOM_NAVIGATION.FIXED_ADJUST.STANDARD);
    if (this.stacked) {
      content.classList.add(UI_BOTTOM_NAVIGATION.FIXED_ADJUST.STACKED);
    }
  }
};
</script>
