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
