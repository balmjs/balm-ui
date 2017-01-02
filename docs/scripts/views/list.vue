<template>
  <div class="demo-list">
    <div class="component-title">
      <h3>List</h3>
      <p>Customizable scrollable lists.</p>
    </div>

    // TODO
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
          subTitle: 'aaa',
          text: 'text1'
        },
        {
          id: 456,
          avatar: 'person',
          content: 'Aaron Paul',
          subTitle: 'bbb',
          text: 'text2'
        },
        {
          id: 789,
          avatar: 'person',
          content: 'Bob Odenkirk',
          subTitle: 'ccc',
          text: 'text3'
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
