<template>
  <ui-dialog
    class="ui alert"
    :width="width"
    :show="show"
    :force="force"
    :transition="transition"
    :enter-class="enterClass"
    :enter-active-class="enterActiveClass"
    :leave-class="leaveClass"
    :leave-active-class="leaveActiveClass"
    :transparent="transparent"
    @on-close="emit('on-close')">
    <slot name="title">
      <div slot="title" class="title">
        {{title}}
        <i class="close" @click="emit('on-close')"></i>
      </div>
    </slot>
    <slot></slot>
    <slot name="actions">
      <ui-button primary raised effect @click.native="emit('on-click')" slot="actions">{{btnText}}</ui-button>
    </slot>
  </ui-dialog>
</template>
<script type="text/babel">
  import UiDialog from './dialog';
  import UiButton from '../common/button';

  export default {
    name:'ui-alert',
    props: {
      width: {
        type: Number,
        default: 520
      },
      zIndex: {
        type: Number,
        default: 10
      },
      transition: {
        type: Boolean,
        default: true
      },
      enterClass: {
        type: String,
        default: 'alert-enter'
      },
      leaveClass: {
        type: String,
        default: ''
      },
      enterActiveClass: {
        type: String,
        default: 'alert-enter-active'
      },
      leaveActiveClass: {
        type: String,
        default: 'alert-leave-active'
      },
      transparent: {
        type: Boolean,
        default: false
      },
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: 'Prompt'
      },
      btnText: {
        type: String,
        default: 'OK'
      },
      force: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      emit(event){
        this.$emit(event);
      }
    },
    components: {
      UiDialog,
      UiButton
    }
  }
</script>
