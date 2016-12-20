<template>
  <div class="docs-textfield">
    <ui-textfield label="Text field" :model="text1" @input.native="onInputChange('text1', $event)"></ui-textfield>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text1: ''
    }
  },
  methods: {
    onInputChange(field, event) {

    }
  }
};
</script>
