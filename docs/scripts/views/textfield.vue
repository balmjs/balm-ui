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
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>{{ $t('textfield.pattern') }}</h4>
    <div class="snippet-demo">
      <ui-textfield label="Number..." :model="text2" @input.native="onInputChange('text2', $event)" pattern="-?[0-9]*(\.[0-9]+)?" error="Input is not a number!"></ui-textfield>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>{{ $t('textfield.floating') }}</h4>
    <div class="snippet-demo">
      <ui-textfield labelFloating label="Floating Text..." :model="text3" @input.native="onInputChange('text3', $event)"></ui-textfield>
    </div>
    <ui-markdown :text="code[2]"></ui-markdown>

    <h4>{{ $t('textfield.left') }}</h4>
    <div class="snippet-demo">
      <ui-textfield labelLeft label="Left Text..." :model="text4" @input.native="onInputChange('text4', $event)" placeholder="Placeholder..."></ui-textfield>
    </div>
    <ui-markdown :text="code[3]"></ui-markdown>

    <h4>{{ $t('textfield.textarea') }}</h4>
    <div class="snippet-demo">
      <ui-textfield type="textarea" label="Text lines..." :model="text5" @input.native="onInputChange('text5', $event)" :rows="3"></ui-textfield>
    </div>
    <ui-markdown :text="code[4]"></ui-markdown>

    <h4>{{ $t('textfield.expandable') }}</h4>
    <div class="snippet-demo">
      <ui-textfield expandable id="search" :model="text6" @input.native="onInputChange('text6', $event)">
        <i slot="icon" class="material-icons">search</i>
      </ui-textfield>
    </div>
    <ui-markdown :text="code[5]"></ui-markdown>

    <h4>{{ $t('textfield.plus') }}</h4>
    <div class="snippet-demo">
      <ui-textfield plus label="Plus Text..." :model="text7" @input.native="onInputChange('text7', $event)">
        <template slot="plus"><a href="javascript:void(0)">Button</a></template>
      </ui-textfield>
    </div>
    <ui-markdown :text="code[6]"></ui-markdown>

    <h4>{{ $t('textfield.leftplus') }}</h4>
    <div class="snippet-demo">
      <ui-textfield label="Plus Text..." :model="text8" @input.native="onInputChange('text8', $event)" labelLeft placeholder="Placeholder..." plus>
        <template slot="plus"><a href="javascript:void(0)">Link</a></template>
      </ui-textfield>
    </div>
    <ui-markdown :text="code[7]"></ui-markdown>

    <h4>{{ $t('textfield.expand') }}</h4>
    <div class="snippet-demo">
      <ui-autocomplete label="Expand Text... (type 'a' or 'b')"
        :model="text9"
        :url="url"
        :params="params"
        :suggestion="suggestion"
        @input.native="onInputChange('text9', $event)"
        @response="onSuggest"
        @enter="onInputEnter"></ui-autocomplete>
    </div>

    <h4>Textfield API</h4>
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
import UiAutocomplete from '../components/autocomplete';

export default {
  components: {
    UiAutocomplete
  },
  data() {
    return {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
      text8: '',
      url: `${this.$domain}/data/autocomplete.json`,
      params: {},
      text9: '',
      suggestion: [],
      demoCount: 8,
      code: [],
      docs: {
        tab: 0,
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
      // autocomplete
      if (field === 'text9') {
        this.params = {
          text: this[field]
        };
      }
    },
    onInputEnter(val) {
      this.text9 = val;
    },
    onSuggest(data) {
      this.suggestion = data[this.text9] ? data[this.text9].map((item, index) => {
        return {
          active: index === 0,
          value: item
        };
      }) : [];
    },
    onChange(tab) {
      this.docs.tab = tab;
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/textfield/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>
