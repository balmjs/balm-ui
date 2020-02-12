<template>
  <div :class="[$tt('body1'), 'demo--test']">
    <!-- <ui-banner
      >Banners are interruptive, but their level of interruption should match
      the information they contain and the context in which they appear.
      <template #action>
        <ui-button>OK</ui-button>
        <ui-button>Cancel</ui-button>
      </template>
    </ui-banner> -->
    <div class="main-content">
      <ui-chip>Chip</ui-chip>
      <hr />
      <ui-button primary effect raised @click="showDialog('show')"
        >有色遮罩无动画对话框</ui-button
      >
      <ui-button primary effect raised @click="showDialog('showConfirm')"
        >confirm对话框</ui-button
      >
      <ui-button primary effect raised @click="showDialog('showAlert')"
        >alert对话框</ui-button
      >
      <div class="dialog-group">
        <ui-dialog :show="show" @on-close="closeDialog('show')">
          <h4>我是有色遮罩的对话框</h4>
          <br />：使用@on-close事件来关闭对话框
        </ui-dialog>
      </div>
      <hr />
      <ui-button @click="showSnackbar">show snackbar</ui-button>
      <ui-snackbar
        message="hello snackbar"
        :active="active"
        @done="resetSnackbar"
      ></ui-snackbar>
      <hr />
      <ui-checkbox value="A" :model="formData.options" @change="onOptionsChange"
        >Option A</ui-checkbox
      >
      <ui-checkbox value="B" :model="formData.options" @change="onOptionsChange"
        >Option B</ui-checkbox
      >
      <ui-checkbox value="C" :model="formData.options" @change="onOptionsChange"
        >Option C</ui-checkbox
      >
      <br />
      <ui-radio value="F" :model="formData.gender" @change="onGenderChange"
        >Female</ui-radio
      >
      <ui-radio value="M" :model="formData.gender" @change="onGenderChange"
        >Male</ui-radio
      >
      <br />
      <ui-radio value="Y" :model="formData.answer" @change="onAnswerChange"
        >Yes</ui-radio
      >
      <ui-radio value="N" :model="formData.answer" @change="onAnswerChange"
        >No</ui-radio
      >
      <br />
      <ui-switch :model="formData.open" @change="onSwitchChange"
        >On/Off</ui-switch
      >
      <hr />
      <ui-button effect @click="submit">Submit</ui-button>
      <p v-for="i in 100" :key="i">{{ i }}</p>
    </div>
    <ui-bottom-navigation stacked contentSelector=".main-content">
      <ui-tab-bar v-model="tabActive">
        <ui-tab
          v-for="(tab, index) in tabs"
          :key="index"
          :type="2"
          :icon="tab.icon"
          stacked
        >
          {{ tab.text }}
        </ui-tab>
        <template #indicator></template>
      </ui-tab-bar>
    </ui-bottom-navigation>
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
      showAlert: false,
      tabActive: 0,
      tabs: [
        {
          text: 'Favorites',
          icon: 'favorite',
          indicator: 'crop_square'
        },
        {
          text: 'Recents',
          icon: 'phone',
          indicator: 'panorama_fish_eye'
        },
        {
          text: 'Nearby',
          icon: 'near_me',
          indicator: 'change_history'
        },
        {
          text: 'Favorites',
          icon: 'favorite',
          indicator: 'crop_square'
        },
        {
          text: 'Recents',
          icon: 'phone',
          indicator: 'panorama_fish_eye'
        },
        {
          text: 'Nearby',
          icon: 'near_me',
          indicator: 'change_history'
        }
      ]
    };
  },
  methods: {
    showDialog(name) {
      this[name] = true;
    },
    closeDialog(name, fn) {
      this[name] = false;
      typeof fn === 'function' && fn();
    },
    clickButton() {
      console.log('Hello, 你点击了按钮！');
    },
    onCancel() {
      console.log('你点击了取消按钮！');
    },
    onConfirm() {
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
