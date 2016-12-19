<template>
  <div class="demo-list">
    <ui-list :items="items2" threeLine>
      <template slot="action" scope="props">
        <ui-button effect @click.native="test(props.item)">点赞</ui-button>
      </template>
    </ui-list>
  </div>
</template>

<script>
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
    test(id) {
      console.log(id);
    }
  }
};
</script>
