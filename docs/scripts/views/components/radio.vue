<template>
  <ui-page-structure name="radio" demoCount="1">
    <template #hero>
      <ui-form-field>
        <ui-radio v-a11y name="hero" value="0" v-model="hero"></ui-radio>
        <ui-radio v-a11y name="hero" value="1" v-model="hero"></ui-radio>
        {{ hero }}
      </ui-form-field>
    </template>

    <!-- Content -->
    <section class="example">
      <ui-radio-demo></ui-radio-demo>
    </section>

    <section class="example">
      <h2>Disabled</h2>
      <div>
        <ui-form-field>
          <ui-radio
            id="ex4a-radio1"
            name="ex4a"
            value="0"
            v-model="hero"
            disabled
          ></ui-radio>
          <label for="ex4a-radio1">Disabled Radio 1</label>
        </ui-form-field>
        <ui-form-field>
          <ui-radio
            id="ex4a-radio2"
            name="ex4a"
            value="1"
            v-model="hero"
            disabled
          ></ui-radio>
          <label for="ex4a-radio2">Disabled Radio 2</label>
        </ui-form-field>
      </div>
    </section>

    <section class="example">
      <ui-form-field>
        <ui-radio id="male" name="sex" value="M" v-model="gender"></ui-radio>
        <label for="male">Male</label>
      </ui-form-field>
      <ui-form-field>
        <ui-radio id="female" name="sex" value="F" v-model="gender"></ui-radio>
        <label for="female">Female</label>
      </ui-form-field>
      <p>Gender: {{ gender }}</p>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </ui-page-structure>
</template>

<script>
import UiRadioDemo from '@/demos/radio';

export default {
  metaInfo: {
    titleTemplate: '%s - Radio'
  },
  components: {
    UiRadioDemo
  },
  data() {
    return {
      // hero
      hero: 0,
      // demo
      gender: ''
    };
  },
  mounted() {
    setTimeout(() => {
      this.hero = 1;
    }, 1e3);
  }
};
</script>
