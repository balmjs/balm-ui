<template>
  <ui-page-structure name="checkbox" demoCount="2">
    <template #hero>
      <ui-form-field>
        <ui-checkbox v-a11y id="hero-checkbox"></ui-checkbox>
        <label for="hero-checkbox">Checkbox</label>
      </ui-form-field>
    </template>

    <!-- Content -->
    <section class="example">
      <ui-checkbox-demo></ui-checkbox-demo>
    </section>

    <hr />

    <section class="example">
      <p>Single checkbox, boolean value:</p>
      <!-- v-model -->
      <ui-form-field>
        <ui-checkbox id="checkbox" v-model="checked"></ui-checkbox>
        <label for="checkbox">{{ checked }}</label>
      </ui-form-field>
      <!-- model -->
      <!-- <ui-form-field>
          <ui-checkbox id="checkbox" :model="checked" @change="$balmUI.onChange('checked', $event)"></ui-checkbox>
          <label for="checkbox">{{checked}}</label>
        </ui-form-field>-->
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="example">
      <p>Multiple checkboxes, bound to the same Array: {{ checkedNames }}</p>
      <!-- v-model -->
      <ui-form-field>
        <ui-checkbox
          id="jack"
          value="Jack"
          v-model="checkedNames"
        ></ui-checkbox>
        <label for="jack">Jack</label>
      </ui-form-field>
      <ui-form-field>
        <ui-checkbox
          id="john"
          value="John"
          v-model="checkedNames"
        ></ui-checkbox>
        <label for="john">John</label>
      </ui-form-field>
      <ui-form-field>
        <ui-checkbox
          id="mike"
          value="Mike"
          v-model="checkedNames"
        ></ui-checkbox>
        <label for="mike">Mike</label>
      </ui-form-field>
      <!-- model -->
      <!-- <ui-form-field>
          <ui-checkbox
            id="jack"
            value="Jack"
            :model="checkedNames"
            @change="$balmUI.onChange('checkedNames', $event)"
          ></ui-checkbox>
          <label for="jack">Jack</label>
        </ui-form-field>
        <ui-form-field>
          <ui-checkbox
            id="john"
            value="John"
            :model="checkedNames"
            @change="$balmUI.onChange('checkedNames', $event)"
          ></ui-checkbox>
          <label for="john">John</label>
        </ui-form-field>
        <ui-form-field>
          <ui-checkbox
            id="mike"
            value="Mike"
            :model="checkedNames"
            @change="$balmUI.onChange('checkedNames', $event)"
          ></ui-checkbox>
          <label for="mike">Mike</label>
        </ui-form-field>-->
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </ui-page-structure>
</template>

<script>
import UiCheckboxDemo from '@/demos/checkbox';

export default {
  metaInfo: {
    titleTemplate: '%s - Checkbox'
  },
  components: {
    UiCheckboxDemo
  },
  data() {
    return {
      // demo
      checked: false,
      checkedNames: []
    };
  }
};
</script>
