<template>
  <div class="demo--textfield">
    <section class="hero">
      <ui-textfield>Text Field</ui-textfield>
    </section>

    <section class="example interactive-demo">
      <h2>Full Functionality JS Component (Floating Label, Validation, Autocomplete)</h2>
      <section id="demo-textfield-wrapper">
        <ui-textfield
          id="my-textfield"
          name="email"
          helptext="my-textfield-helptext"
          autocomplete="email"
          @focus="onFocus"
          @blur="onBlur"
          @input="onInput"
          @keydown="onKeydown"
          @enter="onEnter">Email Address</ui-textfield>
        <ui-textfield-helptext id="my-textfield-helptext">
          Help Text (possibly validation message)
        </ui-textfield-helptext>
      </section>
    </section>
    <section class="example">
      <h2>Password field with validation</h2>
      <ui-textfield
        required
        pattern=".{8,}"
        type="password"
        id="pw"
        helptext="pw-validation-msg"
        autocomplete="current-password">Choose password*</ui-textfield>
      <ui-textfield-helptext id="pw-validation-msg" show text="Must be at least 8 characters long"></ui-textfield-helptext>
    </section>
    <section class="example">
      <h2>Textfield box</h2>
      <ui-textfield
        box
        id="tf-box"
        helptext="name-validation-message"
        required>Your Name*</ui-textfield>
      <ui-textfield-helptext id="name-validation-message" show text="Must provide a name"></ui-textfield-helptext>
    </section>
    <section class="example">
      <h2>CSS Only</h2>
      <ui-form-field>
        <label for="css-only-textfield">Your name:</label>
        <ui-textfield
          cssOnly
          id="css-only-textfield"
          placeholder="Name"></ui-textfield>
      </ui-form-field>
    </section>
    <section class="example">
      <h2>CSS Only Textfield box</h2>
      <ui-form-field>
        <label for="css-only-textfield-box">Your name:</label>
        <ui-textfield
          cssOnly
          box
          id="css-only-textfield-box"
          placeholder="Name"></ui-textfield>
      </ui-form-field>
    </section>
    <section class="example">
      <h2>Preventing FOUC</h2>
      <ui-textfield
        id="fouc"
        model="Pre-filled value"
        floatAbove
        label="Label
        floating above"></ui-textfield>
    </section>
    <section class="example">
      <h2>Multi-line Textfields</h2>
      <section id="demo-textfield-multiline-wrapper">
        <ui-textfield type="textarea"
          rows="8" cols="40"
          id="multi-line"
          label="Multi-line Label"></ui-textfield>
      </section>
    </section>
    <section class="example">
      <h2>Multi-line Textfields - CSS Only</h2>
      <div>
        <label for="css-only-multiline">About you:</label>
        <ui-textfield cssOnly
          type="textarea"
          id="css-only-multiline"
          rows="8" cols="40"
          placeholder="Tell the world something about yourself!"></ui-textfield>
      </div>
    </section>
    <section class="example">
      <h2>Full-Width Textfields</h2>
      <div id="demo-fullwidth-wrapper">
        <ui-textfield fullwidth placeholder="Subject" dense></ui-textfield>
        <ui-textfield fullwidth type="textarea" placeholder="Message"
          rows="8" cols="40" dense></ui-textfield>
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
