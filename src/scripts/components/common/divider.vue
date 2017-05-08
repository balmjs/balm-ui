<template>
  <div class="mdl-divider" :class="className">
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
  import {isNumber, isString} from '../utils/helper'

  const typeArr = ['horizontal', 'vertical'];
  const typeObj = {
    h: 'horizontal',
    v: 'vertical'
  };

  export default {
    name: 'ui-divider',
    props: {
      type: {
        type: [String, Number],
        default: 'horizontal'
      }
    },
    computed: {
      className(){
        let type = this.type;

        if(isNumber(type)){
          return typeArr[type] || 'horizontal';
        }

        if(isString(type)){
          if(type.length === 1){
            return typeObj[type.toLowerCase()] || '';
          }
          return type;
        }

      }
    }
  }
</script>
