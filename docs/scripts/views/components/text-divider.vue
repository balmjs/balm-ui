<template>
  <ui-page name="text-divider" demo-count="2">
    <template #hero>
      <div class="hero-demo">
        <ui-text-divider :type="typeOption">With Text</ui-text-divider>
      </div>
      <div class="hero-options">
        <ui-select v-model="typeOption" class="hero-option" :options="TypeOptions">Type</ui-select>
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
      <div class="demo">
        <ui-text-divider>Text</ui-text-divider>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Vertical Divider</h6>
      <div class="demo">
        <ui-text-divider type="|" class="vertical-divider-demo">
          <template #left>
            <div class="block red"></div>
          </template>
          or
          <template #right>
            <div class="block blue"></div>
          </template>
        </ui-text-divider>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </ui-page>
</template>

<script>
const TypeOptions = [
  {
    label: 'Horizontal',
    value: 0
  },
  {
    label: 'Vertical',
    value: 1
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Text Divider'
  },
  data() {
    return {
      // hero
      TypeOptions,
      typeOption: 0
    };
  }
};
</script>
