<template>
  <div class="demo-badge">
    <div class="component-title">
      <h3>Badge</h3>
      <p>Small status descriptors for UI elements.</p>
    </div>

    <div class="snippet-demo">
      <ui-badge noBackground overlap :value="number">
        <b>Badge</b>
      </ui-badge>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-badge class="material-icons" overlap value="1">
          account_box
        </ui-badge>
      </div>
      <div class="snippet-demo">
        <ui-badge class="material-icons" overlap value="♥">
          account_box
        </ui-badge>
      </div>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-badge value="4">
          Inbox
        </ui-badge>
      </div>
      <div class="snippet-demo">
        <ui-badge value="♥">
          Mood
        </ui-badge>
      </div>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>Badge API</h4>
    <ui-tabs effect position="left" :active="docs.tab" @switched="onChange">
      <ui-panel tab="props">
        <ui-table
          class="docs-table"
          :data="docs.props.data"
          :thead="docs.props.thead"
          :tbody="docs.props.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="slots">
        <ui-table
          class="docs-table"
          :data="docs.slots.data"
          :thead="docs.slots.thead"
          :tbody="docs.slots.tbody">
        </ui-table>
      </ui-panel>
    </ui-tabs>
  </div>
</template>

<script>
import badgeDocs from '../apidocs/badge';

export default {
  data() {
    return {
      number: 0,
      timer: null,
      demoCount: 2,
      code: [],
      docs: {
        tab: 0,
        props: {
          data: badgeDocs.props,
          thead: this.$docs.props.thead,
          tbody: this.$docs.props.tbody
        },
        slots: {
          data: badgeDocs.slots,
          thead: this.$docs.slots.thead,
          tbody: this.$docs.slots.tbody
        }
      }
    };
  },
  methods: {
    onChange(tab) {
      this.docs.tab = tab;
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/badge/demo${i}.md`);
      this.code.push(code);
    }

    this.timer = setInterval(() => {
      if (this.number === 99) {
        this.number = '99+';
        clearInterval(this.timer);
      } else if (this.number > 9 && this.number < 90) {
        this.number += 10;
      } else {
        this.number++
      }
    }, 1000);
  }
};
</script>
