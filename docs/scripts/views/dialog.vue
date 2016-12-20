<template>
  <div class="example-dialog">
    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('show')">有色遮罩无动画对话框</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showForce')">点击遮罩无法再关闭对话框</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showTransparent')">透明遮罩无动画对话框</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showFade')">渐现对话框</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showAnimation')">animate.css</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showAnimation2')">更加酷炫的动画</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showCustomWidth')">自定义宽度</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showEvent')">事件</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showCustomBtnText')">自定义按钮文字</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showSlot')">通过slot改变title结构</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showSlotActions')">通过slot改变actions结构</ui-button>
      <!--<ui-button primary effect raised @click.native="showTest=!showTest">test</ui-button>-->
    </div>

    <div class="btn-group">
      <ui-divider>extention</ui-divider>
      <ui-button primary effect raised @click.native="showDialog('showConfirm')">confirm对话框</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showAlert')">alert对话框</ui-button>
    </div>

    <div class="dialog-group">

      <ui-dialog :show="show" @on-close="closeDialog('show')">
        <h4>我是有色遮罩的对话框</h4>
        <br>：使用@on-close事件来关闭对话框
      </ui-dialog>

      <ui-dialog :show="showForce" @on-close="closeDialog('showForce')" force>
        <h4>你不能再通过点击我的遮罩关闭对话框了。</h4>
        <br>：使用force属性
      </ui-dialog>

      <ui-dialog :show="showTransparent"  @on-close="closeDialog('showTransparent')" transparent>
        <h4>我是透明遮罩的对话框</h4>
        <br>：使用transparent属性
      </ui-dialog>

      <ui-dialog
        transition
        enter-active-class="am-enter-active"
        enter-class="am-enter"
        leave-active-class="am-leave-active"
        :show="showFade"
        @on-close="closeDialog('showFade')">
        <h4>我是使用css过渡渐现效果的对话框</h4>
        <br>：需要配置transition, enter-active-class, enter-class, leave-class, leave-active-class属性
      </ui-dialog>

      <ui-dialog
        transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
        :show="showAnimation"
        @on-close="closeDialog('showAnimation')">
        <h4>我是使用animate.css动画的对话框</h4>
        <br>也可以结合其他第三方动画库，使打开/关闭对话框呈现不同的动画效果。
      </ui-dialog>

      <ui-dialog
        transition
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
        :show="showAnimation2"
        @on-close="closeDialog('showAnimation2')">
        <h4>我是另一个使用animate.css动画的对话框</h4>
      </ui-dialog>

      <ui-dialog
        :width="1000"
        :show="showCustomWidth"
        @on-close="closeDialog('showCustomWidth')">
        <h4>我是一个比它们都宽的dialog，因为我设定了自定义宽度。</h4>
        <br>：配置了width属性，width只接受Number类型。
        <br>：我的默认宽度是：520！单位：像素。
      </ui-dialog>

      <ui-dialog
        :show="showEvent"
        @on-close="closeDialog('showEvent')"
        @on-cancel="onCancel"
        @on-confirm="onConfirm">
        <h4>请打开浏览器控制台，通过点击取消或者确定按钮观察控制台的输出。</h4>
        <br>：通过@on-cancel, @on-confirm来达到自定义事件处理的目的。
      </ui-dialog>

      <ui-dialog
        cancel-text="被改变文字的取消按钮"
        confirm-text="可爱的确定按钮"
        :show="showCustomBtnText"
        @on-close="closeDialog('showCustomBtnText')">
        <h4>注意按钮文字</h4>
        <br>：通过配置cancel-text或confirm-text来达到改变按钮文字的目的。
      </ui-dialog>

      <ui-dialog
        class="custom-slot-title"
        transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
        :show="showSlot"
        @on-close="closeDialog('showSlot')">
        <div slot="title" class="title">被更改的标题栏 <i class="close" @click="closeDialog('showSlot')"></i></div>
        <h4>注意对话框标题，尤其是右上角的关闭按钮</h4>
        <br>：通过使用[slot="title"]来改变标题栏的结构；
        <br>：如果你仅仅是想改变文字，请使用title属性
        <!--<ui-textfield id="s" name="ss" :model="sd" @input.native="reVal('sd', $event)">121212</ui-textfield>-->
      </ui-dialog>

      <ui-dialog
        class="custom-slot-action"
        transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
        :show="showSlotActions"
        @on-close="closeDialog('showSlotActions')">
        <div slot="actions" class="actions">
          <ui-button primary raised effect @click.native="print123">'123'</ui-button>
          <ui-button accent raised effect @click.native="setContentText('Hello balm!')">改变内容</ui-button>
          <ui-button raised effect @click.native="closeDialog('showSlotActions', resetContentText)">关闭对话框</ui-button>
        </div>
        <h4>注意对话框按钮区域，同时观察浏览器控制台输出</h4>
        <p v-show="contentText">{{contentText}}</p>
        <br>：通过使用[slot="actions"]来改变按钮区的结构；
      </ui-dialog>

      <ui-confirm
        :show="showConfirm"
        @on-close="closeDialog('showConfirm')"
        @on-cancel="onCancel"
        @on-confirm="onConfirm">
        <h4>这是一个ui-confirm组件</h4>
        <br>：confirm无法使用[slot="title"]和[slot="actions"]，只能使用title, cancel-text或confirm-text来改变标题文字和按钮文字;
        <br>：confirm的遮罩点击时无法关闭对话框；
        <br>：confirm打开时存在预设动画
      </ui-confirm>

      <ui-alert
        :show="showAlert"
        @on-click="closeDialog('showAlert', clickButton)"
        @on-close="closeDialog('showAlert')">
        <h4>这是一个ui-alert组件</h4>
        <br>：alert无法使用[slot="title"]和[slot="actions"]，只能使用title, cancel-text或confirm-text来改变标题文字和按钮文字;
        <br>：alert打开时存在预设动画
        <br>: alert功能区只有一个按钮，但是标题栏存在关闭按钮
        <br>: 与ui-confirm组件相比, alert只有@on-click（对应功能区唯一按钮）, @on-close事件（对应标题栏关闭按钮），没有@on-cancel事件
      </ui-alert>

    </div>
    <!--<transition enter-active-class="am-enter-active" enter-class="am-enter" leave-active-class="am-leave-active">
      <p class="test" v-show="showTest">123456</p>
    </transition>-->
  </div>
