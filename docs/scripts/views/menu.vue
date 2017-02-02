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
          <ui-menuitem v-for="item in data" :item="item" @clicked="onMenu">
            <a :href="item.url">{{ item.label }}</a>
          </ui-menuitem>
        </ui-menu>
      </div>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>Menu API</h4>
    <ui-tabs effect position="left" :active="menu.tab" @switched="onChangeMenu">
      <ui-panel tab="props">
        <ui-table
          class="docs-table"
          :data="menu.docs.props.data"
          :thead="menu.docs.props.thead"
          :tbody="menu.docs.props.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="slots">
        <ui-table
          class="docs-table"
          :data="menu.docs.slots.data"
          :thead="menu.docs.slots.thead"
          :tbody="menu.docs.slots.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="events">
        <ui-table
          class="docs-table"
          :data="menu.docs.events.data"
          :thead="menu.docs.events.thead"
          :tbody="menu.docs.events.tbody">
        </ui-table>
      </ui-panel>
    </ui-tabs>

    <h4>Menuitem API</h4>
    <ui-tabs effect position="left" :active="menuitem.tab" @switched="onChangeMenuitem">
      <ui-panel tab="props">
        <ui-table
          class="docs-table"
          :data="menuitem.docs.props.data"
          :thead="menuitem.docs.props.thead"
          :tbody="menuitem.docs.props.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="slots">
        <ui-table
          class="docs-table"
          :data="menuitem.docs.slots.data"
          :thead="menuitem.docs.slots.thead"
          :tbody="menuitem.docs.slots.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="events">
        <ui-table
          class="docs-table"
          :data="menuitem.docs.events.data"
          :thead="menuitem.docs.events.thead"
          :tbody="menuitem.docs.events.tbody">
        </ui-table>
      </ui-panel>
    </ui-tabs>
  </div>
</template>

<script>
import menuDocs from '../apidocs/menu';
import menuitemDocs from '../apidocs/menuitem';

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
      code: [],
      menu: {
        tab: 0,
        docs: {
          props: {
            data: menuDocs.props,
            thead: this.$docs.props.thead,
            tbody: this.$docs.props.tbody
          },
          slots: {
            data: menuDocs.slots,
            thead: this.$docs.slots.thead,
            tbody: this.$docs.slots.tbody
          },
          events: {
            data: menuDocs.events,
            thead: this.$docs.events.thead,
            tbody: this.$docs.events.tbody
          }
        }
      },
      menuitem: {
        tab: 0,
        docs: {
          props: {
            data: menuitemDocs.props,
            thead: this.$docs.props.thead,
            tbody: this.$docs.props.tbody
          },
          slots: {
            data: menuitemDocs.slots,
            thead: this.$docs.slots.thead,
            tbody: this.$docs.slots.tbody
          },
          events: {
            data: menuitemDocs.events,
            thead: this.$docs.events.thead,
            tbody: this.$docs.events.tbody
          }
        }
      }
    };
  },
  methods: {
    onMenu(obj) {
      console.log(obj);
    },
    onChangeMenu(tab) {
      this.menu.tab = tab;
    },
    onChangeMenuitem(tab) {
      this.menuitem.tab = tab;
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
