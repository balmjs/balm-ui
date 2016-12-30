<template>
  <div class="docs-textfield">
    <h4>{{ $t('textfield.simple') }}</h4>
    <ui-textfield label="Text..." :model="text1" @input.native="onInputChange('text1', $event)"></ui-textfield>
    <ui-code language="html" :code="code1.html"></ui-code>

    <h4>{{ $t('textfield.pattern') }}</h4>
    <ui-textfield label="Number..." :model="text2" @input.native="onInputChange('text2', $event)"
      pattern="-?[0-9]*(\.[0-9]+)?"
      error="Input is not a number!"></ui-textfield>
    <ui-code language="html" :code="code2.html"></ui-code>

    <h4>{{ $t('textfield.floating') }}</h4>
    <ui-textfield label="Floating Text..." :model="text3" @input.native="onInputChange('text3', $event)"
      labelFloating></ui-textfield>
    <ui-code language="html" :code="code3.html"></ui-code>

    <h4>{{ $t('textfield.left') }}</h4>
    <ui-textfield label="Left Text..." :model="text4" @input.native="onInputChange('text4', $event)"
      labelLeft
      placeholder="Placeholder..."></ui-textfield>
    <ui-code language="html" :code="code4.html"></ui-code>

    <h4>{{ $t('textfield.textarea') }}</h4>
    <ui-textfield type="textarea" label="Text lines..." :model="text5" @input.native="onInputChange('text5', $event)" :rows="3"></ui-textfield>
    <ui-code language="html" :code="code5.html"></ui-code>

    <h4>{{ $t('textfield.expandable') }}</h4>
    <ui-textfield id="search" :model="text6" @input.native="onInputChange('text6', $event)" expandable>
      <i slot="icon" class="material-icons">search</i>
    </ui-textfield>
    <ui-code language="html" :code="code6.html"></ui-code>

    <h4>{{ $t('textfield.plus') }}</h4>
    <ui-textfield label="Plus Text..." :model="text7" @input.native="onInputChange('text7', $event)" plus>
      <template slot="plus"><a href="javascript:void(0)">Button</a></template>
    </ui-textfield>
    <ui-code language="html" :code="code7.html"></ui-code>

    <h4>{{ $t('textfield.leftplus') }}</h4>
    <ui-textfield label="Plus Text..." :model="text8" @input.native="onInputChange('text8', $event)"
      labelLeft
      placeholder="Placeholder..."
      plus>
      <template slot="plus"><a href="javascript:void(0)">Link</a></template>
    </ui-textfield>
    <ui-code language="html" :code="code8.html"></ui-code>
  </div>
</template>

<script>
import UiCode from '../components/code';

export default {
  components: {
    UiCode
  },
  data() {
    return {
      code1: {
        html: require('../snippets/textfield/demo1-template.html')
      },
      text1: '',
      code2: {
        html: require('../snippets/textfield/demo2-template.html')
      },
      text2: '',
      code3: {
        html: require('../snippets/textfield/demo3-template.html')
      },
      text3: '',
      code4: {
        html: require('../snippets/textfield/demo4-template.html')
      },
      text4: '',
      code5: {
        html: require('../snippets/textfield/demo5-template.html')
      },
      text5: '',
      code6: {
        html: require('../snippets/textfield/demo6-template.html')
      },
      text6: '',
      code7: {
        html: require('../snippets/textfield/demo7-template.html')
      },
      text7: '',
      code8: {
        html: require('../snippets/textfield/demo8-template.html')
      },
      text8: ''
    }
  },
  methods: {
    onInputChange(field, event) {
      this[field] = event.target.value;
    }
  }
};
</script>
