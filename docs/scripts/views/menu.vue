<template>
  <div class="docs-menu">
    <div class="component-title">
      <h3>Menu</h3>
      <p>Lists of clickable actions.</p>
    </div>

    <h4>{{ $t('menu.basic') }}</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-menu effect :menu="data" @clicked="onMenu">
          <template slot="icon">
            <i class="material-icons">person</i>
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
            <i class="material-icons">settings</i>
          </template>
          <ui-menuitem v-for="item in data" :item="item" @clicked="onMenu">
            <a :href="item.url">{{ item.label }}</a>
          </ui-menuitem>
        </ui-menu>
      </div>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <ui-apidoc name="menu"></ui-apidoc>
    <ui-apidoc name="menuitem"></ui-apidoc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{
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
