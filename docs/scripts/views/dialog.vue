<template>
  <div class="demo-dialog">
    <div class="component-title">
      <h3>Dialog</h3>
      <p>Modal windows for dedicated user input.</p>
    </div>

    <h4>Basic Dialog</h4>
    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('show')">basic dialog</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showForce')">cannot close dialog by clicking on the mask.</ui-button>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>No mask</h4>
    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('showTransparent')">Dialog with transparent mask</ui-button>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>Custom animate</h4>
    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('showFade')">fade in</ui-button>
    </div>
    <ui-markdown :text="code[2]"></ui-markdown>

    <h4>Animate.css</h4>
    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('showAnimation')">animate.css</ui-button>
      <ui-button primary effect raised @click.native="showDialog('showAnimation2')">another cooler animate</ui-button>
      <!--<ui-button primary effect raised @click.native="showTest=!showTest">test</ui-button>-->
    </div>
    <ui-markdown :text="code[3]"></ui-markdown>

    <h4>Customize width</h4>
    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('showCustomWidth')">custom width</ui-button>
    </div>
    <ui-markdown :text="code[4]"></ui-markdown>

    <h4>Event</h4>
    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('showEvent')">event</ui-button>
    </div>
    <ui-markdown :text="code[5]"></ui-markdown>

    <h4>Customize button text</h4>
    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('showCustomBtnText')">not default button text</ui-button>
    </div>
    <ui-markdown :text="code[6]"></ui-markdown>

    <h4>Customize title</h4>
    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('showSlot')">slot: title</ui-button>
    </div>
    <ui-markdown :text="code[7]"></ui-markdown>

    <h4>Customize buttons</h4>
    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('showSlotActions')">slot: actions</ui-button>
    </div>
    <ui-markdown :text="code[8]"></ui-markdown>

    <h4>Out of the screen</h4>
    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('showOutOfHeight')">content height: 1200px</ui-button>
    </div>
    <ui-markdown :text="code[9]"></ui-markdown>

    <div class="dialog-group">

      <ui-dialog :show="show" @on-close="closeDialog('show')">
        <h4>I am a basic dialog.</h4>
        <br>:use [ @on-close ] to close the dialog.
      </ui-dialog>

      <ui-dialog :show="showForce" @on-close="closeDialog('showForce')" force>
        <h4>You cannot close me by clicking on my mask.</h4>
        <br>:use { force } prop.
      </ui-dialog>

      <ui-dialog :show="showTransparent"  @on-close="closeDialog('showTransparent')" transparent>
        <h4>I'm a dialog width a transparent mask.</h4>
        <br>:use { transparent } prop.
      </ui-dialog>

      <ui-dialog
        transition
        enter-active-class="am-enter-active"
        enter-class="am-enter"
        leave-active-class="am-leave-active"
        :show="showFade"
        @on-close="closeDialog('showFade')">
        <h4>Fade in...</h4>
        <br>:use { transition, enter-active-class, enter-class, leave-class, leave-active-class } props.
      </ui-dialog>

      <ui-dialog
        transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
        :show="showAnimation"
        @on-close="closeDialog('showAnimation')">
        <h4>Use animate.css library.</h4>
        <br>You can also use other animate library.
      </ui-dialog>

      <ui-dialog
        transition
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
        :show="showAnimation2"
        @on-close="closeDialog('showAnimation2')">
        <h4>Use animate.css library, too.</h4>
      </ui-dialog>

      <ui-dialog
        :width="1000"
        :show="showCustomWidth"
        @on-close="closeDialog('showCustomWidth')">
        <h4>I am a dialog that is wider than others, because I set the custom width.</h4>
        <br>:use { width } prop.
        <br>:default 520 (px)
      </ui-dialog>

      <ui-dialog
        :show="showEvent"
        @on-close="closeDialog('showEvent')"
        @on-cancel="onCancel"
        @on-confirm="onConfirm">
        <h4>Open the browser console and view the output of the console by clicking the Cancel or OK button.</h4>
        <br>:use [ @on-cancel, @on-confirm ] to achieve the purpose of custom event handling。
      </ui-dialog>

      <ui-dialog
        cancel-text="Cancel button 2"
        confirm-text="Lovely ok button"
        :show="showCustomBtnText"
        @on-close="closeDialog('showCustomBtnText')">
        <h4>Note the button text</h4>
        <br>:use { cancel-text, confirm-text } to achieve the purpose of changing the button text.
      </ui-dialog>

      <ui-dialog
        class="custom-slot-title"
        transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
        :show="showSlot"
        @on-close="closeDialog('showSlot')">
        <div slot="title" class="title">The title bar that has been changed <i class="close" @click="closeDialog('showSlot')"></i></div>
        <h4>Notice the title bar, especially the closing button in the upper right corner.</h4>
        <br>:use  << slot="title" >> to change the structure of the title bar.
        <br>:note  If you just want to change the text, use { title } prop.
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
          <ui-button accent raised effect @click.native="setContentText('Hello balm!')">change text</ui-button>
          <ui-button raised effect @click.native="closeDialog('showSlotActions', resetContentText)">close</ui-button>
        </div>
        <h4>Notice button area, while viewing the browser console output.</h4>
        <p v-show="contentText">{{contentText}}</p>
        <br>:use << slot="actions" >> to change structure of the button area.
      </ui-dialog>

      <ui-dialog
        class="large-height"
        transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
        :show="showOutOfHeight"
        @on-close="closeDialog('showOutOfHeight')">
        <h4 style="height: 1200px;">I am a particularly high dialog!</h4>
      </ui-dialog>

    </div>

    <ui-apidoc name="dialog"></ui-apidoc>
  </div>
</template>
<style>

  /* .mdl-layout__header, .mdl-layout__drawer {
    z-index: initial;
  }

  .mdl-layout__content {
    z-index: initial;
  } */

  .example-dialog {
    padding: 15px;
  }

  .btn-group {
    padding: 20px 0;
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
    width: 26px;
    height: 26px;
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
    left: 4.3px;
    top: 12.1px;
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

  .large-height .mdl-dialog {
    top: 70px;
  }
</style>
<script type="text/babel">
  import 'animate.css';
  import snippets from '../mixins/snippets';

  export default {
    mixins: [snippets],
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
        showOutOfHeight: false
      }
    },
    methods: {
      reVal(name, $event){
        this[name] = $event.target.value.trim();
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
      onCancel(){
        console.log('clicked the Cancel button!');
      },
      onConfirm(){
        console.log('clicked the OK button!');
      },
      resetContentText(){
        this.contentText = '';
      }
    },
    components: {},
    created(){
      this.showCode('dialog', 10);
    }
  }
</script>
