<template>
  <ui-dialog
    :width="width"
    :title="title"
    :cancel-text="cancelText"
    :confirm-text="confirmText"
    :force="force"
    :show="show"
    :transition="transition"
    :enter-class="enterClass"
    :enter-active-class="enterActiveClass"
    :leave-class="leaveClass"
    :leave-active-class="leaveActiveClass"
    :transparent="transparent"
    @on-close="emit('on-close')"
    @on-cancel="emit('on-cancel')"
    @on-confirm="emit('on-confirm')"><slot></slot></ui-dialog>
</template>
<script type="text/babel">
  import uiDialog from './dialog'
  export default {
    name: 'ui-confirm',
    props: {
      width: {
        type: Number,
        default: 520
      },
      transition: {
        type: Boolean,
        default: true
      },
      enterClass: {
        type: String,
        default: 'confirm-enter'
      },
      leaveClass: {
        type: String,
        default: ''
      },
      enterActiveClass: {
        type: String,
        default: 'confirm-enter-active'
      },
      leaveActiveClass: {
        type: String,
        default: 'confirm-leave-active'
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
        default: 'prompt'
      },
      confirmText: {
        type: String,
        default: 'OK'
      },
      cancelText: {
        type: String,
        default: 'Cancel'
      },
      force: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      emit(event){
        this.$emit(event);
      }
    },
    components: {
      uiDialog
    }
  }
</script>
