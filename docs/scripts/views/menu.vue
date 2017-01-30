<template>
  <div class="docs-menu">
    <div class="component-title">
      <h3>Menu</h3>
      <p>Lists of clickable actions.</p>
    </div>

    <h4>{{ $t('menu.basic') }}</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-menu effect :menu="menu" @clicked="onMenu">
          <template slot="icon">
            Avatar
          </template>
        </ui-menu>
      </div>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>{{ $t('menu.custom') }}</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-menu effect>
          <template slot="icon">
            Avatar
          </template>
          <ui-menuitem v-for="item in menu" :item="item" @clicked="onMenu">
            <a :href="item.url">{{ item.label }}</a>
          </ui-menuitem>
        </ui-menu>
      </div>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [{
        url:'/a',
        label: 'Item A'
      }, {
        url:'/b',
        label: 'Item B',
        disabled: true
      }, {
        url:'/c',
        label: 'Item C'
      }],
      demoCount: 2,
      code: []
    };
  },
  methods: {
    onMenu(obj) {
      console.log(obj);
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/menu/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>
