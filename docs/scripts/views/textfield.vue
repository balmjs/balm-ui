<template>
  <div class="docs-textfield">
    <div class="component-title">
      <h3>Text Field</h3>
      <p>Textual input components.</p>
    </div>

    <h4>{{ $t('textfield.simple') }}</h4>
    <div class="snippet-demo">
      <ui-textfield :model="text1" @input.native="onInputChange('text1', $event)"
        label="Text..."></ui-textfield>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>{{ $t('textfield.pattern') }}</h4>
    <div class="snippet-demo">
      <ui-textfield :model="text2" @input.native="onInputChange('text2', $event)"
        label="Number..."
        pattern="-?[0-9]*(\.[0-9]+)?"
        error="Input is not a number!"></ui-textfield>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>{{ $t('textfield.floating') }}</h4>
    <div class="snippet-demo">
      <ui-textfield :model="text3" @input.native="onInputChange('text3', $event)"
        labelFloating
        label="Floating Text..."></ui-textfield>
    </div>
    <ui-markdown :text="code[2]"></ui-markdown>

    <h4>{{ $t('textfield.textarea') }}</h4>
    <div class="snippet-demo">
      <ui-textfield type="textarea" :model="text4" @input.native="onInputChange('text4', $event)"
        label="Text lines..."
        :rows="3"></ui-textfield>
    </div>
    <ui-markdown :text="code[3]"></ui-markdown>

    <h4>{{ $t('textfield.expandable') }}</h4>
    <div class="snippet-demo">
      <ui-textfield :model="text5" @input.native="onInputChange('text5', $event)"
        label="Expandable Text..."
        expandable
        id="search">
        <i slot="icon" class="material-icons">search</i>
      </ui-textfield>
    </div>
    <ui-markdown :text="code[4]"></ui-markdown>

    <h4>{{ $t('textfield.plus') }}</h4>
    <div class="snippet-demo">
      <ui-textfield :model="text6" @input.native="onInputChange('text6', $event)"
        label="Plus Text..."
        plus>
        <template slot="plus">
          <a href="javascript:void(0)">Button</a>
        </template>
      </ui-textfield>
    </div>
    <ui-markdown :text="code[5]"></ui-markdown>

    <ui-apidoc name="textfield"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: ''
    }
  },
  methods: {
    onInputChange(field, event) {
      this[field] = event.target.value;
    }
  },
  created() {
    this.showCode('textfield', 6);
  }
};
</script>
