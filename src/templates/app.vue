<template>
  <div class="container">
    <ui-layout noDesktopDrawerButton
      :header="layout.header"
      :drawer="layout.drawer">

      <template slot="header-right" scope="props">
        <ui-menu :data="menus" :position="3" @clicked="onMenu" effect></ui-menu>
      </template>

      <div slot="content">
        <ui-tabs :tab="tabs.tab" :panel="tabs.panel" effect>
          <template slot="panel0">安顺地区覅的设计方案</template>
          <template slot="panel2">asdfaosdjfoadjfa</template>
        </ui-tabs>

        <ui-tooltip :target="target" tips="请输入"></ui-tooltip>

        <ui-chip value="奥数都发局速读法"></ui-chip>

        <ui-slider :max="100" :model="sliderValue" @input="changeSlider"></ui-slider>

        <hr>
        <br>

        <ui-card :dp="2">
        </ui-card>

        <br>
        <hr>

        <ui-badge :class="'test'" value="99+" noBackground overlap>
          <b>Badge</b>
        </ui-badge>
        <ui-button primary @click.native="show">Primary Button</ui-button>
        <ui-button effect @click.native="hide">Button</ui-button>
        <ui-list :items="items2" threeLine>
          <template slot="action" scope="props">
            <ui-button effect @click.native="test(props.item)">点赞</ui-button>
          </template>
        </ui-list>
        <ui-grid :data="grid"></ui-grid>
        <ui-loading isActive></ui-loading>
        <ui-table
          :col="table.col"
          :data="table.data"
          :thead="table.thead"
          :tbody="table.tbody"
          :tfoot="table.tfoot"
          :action="table.action"
          :selectable="table.selectable"
          :checkList="table.checkList"
          @edit="onEdit"
          @delete="onDelete"
          @on-selected="onSelected">
        </ui-table>
        <form>
          <ui-textfield id="username" name="username" :model="formData.username" @input="changeText" pattern="-?[0-9]*(\.[0-9]+)?" label="用户名" error="请输入数字"></ui-textfield>
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
        </form>

        <ui-snackbar :message="popup.message" :active="popup.active" @done="hide"></ui-snackbar>

      </div>

    </ui-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: {
        message: 'Hello WOrld',
        active: false
      },
      sliderValue: 25,
      target: '<i class="icon">icon</i>',
      menus: [{
            url:'/a',
            value: 'aaa'
          },{
            url:'/b',
            value: 'bbb',
            disabled: true
          },{
            url:'/c',
            value: 'ccc'
          }],
      layout: {
        header: {
          title: '管理后台系统',
          left: [{
            url:'/a',
            value: 'aaa'
          },{
            url:'/b',
            value: 'bbb'
          },{
            url:'/c',
            value: 'ccc'
          }],
          right: [{
            url:'/a',
            value: 'aaa'
          },{
            url:'/b',
            value: 'bbb'
          },{
            url:'/c',
            value: 'ccc'
          }]
        },
        drawer: {
          title: '管理后台系统',
          links: [{
            url:'/a',
            value: 'aaa'
          },{
            url:'/b',
            value: 'bbb'
          },{
            url:'/c',
            value: 'ccc'
          }]
        }
      },
      grid: [
      [2,{
        col: 4
      },4, 2],
      [2,6,4]
      ],
      tabs: {
        tab: ['菜单1', '菜单2', '菜单3'],
        panel: ['1111111', '2222222', '3333333']
      },
      links: [{
        url: '/a',
        name: 'xxx'
      },{
        url: '/b',
        name: 'yyy'
      }],
      social: [{
        icon: 'sina',
        name: '新浪'
      }],
      table: {
        selectable: 'left',
        checkList: [],
        thead: [{
          value: 'ID',
          sort: 'asc',
          by: 'id'
        }, {
          value: 'Name',
          sort: 'asc',
          by: 'name'
        }, 'Email', 'OP'],
        tbody: ['id', 'name', 'email'],
        tfoot: [{
          name: 'avg',
          value: 'id'
        }, null, null],
        data: [
        {
          id: 30,
          name: 'b',
          email: 'make@123.com'
        },
        {
          id: 10,
          name: 'w',
          email: 'air@123.com'
        },
        {
          id: 60,
          name: 'c',
          email: 'fun@123.com'
        }
        ],
        action: [
        {
          type: 'link',
          name: 'view',
          value: '查看详情'
        },
        {
          type: 'icon',
          name: 'edit',
          value: '<i class="material-icons">mood</i>'
        },
        {
          type: 'button',
          name: 'delete',
          value: '删除'
        }
        ]
      },
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
    changeSlider(data) {
      this.sliderValue = data;
    },
    onMenu(data) {
      console.log('menu', data);
    },
    onShare(data) {
      console.log('share', data);
    },
    onEdit(data) {
      console.log('edit', data);
    },
    onDelete(data) {
      console.log('delete', data);
    },
    onSelected(data) {
      this.table.checkList = data;
    },
    onSort(data) {
      console.log('sort', data);
    },
    onChange(data) {
      console.log('change', data);
    },
    show() {
      console.log('show popup');
      this.popup.message = (new Date()).toString();
      this.popup.active = true;
    },
    hide() {
      console.log('hide');
      this.popup.active = false;
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
  }
};
</script>

<style>
  .mdl-icon-toggle.is-checked .mdl-icon-toggle__label {
    color:  red;
  }
</style>
