<template>
  <div class="mdc-shape-container">
    <slot></slot>
    <div v-if="side.topLeft" class="mdc-shape-container__corner mdc-shape-container__corner--top-left"></div>
    <div v-if="side.topRight" class="mdc-shape-container__corner mdc-shape-container__corner--top-right"></div>
    <div v-if="side.bottomRight" class="mdc-shape-container__corner mdc-shape-container__corner--bottom-right"></div>
    <div v-if="side.bottomLeft" class="mdc-shape-container__corner mdc-shape-container__corner--bottom-left"></div>
  </div>
</template>

<script>
export default {
  name: 'ui-shape',
  props: {
    corner: {
      type: String,
      default: '1'
    }
  },
  computed: {
    side() {
      let topLeft = false;
      let topRight = false;
      let bottomRight = false;
      let bottomLeft = false;

      if (this.corner) {
        let values = this.corner.split(' ').map(currentValue => +currentValue);

        switch (values.length) {
          case 4:
            // top-left | top-right | bottom-right | bottom-left
            topLeft = values[0];
            topRight = values[1];
            bottomRight = values[2];
            bottomLeft = values[3];
            break;
          case 3:
            // top-left | top-right-and-bottom-left | bottom-right
            topLeft = values[0];
            topRight = values[1];
            bottomRight = values[2];
            bottomLeft = values[1];
            break;
          case 2:
            // top-left-and-bottom-right | top-right-and-bottom-left
            topLeft = values[0];
            topRight = values[1];
            bottomRight = values[0];
            bottomLeft = values[1];
            break;
          default:
            // all four sides
            topLeft = values[0];
            topRight = values[0];
            bottomRight = values[0];
            bottomLeft = values[0];
            break;
        }
      }

      return {
        topLeft,
        topRight,
        bottomRight,
        bottomLeft
      };
    }
  }
};
</script>
