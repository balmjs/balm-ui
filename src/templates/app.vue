<template>
  <div class="container">
    <ui-badge :class="'test'" value="99+" noBackground overlap>
      <b>Badge</b>
    </ui-badge>
    <ui-button primary @click="show">Primary Button</ui-button>
    <ui-button effect @click="hide">Button</ui-button>
    <ui-loading isActive></ui-loading>
    <ui-list :items="items2" threeLine>
      <template slot="action" scope="props">
        <ui-button effect @click.native="test(props.item)">点赞</ui-button>
      </template>
    </ui-list>
    <div>
      <ui-textfield id="username" name="username" :model="formData.username" @input="changeText" pattern="-?[0-9]*(\.[0-9]+)?" label="用户名" error="请输入数字">
      </ui-textfield>
    </div>
    <div>
      <p>复选框</p>
      <ui-checkbox name="answer[]" value="1" :model="formData.answer" @input="chooseAnswer">选项A</ui-checkbox>
      <ui-checkbox name="answer[]" value="2" :model="formData.answer" @input="chooseAnswer">选项B</ui-checkbox>
      <ui-checkbox name="answer[]" value="3" :model="formData.answer" @input="chooseAnswer">选项C</ui-checkbox>
      <p>单选框</p>
      <ui-radio name="sex" value="F" :model="formData.gender" @input="chooseSex">女</ui-radio>
      <ui-radio name="sex" value="M" :model="formData.gender" @input="chooseSex">男</ui-radio>
      <p>图标</p>
      <ui-icon name="options[]" value="a" :model="formData.options" @input="chooseIcon">X</ui-icon>
      <ui-icon name="options[]" value="c" :model="formData.options" @input="chooseIcon">Y</ui-icon>
      <ui-icon name="options[]" value="b" :model="formData.options" @input="chooseIcon">Z</ui-icon>
      <p>开关</p>
      <ui-switch name="switch1" :model="formData.switch1" @input="changeSwitch">On/Off</ui-switch>
    </div>
    <ui-button primary @click.native="submit">测试按钮</ui-button>
  </div>
</template>

<script>
// <ui-dialog>
//       <span slot="title">标题</span>
//       <p slot="content">内容</p>
//     </ui-dialog>
import UiDialog from '../components/dialog';
import UiLoading from '../components/loading';

export default {
  data() {
    return {
      formData: {
        username: '',
        gender: 'M',
        answer: ['1','3'],
        options: ['a'],
        switch1: false
      },
      items: [
        'Bryan Cranston',
        'Aaron Paul',
        'Bob Odenkirk'
      ],
      items2: [
        {
          id: 123,
          avatar: 'person',
          content: 'Bryan Cranston',
          subTitle: 'aaaaaaa',
          text: '奥数低价蜂螯伤调节阀奥数低价蜂螯伤调节阀奥数低价蜂螯伤调节阀奥数低价蜂螯伤调节阀奥数低价蜂螯伤调节阀'
        },
        {
          id: 456,
          avatar: 'person',
          content: 'Aaron Paul',
          subTitle: 'bbbbbbb',
          text: '案件殴打三阶佛法奇偶附件'
        },
        {
          id: 789,
          avatar: 'person',
          content: 'Bob Odenkirk',
          subTitle: 'cccccccc',
          text: '偶家佛额外Inboard基佛沃尔夫'
        }
      ]
    };
  },
  methods: {
    show() {
      UiDialog.close();
    },
    hide() {
      UiDialog.hide();
    },
    test(id) {
      console.log(id);
    },
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
    submit() {
      console.log('username', this.formData.username);
    }
  },
  created() {
    UiDialog.alert({
      title: '弹出框标题',
      message: '弹出框消息',
      callback: () => {
        console.log('返回值');
      }
    });
  }
};
</script>

<style>
  .mdl-icon-toggle.is-checked .mdl-icon-toggle__label {
    color:  red;
  }
</style>
