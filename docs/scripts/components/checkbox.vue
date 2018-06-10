<template>
  <div>
    <div>
      <ui-checkbox
        :id="`${idPrefix}-checkbox`"
        :cssOnly="cssOnly"
        :alignEnd="alignEnd">
        Default checkbox
      </ui-checkbox>
      <div class="demo-toggle-group">
        <ui-button outlined @click="balmUI.onChange('alignEnd', !alignEnd)">
          Toggle <code>--align-end</code>
        </ui-button>
      </div>
    </div>
    <div>
      <ui-checkbox
        :id="`${idPrefix}-checkbox-disabled`"
        :cssOnly="cssOnly"
        :disabled="disabled">
        Disabled checkbox
      </ui-checkbox>
      <div class="demo-toggle-group">
        <ui-button outlined @click="balmUI.onChange('disabled', !disabled)">
          Toggle <code>disabled</code>
        </ui-button>
      </div>
    </div>
    <div v-if="!cssOnly">
      <ui-checkbox
        :id="`${idPrefix}-checkbox-indeterminate`"
        :cssOnly="cssOnly"
        :indeterminate="indeterminate">
        Indeterminate checkbox
      </ui-checkbox>
      <div class="demo-toggle-group">
        <ui-button outlined @click="balmUI.onChange('indeterminate', !indeterminate)">
          Toggle <code>indeterminate</code>
        </ui-button>
      </div>
    </div>
    <ui-checkbox block
      class="demo-checkbox--custom-all"
      :id="`${idPrefix}-checkbox-custom-all`"
      :cssOnly="cssOnly">
      Custom colored checkbox (stroke, fill, ripple, and focus)
    </ui-checkbox>
    <ui-checkbox block
      class="demo-checkbox--custom-stroke-and-fill"
      :id="`${idPrefix}-checkbox-custom-stroke-and-fill`"
      :cssOnly="cssOnly">
      Custom colored checkbox (stroke and fill only)
    </ui-checkbox>
  </div>
</template>

<script>
export default {
  props: {
    cssOnly: {
      type: Boolean,
      default: false
    },
    code: Array
  },
  data() {
    return {
      alignEnd: false,
      indeterminate: true,
      disabled: true
    };
  },
  computed: {
    categoryNumber() {
      return this.cssOnly ? 2 : 1;
    },
    idPrefix() {
      return this.cssOnly ? 'basic' : 'native-js';
    }
  }
};
</script>

<style scoped>
.demo-toggle-group {
  display: inline-block;
}

.mdc-button code {
  text-transform: none;
}
</style>
