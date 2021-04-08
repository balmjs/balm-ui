<template>
  <docs-page type="plugin" name="toast" demo-count="1" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">$toast</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <div class="demo-controls">
          <label>Toast Position:</label>
          <ui-form-field
            v-for="name in ['bottom', 'center', 'top']"
            :key="name"
          >
            <ui-radio
              v-model="position"
              :input-id="`position-${name}`"
              :value="name"
            ></ui-radio>
            <label :for="`position-${name}`">{{ name }}</label>
          </ui-form-field>
        </div>

        <ui-button raised @click="show">Show Toast</ui-button>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Toast'
  },
  data() {
    return {
      flag: false,
      position: 'bottom'
    };
  },
  methods: {
    show() {
      this.flag = !this.flag;
      this.$toast({
        message: this.flag ? 'Hello' : 'BalmUI',
        position: this.position
      });
    }
  }
};
</script>
