<template>
  <div class="example-dialog">
    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('show')">有色遮罩无动画对话框</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showTransparent')">透明遮罩无动画对话框</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showFade')">渐现对话框</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showAnimation')">animate.css</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showAnimation2')">更加酷炫的动画</ui-button>
      <!--<ui-button primary effect raised @click.native="showTest=!showTest">test</ui-button>-->
    </div>

    <div class="dialog-group">
      <ui-dialog :show="show" @after-close="afterDialogClose('show')" canMaskClick>我是有色遮罩的对话框</ui-dialog>
      <ui-dialog :show="showTransparent"  @after-close="afterDialogClose('showTransparent')" transparent>我是透明遮罩的对话框</ui-dialog>
      <ui-dialog transition enter-active-class="fade in" enter-class="fade enter" leave-active-class="fade out" :show="showFade"  @after-close="afterDialogClose('showFade')">我是使用css过渡渐现效果的对话框</ui-dialog>
      <ui-dialog transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut" :show="showAnimation" @after-close="afterDialogClose('showAnimation')">我是使用animate.css动画的对话框</ui-dialog>
      <ui-dialog transition enter-active-class="animated flipInX" leave-active-class="animated flipOutX" :show="showAnimation2" @after-close="afterDialogClose('showAnimation2')">我是另一个使用animate.css动画的对话框</ui-dialog>
    </div>
    <!--<transition enter-active-class="fade in" enter-class="fade enter" leave-active-class="fade out">
      <p class="test" v-show="showTest">123456</p>
    </transition>-->
  </div>
</template>
<style>
  .example-dialog {
    padding: 15px;
  }

  .fade.in {
    transition: opacity .5s
  }
  .fade.enter, .fade.out {
    opacity: 0
  }

  .in, .out {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .mdl-dialog.animated {
    animation-duration: .4s;
  }

  p.test {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>
<script type="text/babel">
  import 'animate.css';

  export default {
    data () {
      return {
        showTransparent: false,
        show: false,
        showFade: false,
        showTest: false,
        showAnimation: false,
        showAnimation2: false
      }
    },
    methods: {
      showDialog(name){
        this[name] = true;
      },
      afterDialogClose(name){
        this[name] = false;
      }
    },
    components: {}
  }
</script>
