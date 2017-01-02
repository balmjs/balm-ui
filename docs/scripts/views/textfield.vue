<template>
  <div class="docs-textfield">
    <div class="component-title">
      <h3>Text Field</h3>
      <p>Textual input components.</p>
    </div>

    <h4>{{ $t('textfield.simple') }}</h4>
    <div class="snippet-demo">
      <ui-textfield label="Text..." :model="text1" @input.native="onInputChange('text1', $event)"></ui-textfield>
    </div>
    <ui-code language="html" :code="code1.html"></ui-code>

    <h4>{{ $t('textfield.pattern') }}</h4>
    <div class="snippet-demo">
      <ui-textfield label="Number..." :model="text2" @input.native="onInputChange('text2', $event)" pattern="-?[0-9]*(\.[0-9]+)?" error="Input is not a number!"></ui-textfield>
    </div>
    <ui-code language="html" :code="code2.html"></ui-code>

    <h4>{{ $t('textfield.floating') }}</h4>
    <div class="snippet-demo">
      <ui-textfield labelFloating label="Floating Text..." :model="text3" @input.native="onInputChange('text3', $event)"></ui-textfield>
    </div>
    <ui-code language="html" :code="code3.html"></ui-code>

    <h4>{{ $t('textfield.left') }}</h4>
    <div class="snippet-demo">
      <ui-textfield labelLeft label="Left Text..." :model="text4" @input.native="onInputChange('text4', $event)" placeholder="Placeholder..."></ui-textfield>
    </div>
    <ui-code language="html" :code="code4.html"></ui-code>

    <h4>{{ $t('textfield.textarea') }}</h4>
    <div class="snippet-demo">
      <ui-textfield type="textarea" label="Text lines..." :model="text5" @input.native="onInputChange('text5', $event)" :rows="3"></ui-textfield>
    </div>
    <ui-code language="html" :code="code5.html"></ui-code>

    <h4>{{ $t('textfield.expandable') }}</h4>
    <div class="snippet-demo">
      <ui-textfield expandable id="search" :model="text6" @input.native="onInputChange('text6', $event)">
        <i slot="icon" class="material-icons">search</i>
      </ui-textfield>
    </div>
    <ui-code language="html" :code="code6.html"></ui-code>

    <h4>{{ $t('textfield.plus') }}</h4>
    <div class="snippet-demo">
      <ui-textfield plus label="Plus Text..." :model="text7" @input.native="onInputChange('text7', $event)">
        <template slot="plus"><a href="javascript:void(0)">Button</a></template>
      </ui-textfield>
    </div>
    <ui-code language="html" :code="code7.html"></ui-code>

    <h4>{{ $t('textfield.leftplus') }}</h4>
    <div class="snippet-demo">
      <ui-textfield label="Plus Text..." :model="text8" @input.native="onInputChange('text8', $event)" labelLeft placeholder="Placeholder..." plus>
        <template slot="plus"><a href="javascript:void(0)">Link</a></template>
      </ui-textfield>
    </div>
    <ui-code language="html" :code="code8.html"></ui-code>

    <h4>Textfield API</h4>
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
      <ui-panel tab="events">
        <ui-table
          class="docs-table"
          :data="docs.events.data"
          :thead="docs.events.thead"
          :tbody="docs.events.tbody">
        </ui-table>
      </ui-panel>
    </ui-tabs>
  </div>
</template>

<script>
import textfieldDocs from '../apidocs/textfield';

export default {
  data() {
    return {
      code1: {
        html: ''
      },
      text1: '',
      code2: {
        html: ''
      },
      text2: '',
      code3: {
        html: ''
      },
      text3: '',
      code4: {
        html: ''
      },
      text4: '',
      code5: {
        html: ''
      },
      text5: '',
      code6: {
        html: ''
      },
      text6: '',
      code7: {
        html: ''
      },
      text7: '',
      code8: {
        html: ''
      },
      text8: '',
      tab: 0,
      docs: {
        props: {
          data: textfieldDocs.props,
          thead: this.$docs.props.thead,
          tbody: this.$docs.props.tbody
        },
        slots: {
          data: textfieldDocs.slots,
          thead: this.$docs.slots.thead,
          tbody: this.$docs.slots.tbody
        },
        events: {
          data: textfieldDocs.events,
          thead: this.$docs.events.thead,
          tbody: this.$docs.events.tbody
        }
      }
    }
  },
  methods: {
    onInputChange(field, event) {
      this[field] = event.target.value;
    },
    onChange(tab) {
      this.tab = tab;
    }
  },
  async created() {
    for (let i = 1; i <= 8; i++) {
      let template = await this.$http.get(`${this.$domain}/snippets/textfield/demo${i}-template.html`);
      this[`code${i}`] = {
        html: template.data
      };
    }
  }
};
</script>
