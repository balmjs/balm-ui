<template>
  <div class="splitter" :class="type"><span><slot></slot></span></div>
</template>
<style scoped>

  .splitter {
    display: flex;
  }

  .splitter::before, .splitter::after {
    content: '';
    display: block;
  }

  .splitter span {
    display: inline-block;
    flex-shrink: 0;
    font-size: 18px;
    text-transform: uppercase;
  }

  .splitter.horizontal {
    width: 100%;
    align-items: center;
    justify-content: space-between;

  }

  .splitter.horizontal::before, .splitter.horizontal::after {
    height: 1px;
    width: 50%;
    border-bottom: 1px solid currentColor;
  }

  .splitter.horizontal span {
    padding: .5em 1em;
  }

  .splitter.vertical {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 2em;

  }

  .splitter.vertical::before, .splitter.vertical::after {
    height: 50%;
    width: 1px;
    border-left: 1px solid currentColor;
  }

  .splitter.vertical span {
    padding: .5em;
  }

</style>
<script type="text/babel">
  export default {
    name: 'ui-splitter',
    props: {
      type: {
        type: String,
        default: 'horizontal'
      }
    },
    components: {}
  }
</script>
