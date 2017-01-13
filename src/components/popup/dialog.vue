<template>
  <div class="mdl-dialog__container">
    <template v-if="!transition">
      <div :class="['mdl-dialog', {hidden: !show, targeted: targetNode}]" :style="style">
        <slot name="title">
          <h4 class="mdl-dialog__title">
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
          <h4 class="mdl-dialog__title">
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
    z-index: 11;
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
  import UiButton from '../common/button';
  import Mask from '../utils/mask'

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
      zIndex: {
        type: Number,
        default: 10
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
        default: 'Title'
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
        mask: new Mask(),
        showDialog: this.show,
        viewportHeight: 0
      }
    },
    computed: {
      targetNode(){
        return this.target ? document.querySelector(this.target) : null;
      },
      bottom(){

        let bottom = null;

        if(this.viewportHeight){
          let dialog = this.$el.querySelector('.mdl-dialog');
          let style = getComputedStyle(dialog);
          let top = parseInt(style.top, 10);
          let height = parseInt(style.height, 10);

          if((height + top + top) > this.viewportHeight){
            bottom = `${top}px`;
          }
        }

        return bottom;
      },
      style(){
        let json = {
          width: `${this.width}px`,
          marginLeft: `${-(this.width / 2)}px`,
          zIndex: this.zIndex
        };

        this.bottom && (json.bottom = this.bottom);

        return json;
      }
    },
    watch: {
      show(val){
        val ? this.openMask() : this.closeMask();
      }
    },
    methods: {
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
        this.mask.remove();
      },
      openMask(){
        this.mask.show({
          transparent: this.transparent,
          clickHandler: this.force ? null : this.close,
          parent: this.$el,
          zIndex: this.zIndex - 1
        });
        setTimeout(()=>{
          this.computedVpHeight();
        }, 0);
      },
      computedVpHeight(){
        this.viewportHeight = document.documentElement.clientHeight || document.body.clientHeight;
      },
    },
    mounted(){
      window.addEventListener('resize', this.computedVpHeight, false);
    },
    beforeDestroy(){
      window.removeEventListener('resize', this.computedVpHeight, false);
      this.mask && this.mask.remove();
    },
    components: {
      UiButton
    }
  }
</script>
