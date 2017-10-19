<template>
  <div class="demo--textfield">
    <section class="hero">
      <ui-textfield>Text Field</ui-textfield>
    </section>

    <section class="example interactive-demo">
      <h2>Full Functionality JS Component (Floating Label, Validation)</h2>
      <section id="demo-textfield-wrapper"
        :class="{'mdc-theme--dark': useDarkTheme}"
        :dir="useRTL ? 'rtl' : false">
        <ui-textfield
          id="my-textfield"
          name="email"
          helptextId="my-textfield-helptext"
          autocomplete="email"
          :disabled="useDisabled"
          :dense="useDense"
          :required="useRequired"
          :model="text"
          pattern="\w{4,8}"
          @focus="onFocus"
          @blur="onBlur"
          @input="onInput"
          @keydown="onKeydown"
          @enter="onEnter">Email Address</ui-textfield>
        <ui-textfield-helptext v-if="useHelptext" id="my-textfield-helptext"
          :show="showHelptext"
          :msg="msg">
        </ui-textfield-helptext>
      </section>
      <p>
        <ui-checkbox :model="useDisabled" @change="onChange('useDisabled', $event)">
          Disabled
        </ui-checkbox>
      </p>
      <p>
        <ui-checkbox :model="useRTL" @change="onChange('useRTL', $event)">
          RTL
        </ui-checkbox>
      </p>
      <p>
        <ui-checkbox :model="useDarkTheme" @change="onChange('useDarkTheme', $event)">
          Dark Theme
        </ui-checkbox>
      </p>
      <p>
        <ui-checkbox :model="useDense" @change="onChange('useDense', $event)">
          Dense
        </ui-checkbox>
      </p>
      <p>
        <ui-checkbox :model="useRequired" @change="onChange('useRequired', $event)">
          Required
        </ui-checkbox>
      </p>
      <p>
        <ui-checkbox :model="useHelptext" @change="onChange('useHelptext', $event)">
          Use Help Text
        </ui-checkbox>
      </p>
      <p>
        <ui-checkbox :disabled="!useHelptext" :model="showHelptext" @change="onChange('showHelptext', $event)">
          Make helper text persistent
        </ui-checkbox>
      </p>
      <p>
        <ui-checkbox :disabled="!useHelptext" :model="useValidation" @change="onChange('useValidation', $event)">
          Use helper text as validation message
        </ui-checkbox>
      </p>
    </section>

    <section class="example">
      <h2>Password field with validation</h2>
      <ui-textfield
        required
        pattern=".{8,}"
        type="password"
        id="pw"
        helptext="pw-validation-msg"
        autocomplete="current-password">Choose password</ui-textfield>
      <ui-textfield-helptext id="pw-validation-msg" show msg="Must be at least 8 characters long"></ui-textfield-helptext>
    </section>

    <section class="example">
      <h2>Textfield box</h2>
      <ui-textfield
        box
        required
        pattern=".{8,}"
        id="tf-box"
        helptext="name-validation-message">Your Name</ui-textfield>
      <ui-textfield-helptext id="name-validation-message" show msg="Must be at least 8 characters"></ui-textfield-helptext>
    </section>

    <section class="example">
      <h2>Textfield - Leading/Trailing icons</h2>
      <div id="demo-tf-box-leading-wrapper">
        <ui-textfield id="tf-box-leading" box leadingIcon="event">
          <!-- <ui-icon slot="before" tabindex="0">event</ui-icon> -->
          Your name
        </ui-textfield>
      </div>
      <div id="demo-tf-box-trailing-wrapper">
        <ui-textfield id="tf-box-trailing" box trailingIcon="delete">
          Your other name
          <!-- <ui-icon slot="after" tabindex="0">delete</ui-icon> -->
        </ui-textfield>
      </div>
    </section>

    <section class="example">
      <h2>CSS Only</h2>
      <ui-form-field alignEnd>
        <ui-textfield
          cssOnly
          id="css-only-textfield"
          placeholder="Name"></ui-textfield>
        <label for="css-only-textfield">Your name:</label>
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
        noWrap
        id="fouc"
        model="Pre-filled value"
        floatAbove
        label="Label floating above"></ui-textfield>
    </section>

    <section class="example">
      <h2>Textarea</h2>
      <section id="demo-textfield-textarea-wrapper">
        <ui-textfield type="textarea"
          rows="8" cols="40"
          id="textarea">Textarea Label</ui-textfield>
      </section>
    </section>

    <section class="example">
      <h2>CSS Only Textarea</h2>
      <section>
        <ui-textfield cssOnly
          type="textarea"
          rows="8" cols="40"
          id="textarea-css-only"
          placeholder="Enter something about yourself"></ui-textfield>
      </section>
    </section>

    <section class="example">
      <h2>Full-Width Textfield and Textarea</h2>
      <div id="demo-fullwidth-wrapper">
        <ui-textfield fullwidth placeholder="Subject"></ui-textfield>
        <ui-textfield fullwidth type="textarea"
          class="full-width-textarea-example"
          rows="8" cols="40">Textarea Label</ui-textfield>
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
      useDisabled: false,
      useRTL: false,
      useDarkTheme: false,
      useDense: false,
      useRequired: false,
      useHelptext: false,
      showHelptext: false,
      useValidation: false,
      text: '',
      msg: 'Help Text (possibly validation message)'
    };
  },
  methods: {
    onFocus(event) {
      console.log('onFocus', event);
    },
    onBlur({valid, message}) {
      if (this.useValidation) {
        this.msg = message;
      } else {
        this.msg = 'Help Text (possibly validation message)';
      }
    },
    onInput(value) {
      console.log('onInput', value);
      this.text = value;
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
