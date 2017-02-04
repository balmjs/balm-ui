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
        <template slot="plus">
          <a href="javascript:void(0)">Button</a>
        </template>
      </ui-textfield>
    </div>
    <ui-markdown :text="code[6]"></ui-markdown>

    <h4>{{ $t('textfield.leftplus') }}</h4>
    <div class="snippet-demo">
      <ui-textfield label="Plus Text..." :model="text8" @input.native="onInputChange('text8', $event)" labelLeft placeholder="Placeholder..." plus>
        <template slot="plus">
          <a href="javascript:void(0)">Link</a>
        </template>
      </ui-textfield>
    </div>
    <ui-markdown :text="code[7]"></ui-markdown>

    <ui-apidoc name="textfield"></ui-apidoc>
  </div>
</template>

<script>
export default {
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
      demoCount: 8,
      code: []
    }
  },
  methods: {
    onInputChange(field, event) {
      this[field] = event.target.value;
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
