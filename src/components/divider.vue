<template>
  <div class="mdl-divider" :class="type">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>

  .mdl-divider {
    display: flex;
  }

  .mdl-divider::before, .mdl-divider::after {
    content: '';
    display: block;
  }

  .mdl-divider span {
    display: inline-block;
    flex-shrink: 0;
    font-size: 18px;
    text-transform: uppercase;
  }

  .mdl-divider.horizontal {
    width: 100%;
    align-items: center;
    justify-content: space-between;

  }

  .mdl-divider.horizontal::before, .mdl-divider.horizontal::after {
    height: 1px;
    width: 50%;
    border-bottom: 1px solid currentColor;
  }

  .mdl-divider.horizontal span {
    padding: .5em 1em;
  }

  .mdl-divider.vertical {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 2em;

  }

  .mdl-divider.vertical::before, .mdl-divider.vertical::after {
    height: 50%;
    width: 1px;
    border-left: 1px solid currentColor;
  }

  .mdl-divider.vertical span {
    padding: .5em;
  }
</style>

<script type="text/babel">
  export default {
    name: 'ui-divider',
    props: {
      type: {
        type: String,
        default: 'horizontal'
      }
    }
  }
</script>
