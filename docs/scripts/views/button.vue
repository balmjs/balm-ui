<template>
  <div class="demo-button">
    <div class="component-title">
      <h3>Button</h3>
      <p>Variations on Material Design buttons.</p>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button fab colored>
          <i class="material-icons">add</i>
        </ui-button>
      </div>
      <div class="snippet-demo">
        <ui-button fab colored effect>
          <i class="material-icons">add</i>
        </ui-button>
      </div>
    </div>
    <ui-code language="html" :code="code1.html"></ui-code>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button fab>
          <i class="material-icons">add</i>
        </ui-button>
      </div>
      <div class="snippet-demo">
        <ui-button fab effect>
          <i class="material-icons">add</i>
        </ui-button>
      </div>
      <div class="snippet-demo">
        <ui-button fab disabled>
          <i class="material-icons">add</i>
        </ui-button>
      </div>
    </div>
    <ui-code language="html" :code="code2.html"></ui-code>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button raised>Button</ui-button>
      </div>
      <div class="snippet-demo">
        <ui-button raised effect>Button</ui-button>
      </div>
      <div class="snippet-demo">
        <ui-button raised disabled>Button</ui-button>
      </div>
    </div>
    <ui-code language="html" :code="code3.html"></ui-code>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button raised colored>Button</ui-button>
      </div>
      <div class="snippet-demo">
        <ui-button raised accent>Button</ui-button>
      </div>
      <div class="snippet-demo">
        <ui-button raised accent effect>Button</ui-button>
      </div>
    </div>
    <ui-code language="html" :code="code4.html"></ui-code>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button>Button</ui-button>
      </div>
      <div class="snippet-demo">
        <ui-button effect>Button</ui-button>
      </div>
      <div class="snippet-demo">
        <ui-button disabled>Button</ui-button>
      </div>
    </div>
    <ui-code language="html" :code="code5.html"></ui-code>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button primary>Button</ui-button>
      </div>
      <div class="snippet-demo">
        <ui-button accent>Button</ui-button>
      </div>
    </div>
    <ui-code language="html" :code="code6.html"></ui-code>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button icon="mood"></ui-button>
      </div>
      <div class="snippet-demo">
        <ui-button icon="mood" colored></ui-button>
      </div>
    </div>
    <ui-code language="html" :code="code7.html"></ui-code>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button fab mini-fab>
          <i class="material-icons">add</i>
        </ui-button>
      </div>
      <div class="snippet-demo">
        <ui-button fab mini-fab colored>
          <i class="material-icons">add</i>
        </ui-button>
      </div>
    </div>
    <ui-code language="html" :code="code8.html"></ui-code>

    <div class="snippet-demo">
      <ui-button link>Link</ui-button>
    </div>
    <ui-code language="html" :code="code9.html"></ui-code>

    <h4>Button API</h4>
    <ui-tabs effect position="left" :active="tab" @switched="onChange">
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
import buttonDocs from '../apidocs/button';

export default {
  data() {
    return {
      code1: {
        html: require('../snippets/button/demo1-template.html')
      },
      code2: {
        html: require('../snippets/button/demo2-template.html')
      },
      code3: {
        html: require('../snippets/button/demo3-template.html')
      },
      code4: {
        html: require('../snippets/button/demo4-template.html')
      },
      code5: {
        html: require('../snippets/button/demo5-template.html')
      },
      code6: {
        html: require('../snippets/button/demo6-template.html')
      },
      code7: {
        html: require('../snippets/button/demo7-template.html')
      },
      code8: {
        html: require('../snippets/button/demo8-template.html')
      },
      code9: {
        html: require('../snippets/button/demo9-template.html')
      },
      tab: 0,
      docs: {
        props: {
          data: buttonDocs.props,
          thead: this.$docs.props.thead,
          tbody: this.$docs.props.tbody
        },
        slots: {
          data: buttonDocs.slots,
          thead: this.$docs.slots.thead,
          tbody: this.$docs.slots.tbody
        }
      }
    };
  },
  methods: {
    onChange(tab) {
      this.tab = tab;
    }
  }
};
</script>
