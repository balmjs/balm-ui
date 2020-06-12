<template>
  <ui-page name="radio" demo-count="1">
    <template #hero>
      <ui-form-field>
        <ui-radio v-model="hero" v-a11y name="hero" value="0"></ui-radio>
        <ui-radio v-model="hero" v-a11y name="hero" value="1"></ui-radio>
        {{ hero }}
      </ui-form-field>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <ui-radio-demo></ui-radio-demo>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">Disabled</h6>
      <div class="demo">
        <ui-form-field>
          <ui-radio id="ex4a-radio1" v-model="hero" name="ex4a" value="0" disabled></ui-radio>
          <label for="ex4a-radio1">Disabled Radio 1</label>
        </ui-form-field>
        <ui-form-field>
          <ui-radio id="ex4a-radio2" v-model="hero" name="ex4a" value="1" disabled></ui-radio>
          <label for="ex4a-radio2">Disabled Radio 2</label>
        </ui-form-field>
      </div>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <ui-form-field>
          <ui-radio id="male" v-model="gender" name="sex" value="M"></ui-radio>
          <label for="male">Male</label>
        </ui-form-field>
        <ui-form-field>
          <ui-radio id="female" v-model="gender" name="sex" value="F"></ui-radio>
          <label for="female">Female</label>
        </ui-form-field>
        <p>Gender: {{ gender }}</p>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </ui-page>
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
