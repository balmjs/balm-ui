<template>
  <div class="docs-textfield">
    <h4>{{ $t('textfield.basic') }}</h4>
    <ui-textfield label="Text..." :model="text1" @input.native="onInputChange('text1', $event)"></ui-textfield>
    <h4>{{ $t('textfield.pattern') }}</h4>
    <ui-textfield label="Number..." :model="text2" @input.native="onInputChange('text2', $event)"
      pattern="-?[0-9]*(\.[0-9]+)?"
      error="Input is not a number!"></ui-textfield>
    <h4>{{ $t('textfield.floating') }}</h4>
    <ui-textfield label="Floating Text..." :model="text3" @input.native="onInputChange('text3', $event)" labelFloating></ui-textfield>
    <h4>{{ $t('textfield.left') }}</h4>
    <ui-textfield label="Left Text..." :model="text4" @input.native="onInputChange('text4', $event)" labelLeft></ui-textfield>
    <h4>{{ $t('textfield.textarea') }}</h4>
    <ui-textfield type="textarea" label="Text lines..." :model="text5" @input.native="onInputChange('text5', $event)" :rows="3"></ui-textfield>
    <h4>{{ $t('textfield.icon') }}</h4>
    <ui-textfield id="search" :model="text6" @input.native="onInputChange('text6', $event)" expandable>
      <i slot="icon" class="material-icons">search</i>
    </ui-textfield>
    <h4>{{ $t('textfield.plus') }}</h4>
    <ui-textfield label="Plus Text..." :model="text7" @input.native="onInputChange('text7', $event)" plus>
      <template slot="plus">OKOKOK</template>
    </ui-textfield>
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
      text7: ''
    }
  },
  methods: {
    onInputChange(field, event) {
      this[field] = event.target.value;
    }
  }
};
</script>
