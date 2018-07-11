<template>
  <div class="demo--textfield">
    <section class="hero">
      <ui-textfield id="my-text-field">Text Field</ui-textfield>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">1. Example</h3>
    <section class="example">
      <h3>1.1 Full Functionality JS Component (Floating Label, Validation)</h3>
      <section id="demo-text-field-wrapper" :dir="controls.rtl ? 'rtl' : null">
        <ui-textfield id="full-func-text-field"
          helptextId="my-text-field-helper-text"
          :class="{'demo-text-field-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required">
          Email Address
        </ui-textfield>
        <ui-textfield-helptext v-if="controls.helperText"
          id="my-text-field-helper-text"
          :visible="controls.isVisible"
          :validMsg="controls.isValidMsg">
          Helper Text (possibly validation message)
        </ui-textfield-helptext>
      </section>
      <ui-textfield-controls
        :options="['disabled', 'rtl', 'dense', 'required', 'customColor', 'helperText']"
        v-model="controls"></ui-textfield-controls>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example">
      <h3>1.2 Password field with validation</h3>
      <ui-textfield type="password"
        required
        pattern=".{8,}"
        id="pw"
        helptextId="pw-validation-msg"
        :attrs="{autocomplete: 'current-password'}">
        Choose password
      </ui-textfield>
      <ui-textfield-helptext id="pw-validation-msg"
        visible
        validMsg>
        Must be at least 8 characters long
      </ui-textfield-helptext>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example">
      <h3>1.3 Outlined Text Field</h3>
      <div id="demo-tf-outlined-wrapper" :dir="controls.rtl ? 'rtl' : false">
        <ui-textfield id="tf-outlined-input"
          outlined
          helptextId="name-validation-message"
          :class="{'demo-text-field-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
          :attrs="{
            minlength: controls.min ? 8 : 0,
            maxlength: controls.max ? 10 : -1
          }">
          Your Name
        </ui-textfield>
        <ui-textfield-helptext id="name-validation-message" validMsg>
          {{ controls.min
              ? 'Must be at least 8 characters'
              : 'Helper Text (possibly validation message)' }}
        </ui-textfield-helptext>
      </div>
      <ui-textfield-controls idPrefix="outlined"
        :options="['disabled', 'rtl', 'dense', 'required', 'customColor', 'min', 'max']"
        v-model="controls"></ui-textfield-controls>
      <ui-accordion>
        <ui-markdown :code="code[3]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example" id="text-field-box-example">
      <h3>1.4 Text Field box</h3>
      <div id="demo-tf-box-wrapper" :dir="controls.rtl ? 'rtl' : false">
        <ui-textfield id="tf-box"
          box
          helptextId="box-name-validation-message"
          :class="{'demo-text-field-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
          :attrs="{
            minlength: controls.min ? 8 : 0
          }">
          Your Name
        </ui-textfield>
        <ui-textfield-helptext v-if="controls.helperText"
          id="box-name-validation-message"
          :visible="controls.isVisible">
          {{ controls.min
              ? 'Must be at least 8 characters'
              : 'Helper Text (possibly validation message)' }}
        </ui-textfield-helptext>
      </div>
      <ui-textfield-controls
        :options="['disabled', 'rtl', 'dense', 'required', 'customColor', 'helperText', 'min']"
        v-model="controls"></ui-textfield-controls>
      <ui-accordion>
        <ui-markdown :code="code[4]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example" id="demo-tf-icon-container">
      <h3>1.5 Text Field - Leading/Trailing icons</h3>
      <div id="demo-tf-box-leading-wrapper" :dir="controls.rtl ? 'rtl' : false">
        <ui-textfield id="tf-box-leading" box leadingIcon="event"
          :class="{'demo-text-field-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
          :leadingIconUnclickable="controls.unclickable"
          :trailingIconUnclickable="controls.unclickable"
          :attrs="{
            minlength: controls.min ? 8 : 0
          }">
          Your name
        </ui-textfield>
      </div>
      <div id="demo-tf-box-trailing-wrapper" :dir="controls.rtl ? 'rtl' : false">
        <ui-textfield id="tf-box-trailing" box trailingIcon="delete"
          :class="{'demo-text-field-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
          :leadingIconUnclickable="controls.unclickable"
          :trailingIconUnclickable="controls.unclickable"
          :attrs="{
            minlength: controls.min ? 8 : 0
          }">
          Your name
        </ui-textfield>
      </div>
      <div id="demo-tf-outlined-leading-wrapper" :dir="controls.rtl ? 'rtl' : false">
        <ui-textfield id="tf-outlined-leading" outlined leadingIcon
          :class="{'demo-text-field-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
          :leadingIconUnclickable="controls.unclickable"
          :trailingIconUnclickable="controls.unclickable"
          :attrs="{
            minlength: controls.min ? 8 : 0
          }">
          <template slot="before">
            <ui-icon>event</ui-icon>
          </template>
          Your other name
        </ui-textfield>
      </div>
      <div id="demo-tf-outlined-trailing-wrapper" :dir="controls.rtl ? 'rtl' : false">
        <ui-textfield id="tf-outlined-trailing" outlined trailingIcon
          :class="{'demo-text-field-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
          :leadingIconUnclickable="controls.unclickable"
          :trailingIconUnclickable="controls.unclickable"
          :attrs="{
            minlength: controls.min ? 8 : 0
          }">
          Your other name
          <template slot="after">
            <ui-icon>delete</ui-icon>
          </template>
        </ui-textfield>
      </div>
      <ui-textfield-controls
        :options="['disabled', 'rtl', 'dense', 'required', 'customColor', 'min', 'unclickable']"
        v-model="controls"></ui-textfield-controls>
      <ui-accordion>
        <ui-markdown :code="code[5]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example">
      <h3>1.6 Preventing FOUC</h3>
      <ui-textfield id="fouc" v-model="value">
        Label floating above
      </ui-textfield>
      <ui-accordion>
        <ui-markdown :code="code[6]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example">
      <h3>1.7 Textarea</h3>
      <section id="demo-text-field-textarea-wrapper" :dir="controls.rtl ? 'rtl' : false">
        <ui-textfield type="textarea" id="textarea" rows="8" cols="40"
          :class="{'demo-text-field-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          :required="controls.required">
          Textarea Label
        </ui-textfield>
      </section>
      <ui-textfield-controls
        :options="['disabled', 'rtl', 'required', 'customColor']"
        v-model="controls"></ui-textfield-controls>
      <ui-accordion>
        <ui-markdown :code="code[7]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example">
      <h3>1.8 Full-Width Text Field and Textarea</h3>
      <div id="demo-fullwidth-wrapper">
        <ui-textfield
          v-model="title"
          fullwidth
          placeholder="Subject"
          :class="{'demo-text-field-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required">
        </ui-textfield>
        <ui-textfield type="textarea"
          v-model="content"
          id="full-width-textarea"
          fullwidth
          class="full-width-textarea-example"
          rows="8"
          :class="{'demo-text-field-custom-colors': controls.customColor}"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required">
          Textarea Label
        </ui-textfield>
      </div>
      <ui-textfield-controls
        :options="['disabled', 'dense', 'required', 'customColor']"
        v-model="controls"></ui-textfield-controls>
      <ui-accordion>
        <ui-markdown :code="code[8]"></ui-markdown>
      </ui-accordion>
    </section>

    <h3 :class="$tt('headline3')">2. API</h3>
    <ui-apidocs name="textfield"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import UiTextfieldControls from '../../components/textfield-controls';

export default {
  metaInfo: {
    titleTemplate: '%s - Textfield'
  },
  components: {
    UiTextfieldControls
  },
  mixins: [snippets],
  data() {
    return {
      controls: {
        disabled: false,
        rtl: false,
        dense: false,
        required: false,
        customColor: false,
        helperText: false,
        isVisible: false,
        isValidMsg: false,
        min: false,
        max: false,
        unclickable: false
      },
      value: 'Pre-filled value',
      title: '',
      content: ''
    };
  },
  // methods: {
  //   onFocus(event) {
  //     console.log('onFocus', event);
  //   },
  //   onBlur({ valid, message }) {
  //     if (this.useValidation) {
  //       this.msg = message;
  //     } else {
  //       this.msg = 'Help Text (possibly validation message)';
  //     }
  //   },
  //   onInput(value) {
  //     console.log('onInput', value);
  //     this.text = value;
  //   },
  //   onKeydown(event) {
  //     console.log('onKeydown', event);
  //   },
  //   onEnter(value) {
  //     console.log('onEnter', value);
  //   }
  // },
  created() {
    this.showCode('textfield', 8);
  }
};
</script>
