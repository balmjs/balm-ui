<template>
  <docs-page name="checkbox" demo-count="2">
    <template #hero>
      <ui-form-field>
        <ui-checkbox
          v-model="hero"
          v-a11y
          input-id="hero-checkbox"
        ></ui-checkbox>
        <label for="hero-checkbox">Checkbox</label>
      </ui-form-field>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <ui-form-field :align-end="alignEnd">
          <ui-checkbox input-id="basic-checkbox"></ui-checkbox>
          <label for="basic-checkbox">Default checkbox</label>
        </ui-form-field>
        <ui-button outlined @click="$balmUI.onChange('alignEnd', !alignEnd)">
          Toggle
          <code>--align-end</code>
        </ui-button>
      </div>
      <div class="demo">
        <ui-form-field>
          <ui-checkbox
            input-id="basic-checkbox-disabled"
            :disabled="disabled"
          ></ui-checkbox>
          <label for="basic-checkbox-disabled">Disabled checkbox</label>
        </ui-form-field>
        <ui-button outlined @click="$balmUI.onChange('disabled', !disabled)">
          Toggle
          <code>disabled</code>
        </ui-button>
      </div>
      <div class="demo">
        <ui-form-field>
          <ui-checkbox
            input-id="basic-checkbox-indeterminate"
            :indeterminate="indeterminate"
          ></ui-checkbox>
          <label for="basic-checkbox-indeterminate">
            Indeterminate checkbox
          </label>
        </ui-form-field>
        <ui-button
          outlined
          @click="$balmUI.onChange('indeterminate', !indeterminate)"
        >
          Toggle
          <code>indeterminate</code>
        </ui-button>
      </div>
      <div class="demo">
        <ui-form-field class="demo-checkbox--custom-all">
          <ui-checkbox input-id="basic-checkbox-custom-all"></ui-checkbox>
          <label for="basic-checkbox-custom-all">
            Custom colored checkbox (stroke, fill, ripple, and focus)
          </label>
        </ui-form-field>
      </div>
      <div class="demo">
        <ui-form-field class="demo-checkbox--custom-stroke-and-fill">
          <ui-checkbox
            input-id="basic-checkbox-custom-stroke-and-fill"
          ></ui-checkbox>
          <label for="basic-checkbox-custom-stroke-and-fill">
            Custom colored checkbox (stroke and fill only)
          </label>
        </ui-form-field>
      </div>
    </section>

    <section class="demo-wrapper">
      <p>Single checkbox, boolean value:</p>
      <div class="demo">
        <ui-form-field>
          <ui-checkbox v-model="checked" input-id="checkbox"></ui-checkbox>
          <label for="checkbox">{{ checked }}</label>
        </ui-form-field>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <p>Multiple checkboxes, bound to the same Array: {{ checkedNames }}</p>
      <div class="demo">
        <ui-form-field>
          <ui-checkbox
            v-model="checkedNames"
            input-id="jack"
            value="Jack"
          ></ui-checkbox>
          <label for="jack">Jack</label>
        </ui-form-field>
        <ui-form-field>
          <ui-checkbox
            v-model="checkedNames"
            input-id="john"
            value="John"
          ></ui-checkbox>
          <label for="john">John</label>
        </ui-form-field>
        <ui-form-field>
          <ui-checkbox
            v-model="checkedNames"
            input-id="mike"
            value="Mike"
          ></ui-checkbox>
          <label for="mike">Mike</label>
        </ui-form-field>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Checkbox'
  },
  data() {
    return {
      // hero
      hero: false,
      // demo
      alignEnd: false,
      indeterminate: true,
      disabled: true,
      checked: false,
      checkedNames: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.hero = true;
    }, 1e3);
  }
};
</script>
