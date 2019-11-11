<template>
  <div>
    <fieldset>
      <div>
        <ui-button :cssOnly="cssOnly" :disabled="disabled">Text</ui-button>
        <ui-button outlined :cssOnly="cssOnly" :disabled="disabled">Outlined</ui-button>
        <ui-button raised :cssOnly="cssOnly" :disabled="disabled">Raised</ui-button>

        <ui-button icon="favorite" :cssOnly="cssOnly" :disabled="disabled">Icon</ui-button>
        <ui-button :cssOnly="cssOnly" :disabled="disabled">
          Trailing Icon
          <template slot="after" slot-scope="{ iconClass }">
            <svg-logo :class="iconClass"></svg-logo>
          </template>
        </ui-button>

        <ui-a :cssOnly="cssOnly">Link</ui-a>
      </div>
      <ui-accordion>
        <ui-markdown :code="cssOnly ? code[2] : code[1]"></ui-markdown>
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
  }
};
</script>
