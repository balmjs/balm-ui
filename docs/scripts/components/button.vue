<template>
  <div>
    <fieldset>
      <legend :class="$tt('headline6')">Text Button</legend>
      <div>
        <ui-button :cssOnly="cssOnly" :disabled="useDisabled">Baseline</ui-button>
        <ui-button :cssOnly="cssOnly" dense :disabled="useDisabled">Dense</ui-button>
        <ui-button :cssOnly="cssOnly" class="secondary-text-button" :disabled="useDisabled">Secondary</ui-button>
        <ui-button :cssOnly="cssOnly" icon="favorite" :disabled="useDisabled">Icon</ui-button>
        <ui-button :cssOnly="cssOnly" :disabled="useDisabled">
          <template slot-scope="{ iconClass }">
            <svg-logo :class="iconClass"></svg-logo>
            SVG Icon
          </template>
        </ui-button>
        <ui-link :cssOnly="cssOnly">Link</ui-link>
      </div>
      <ui-accordion v-if="!cssOnly">
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </fieldset>

    <fieldset>
      <legend :class="$tt('headline6')">Raised Button</legend>
      <div>
        <ui-button :cssOnly="cssOnly" raised :disabled="useDisabled">Baseline</ui-button>
        <ui-button :cssOnly="cssOnly" raised dense :disabled="useDisabled">Dense</ui-button>
        <ui-button :cssOnly="cssOnly" raised class="secondary-filled-button" :disabled="useDisabled">Secondary</ui-button>
        <ui-button :cssOnly="cssOnly" raised icon="favorite" :disabled="useDisabled">Icon</ui-button>
        <ui-button :cssOnly="cssOnly" raised :disabled="useDisabled">
          <template slot-scope="{ iconClass }">
            <svg-logo :class="iconClass"></svg-logo>
            SVG Icon
          </template>
        </ui-button>
        <ui-link :cssOnly="cssOnly" raised>Link</ui-link>
      </div>
      <ui-accordion v-if="!cssOnly">
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </fieldset>

    <fieldset>
      <legend :class="$tt('headline6')">Unelevated Button (Experimental)</legend>
      <div>
        <ui-button :cssOnly="cssOnly" unelevated :disabled="useDisabled">Baseline</ui-button>
        <ui-button :cssOnly="cssOnly" unelevated dense :disabled="useDisabled">Dense</ui-button>
        <ui-button :cssOnly="cssOnly" unelevated class="secondary-filled-button" :disabled="useDisabled">Secondary</ui-button>
        <ui-button :cssOnly="cssOnly" unelevated icon="favorite" :disabled="useDisabled">Icon</ui-button>
        <ui-button :cssOnly="cssOnly" unelevated :disabled="useDisabled">
          <template slot-scope="{ iconClass }">
            <svg-logo :class="iconClass"></svg-logo>
            SVG Icon
          </template>
        </ui-button>
        <ui-link :cssOnly="cssOnly" unelevated>Link</ui-link>
      </div>
      <ui-accordion v-if="!cssOnly">
        <ui-markdown :code="code[3]"></ui-markdown>
      </ui-accordion>
    </fieldset>

    <fieldset>
      <legend :class="$tt('headline6')">Outlined Button (Experimental)</legend>
      <div>
        <ui-button :cssOnly="cssOnly" outlined :disabled="useDisabled">Baseline</ui-button>
        <ui-button :cssOnly="cssOnly" outlined dense :disabled="useDisabled">Dense</ui-button>
        <ui-button :cssOnly="cssOnly" outlined class="secondary-outlined-button" :disabled="useDisabled">Secondary</ui-button>
        <ui-button :cssOnly="cssOnly" outlined icon="favorite" :disabled="useDisabled">Icon</ui-button>
        <ui-button :cssOnly="cssOnly" outlined :disabled="useDisabled">
          <template slot-scope="{ iconClass }">
            <svg-logo :class="iconClass"></svg-logo>
            SVG Icon
          </template>
        </ui-button>
        <ui-link :cssOnly="cssOnly" outlined>Link</ui-link>
      </div>
      <ui-accordion v-if="!cssOnly">
        <ui-markdown :code="code[4]"></ui-markdown>
      </ui-accordion>
    </fieldset>

    <fieldset>
      <legend :class="$tt('headline6')">Custom button (Experimental)</legend>
      <div>
        <ui-button :cssOnly="cssOnly" unelevated class="big-round-corner-button" :disabled="useDisabled">Big Corner Radius</ui-button>
        <ui-button :cssOnly="cssOnly" outlined class="thick-outlined-button" :disabled="useDisabled">Thick Outline Width</ui-button>
      </div>
      <ui-accordion v-if="!cssOnly">
        <ui-markdown :code="code[5]"></ui-markdown>
      </ui-accordion>
    </fieldset>

    <fieldset>
      <legend :class="$tt('headline6')">Different Color Icons/Ink</legend>
      <div>
        <ui-button :cssOnly="cssOnly" unelevated class="demo-ink-color" icon="favorite" :disabled="useDisabled">Ink Color</ui-button>
        <ui-button :cssOnly="cssOnly" outlined class="demo-icon-color" icon="favorite" :disabled="useDisabled">Icon Color</ui-button>
      </div>
       <ui-accordion v-if="!cssOnly">
        <ui-markdown :code="code[6]"></ui-markdown>
      </ui-accordion>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: {
    cssOnly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    code: Array
  },
  data() {
    return {
      useDisabled: this.disabled
    };
  },
  watch: {
    disabled(val) {
      this.useDisabled = val;
    }
  }
};
</script>
