<template>
  <div class="demo-test">
    <ui-chip>Chip</ui-chip>
    <hr>
    <ui-button primary effect raised @click.native="showDialog('show')">有色遮罩无动画对话框</ui-button>
    <ui-button primary effect raised @click.native="showDialog('showConfirm')">confirm对话框</ui-button>
    <ui-button primary effect raised @click.native="showDialog('showAlert')">alert对话框</ui-button>
    <div class="dialog-group">
      <ui-dialog :show="show" @on-close="closeDialog('show')">
        <h4>我是有色遮罩的对话框</h4>
        <br>：使用@on-close事件来关闭对话框
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
    <hr>
    <ui-button @click.native="showSnackbar">show snackbar</ui-button>
    <ui-snackbar message="hello snackbar" :active="active" @done="resetSnackbar"></ui-snackbar>
    <hr>
    <ui-checkbox value="A" :model="formData.options" @change="onOptionsChange">Option A</ui-checkbox>
    <ui-checkbox value="B" :model="formData.options" @change="onOptionsChange">Option B</ui-checkbox>
    <ui-checkbox value="C" :model="formData.options" @change="onOptionsChange">Option C</ui-checkbox>
    <br>
    <ui-radio value="F" :model="formData.gender" @change="onGenderChange">Female</ui-radio>
    <ui-radio value="M" :model="formData.gender" @change="onGenderChange">Male</ui-radio>
    <br>
    <ui-radio value="Y" :model="formData.answer" @change="onAnswerChange">Yes</ui-radio>
    <ui-radio value="N" :model="formData.answer" @change="onAnswerChange">No</ui-radio>
    <br>
    <ui-icon-toggle value="X" :model="formData.icons" @change="onIconsChange">X</ui-icon-toggle>
    <ui-icon-toggle value="Y" :model="formData.icons" @change="onIconsChange">Y</ui-icon-toggle>
    <ui-icon-toggle value="Z" :model="formData.icons" @change="onIconsChange">Z</ui-icon-toggle>
    <br>
    <ui-switch :model="formData.open" @change="onSwitchChange">On/Off</ui-switch>
    <hr>
    <ui-button effect @click.native="submit">Submit</ui-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      formData: {
        options: [],
        gender: '',
        answer: '',
        icons: [],
        open: '',
        text1: 'Hello',
        text2: 'World',
        text3: 'Content'
      },
      show: false,
      showConfirm: false,
      showAlert: false
    };
  },
  methods: {
    showDialog(name){
      this[name] = true;
    },
    closeDialog(name, fn){
      this[name] = false;
      typeof fn === 'function' && fn();
    },
    clickButton(){
      console.log('Hello, 你点击了按钮！');
    },
    onCancel(){
      console.log('你点击了取消按钮！');
    },
    onConfirm(){
      console.log('你点击了确定按钮！');
    },
    showSnackbar() {
      this.active = true;
    },
    resetSnackbar() {
      this.active = false;
    },
    onOptionsChange(val) {
      this.formData.options = val;
    },
    onGenderChange(val) {
      this.formData.gender = val;
    },
    onAnswerChange(val) {
      this.formData.answer = val;
    },
    onIconsChange(val) {
      this.formData.icons = val;
    },
    onSwitchChange(val) {
      this.formData.open = val;
    },
    submit() {
      console.info('submit');
      console.log(this.formData);
    }
  }
};
</script>
