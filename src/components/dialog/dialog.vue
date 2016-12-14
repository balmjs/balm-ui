<template>
  <div class="mdl-dialog__container">
    <template v-if="!transition">
      <div :class="['mdl-dialog', {hidden: !show, targeted: targetNode}]" :style="style">
        <slot name="title">
          <h4 class="mdl-dialog__title" v-if="!noTitle">
            {{ title }}
          </h4>
        </slot>
        <div class="mdl-dialog__content">
          <slot>
            <p>{{ message }}</p>
          </slot>
        </div>
        <div :class="['mdl-dialog__actions', {'mdl-dialog__actions--full-width': actionsFullWidth}]">
          <slot name="actions">
            <ui-button primary raised effect @click.native="onConfirm">{{confirmText}}</ui-button>
            <ui-button raised effect @click.native="onCancel">{{cancelText}}</ui-button>
          </slot>
        </div>
      </div>
    </template>
    <template v-else>
      <transition
        :enter-class="enterClass"
        :enter-active-class="enterActiveClass"
        :leave-class="leaveClass"
        :leave-active-class="leaveActiveClass">

        <div class="mdl-dialog" v-show="show" :style="style">
          <h4 class="mdl-dialog__title" v-if="!noTitle">
            <slot name="title">{{ title }}</slot>
          </h4>
          <div class="mdl-dialog__content">
            <slot>
              <p>{{ message }}</p>
            </slot>
          </div>
          <div :class="['mdl-dialog__actions', {'mdl-dialog__actions--full-width': actionsFullWidth}]">
            <slot name="actions">
              <ui-button primary raised effect @click.native="onConfirm">{{confirmText}}</ui-button>
              <ui-button raised effect @click.native="onCancel">{{cancelText}}</ui-button>
            </slot>
          </div>
        </div>
      </transition>
    </template>
  </div>
</template>
<style scoped>
  .mdl-dialog {
    background-color: #fff;
    position: fixed;
    width: auto;
    min-width: 380px;
    max-width: 90%;
    z-index: 5;
    left: 50%;
    top: 100px;
    /*max-height: calc(90% - 200px);*/
    overflow-x: hidden;
    overflow-y: auto;
  }

  .mdl-dialog.hidden {
    display: none;
  }

</style>
<script type="text/babel">
  import UiButton from '../button';
  import Mask from '../../global/mask'

  let $mask = new Mask();
  let ACount = 0;

  export default {
    name: 'ui-dialog',
    props: {
      target: {
        default: null
      },
      width: {
        type: Number,
        default: 520
      },
      transition: {
        type: Boolean,
        default: false
      },
      enterClass: {
        type: String,
        default: ''
      },
      leaveClass: {
        type: String,
        default: ''
      },
      enterActiveClass: {
        type: String,
        default: ''
      },
      leaveActiveClass: {
        type: String,
        default: ''
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
        default: 'title'
      },
      message: {
        type: String,
        default: ''
      },
      actionsFullWidth: {
        type: Boolean,
        default: false
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
        default: false
      }
    },
    data(){
      return {
        showDialog: this.show
      }
    },
    computed: {
      targetNode(){
        return this.target ? document.querySelector(this.target) : null;
      },
      style(){
        return {
          width: `${this.width}px`,
          marginLeft: `${-(this.width / 2)}px`
        }
      }
    },
    watch: {
      show(val){
        val ? this.openMask() : this.closeMask();
      }
    },
    methods: {
      /*// --------
       // 进入中
       // --------

       beforeEnter(el) {
       this.$emit('beforeEnter', el);
       },
       // 此回调函数是可选项的设置
       // 与 CSS 结合时使用
       enter(el, done) {
       this.$emit('enter', el);
       done();
       },
       afterEnter(el) {
       this.$emit('afterEnter', el);
       },
       enterCancelled(el) {
       this.$emit('enterCancelled', el);
       },
       // --------
       // 离开时
       // --------
       beforeLeave(el) {
       this.$emit('beforeLeave', el);
       },
       // 此回调函数是可选项的设置
       // 与 CSS 结合时使用
       leave(el, done) {
       this.$emit('beforeLeave', el);
       done();
       },
       afterLeave(el) {
       this.$emit('afterLeave', el);
       },
       // leaveCancelled 只用于 v-show 中
       leaveCancelled(el) {
       this.$emit('leaveCancelled', el);
       },*/
      onConfirm(){
        this.close();
        this.$emit('on-confirm');
      },
      onCancel(){
        this.close();
        this.$emit('on-cancel');
      },
      close(){
        this.$emit('on-close');
        this.closeMask();
      },
      closeMask(){
        $mask.remove();
      },
      openMask(){
        $mask.show({transparent: this.transparent, clickHandler: this.force ? null : this.close});
      }
    },
    beforeDestroy(){
      $mask.remove();
      $mask = null;
    },
    components: {
      UiButton
    }
  }
</script>