</template>
<style>

  .mdl-layout__header, .mdl-layout__drawer {
    z-index: initial;
  }

  .mdl-layout__content {
    z-index: initial;
  }

  .example-dialog {
    padding: 15px;
  }

  .btn-group button {
    margin-bottom: 4px;
  }

  .am-enter-active, .am-leave-active {
    transition: all .4s;
  }
  .am-enter, .am-leave-active {
    opacity: 0;
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

  .custom-slot-title .title {
    display: flex;
    font-size: 24px;
    justify-content: space-between;
  }
  .custom-slot-title .title .close {
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: transform 1s ease;
    transform: rotate(0deg);
    position: relative;
  }

  .custom-slot-title .title .close::before, .custom-slot-title .title .close::after {
    display: block;
    position: absolute;
    width: 16px;
    left: 4px;
    top: 11px;
    content: "";
    height: 2px;
    background-color: #CCCCCC;
  }

  .custom-slot-title .title .close::before {
    transform: rotate(45deg);
  }

  .custom-slot-title .title .close::after {
    transform: rotate(135deg);
  }

  .custom-slot-title .title .close:hover {
    transform: rotate(360deg);
  }

  .custom-slot-title .title .close:active {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .5) inset;
  }
</style>
<script type="text/babel">
  import 'animate.css';

  export default {
    data () {
      return {
        sd: '',
        contentText: '',
        showTransparent: false,
        showForce: false,
        show: false,
        showFade: false,
        showTest: false,
        showAnimation: false,
        showAnimation2: false,
        showCustomWidth: false,
        showEvent: false,
        showCustomBtnText: false,
        showSlot: false,
        showSlotActions: false,
        showConfirm: false,
        showAlert: false
      }
    },
    methods: {
      reVal(name, $event){
        this[name] = $event.target.value.trim();
      },
      clickButton(){
        console.log('Hello, 你点击了按钮！');
      },
      hello(){
        console.log('Hello balm!');
      },
      print123(){
        console.log('123');
      },
      showDialog(name){
        this[name] = true;
      },
      closeDialog(name, fn){
        this[name] = false;
        typeof fn === 'function' && fn();
      },
      setContentText(text){
        this.contentText = text;
      },
      resetContentText(){
        this.contentText = '';
      },
      onCancel(){
        console.log('你点击了取消按钮！');
      },
      onConfirm(){
        console.log('你点击了确定按钮！');
      }
    },
    components: {}
  }
</script>
