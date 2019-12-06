<template>
  <div>
    <fieldset>
      <div>
        <ui-button :disabled="disabled">Text</ui-button>
        <ui-button outlined :disabled="disabled">Outlined</ui-button>
        <ui-button raised :disabled="disabled">Raised</ui-button>

        <ui-button icon="favorite" :disabled="disabled">Icon</ui-button>
        <ui-button :disabled="disabled">
          Trailing Icon
          <template slot="after" slot-scope="{ iconClass }">
            <svg-logo :class="iconClass"></svg-logo>
          </template>
        </ui-button>

        <ui-a>Link</ui-a>
      </div>
      <ui-accordion>
        <ui-markdown :code="code"></ui-markdown>
      </ui-accordion>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    code: Array
  }
};
</script>
