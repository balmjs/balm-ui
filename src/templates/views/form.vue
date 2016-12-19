<template>
  <form class="demo-form">
    <div>
      <ui-textfield id="username" name="username" :model="formData.username" @input="changeText" pattern="-?[0-9]*(\.[0-9]+)?" label="用户名" error="请输入数字"></ui-textfield>
      <ui-textfield labelLeft id="age" name="age" :model="formData.username" label="四个大字" error="请输入数字" pattern="-?[0-9]*(\.[0-9]+)?"></ui-textfield>
    </div>
    <div>
      <p>复选框</p>
      <ui-checkbox name="answer[]" value="1" :model="formData.answer" @input="chooseAnswer">选项A</ui-checkbox>
      <ui-checkbox name="answer[]" value="2" :model="formData.answer" @input="chooseAnswer">选项B</ui-checkbox>
      <ui-checkbox squared name="answer[]" value="3" :model="formData.answer" @input="chooseAnswer">选项C</ui-checkbox>
      <p>单选框</p>
      <ui-radio name="sex" value="F" :model="formData.gender" @input="chooseSex">女</ui-radio>
      <ui-radio name="sex" value="M" :model="formData.gender" @input="chooseSex">男</ui-radio>
      <p>图标</p>
      <ui-icon-toggle name="options[]" value="a" :model="formData.options" @input="chooseIcon">X</ui-icon-toggle>
      <ui-icon-toggle name="options[]" value="c" :model="formData.options" @input="chooseIcon">Y</ui-icon-toggle>
      <ui-icon-toggle name="options[]" value="b" :model="formData.options" @input="chooseIcon">Z</ui-icon-toggle>
      <p>开关</p>
      <ui-switch name="switch1" :model="formData.switch1" @input="changeSwitch">On/Off</ui-switch>
      <ui-slider :max="100" :model="formData.sliderValue" @input="changeSlider"></ui-slider>
    </div>
    <ui-button primary @click.native="submit">测试按钮</ui-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        gender: 'M',
        answer: ['1','3'],
        options: ['a'],
        switch1: false,
        sliderValue: 25
      }
    };
  },
  methods: {
    chooseAnswer(val) {
      this.formData.answer = val;
    },
    chooseSex(val) {
      this.formData.gender = val;
    },
    chooseIcon(val) {

    },
    changeSwitch(val) {
      this.formData.switch1 = val;
    },
    changeText(val) {
      this.formData.username = val;
    },
    changeSlider(data) {
      this.sliderValue = data;
    },
    submit() {
      console.log('username', this.formData.username);
    }
  }
};
</script>

<style>
.mdl-icon-toggle.is-checked .mdl-icon-toggle__label {
  color:  red;
}
</style>
