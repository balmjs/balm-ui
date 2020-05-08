<template>
  <ui-page-structure name="collapse" demoCount="1" withoutCss>
    <template #hero>
      <ui-collapse v-model="show">
        <template #toggle>
          <ui-button :icon="show ? 'code' : 'settings_ethernet'">
            {{ show ? 'Hide' : 'Show' }} Code
          </ui-button>
        </template>

        <p>Collapse Content</p>
      </ui-collapse>
    </template>

    <div class="example"></div>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Collapse'
  },
  data() {
    return {
      // hero
      show: false
      // example
    };
  }
};
</script>
