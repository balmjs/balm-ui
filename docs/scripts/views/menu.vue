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
    <ui-code language="html" :code="code1.html"></ui-code>
    <ui-code language="js" :code="code1.js"></ui-code>

    <h4>{{ $t('menu.custom') }}</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-menu effect>
          <template slot="icon">
            Avatar
          </template>
          <ui-menuitem v-for="item in menu" :item="item" @clicked="onMenu">
            <a :href="item.url">{{ item.name }}</a>
          </ui-menuitem>
        </ui-menu>
      </div>
    </div>
    <ui-code language="html" :code="code2.html"></ui-code>
    <ui-code language="js" :code="code2.js"></ui-code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [{
        url:'/a',
        name: 'Item A'
      }, {
        url:'/b',
        name: 'Item B',
        disabled: true
      }, {
        url:'/c',
        name: 'Item C'
      }],
      code1: {
        html: '',
        js: ''
      },
      code2: {
        html: '',
        js: ''
      }
    };
  },
  methods: {
    onMenu(obj) {
      console.log(obj);
    }
  },
  async created() {
    for (let i = 1; i <= 2; i++) {
      let template = await this.$http.get(`${this.$domain}/snippets/menu/demo${i}-template.html`);
      let script = await this.$http.get(`${this.$domain}/snippets/menu/demo${i}-script.html`);
      this[`code${i}`] = {
        html: template.data,
        js: script.data
      };
    }
  }
};
</script>
