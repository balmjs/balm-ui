<template>
  <div class="docs-textfield">
    <h1>MDC Textfield</h1>

    <section class="interactive-demo">
      <h2>Full Functionality JS Component (Floating Label, Validation, Autocomplete)</h2>
      <section id="demo-textfield-wrapper">
        <ui-textfield id="my-textfield" name="email"
          label="Email Address"
          helptext="my-textfield-helptext"
          autocomplete="email"
          @focus="onFocus"
          @blur="onBlur"
          @input="onInput"
          @keydown="onKeydown"
          @enter="onEnter"></ui-textfield>
        <ui-textfield-helptext id="my-textfield-helptext">Help Text (possibly validation message)</ui-textfield-helptext>
      </section>
    </section>

    <section>
      <h2>Password field with validation</h2>
      <ui-textfield required pattern=".{8,}" type="password" id="pw"
        helptext="pw-validation-msg" autocomplete="current-password"
        label="Choose password"></ui-textfield>
      <ui-textfield-helptext id="pw-validation-msg" persistent validationMsg="Must be at least 8 characters long"></ui-textfield-helptext>
    </section>

    <section>
      <h2>CSS Only</h2>
      <ui-textfield id="css-only-textfield" placeholder="Name" label="Your name:"></ui-textfield>
    </section>
    <section>
      <h2>Preventing FOUC</h2>
      <ui-textfield id="fouc" value="Pre-filled value" floatAbove label="Label floating above"></ui-textfield>
    </section>
    <section>
      <h2>Multi-line Textfields</h2>
      <section id="demo-textfield-multiline-wrapper" style="overflow:hidden;">
        <ui-textfield type="textarea" rows="8" cols="40" id="multi-line" label="Multi-line Label"></ui-textfield>
      </section>
    </section>
    <section>
      <h2>Multi-line Textfields - CSS Only</h2>
      <ui-textfield type="textarea" id="css-only-multiline"
                  rows="8" cols="40"
                  label="About you:"
                  placeholder="Tell the world something about yourself!"></ui-textfield>
    </section>
    <section>
      <h2>Full-Width Textfields</h2>
      <div id="demo-fullwidth-wrapper">
        <ui-textfield fullwidth placeholder="Subject" dense></ui-textfield>
        <ui-textfield fullwidth type="textarea" placeholder="Message" rows="8" cols="40" dense></ui-textfield>
      </div>
    </section>

    <!-- <ui-apidoc name="textfield"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {

    };
  },
  methods: {
    onFocus(event) {
      console.log('onFocus', event);
    },
    onBlur(event) {
      console.log('onBlur', event);
    },
    onInput(value) {
      console.log('onInput', value);
    },
    onKeydown(event) {
      console.log('onKeydown', event);
    },
    onEnter(value) {
      console.log('onEnter', value);
    }
  },
  created() {
    // this.showCode('textfield', 6);
  }
};
</script>
