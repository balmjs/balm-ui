<template>
  <docs-page name="segmented-button">
    <template #hero>
      <h1 :class="$tt('headline1')">
        <ui-segmented-buttons :items="heroItems"></ui-segmented-buttons>
      </h1>
    </template>

    <!-- Content -->
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Segmented Button'
  },
  data() {
    return {
      heroItems: [
        {
          icon: 'favorite',
          selected: true
        },
        {
          text: 'Sample Text'
        },
        {
          icon: 'favorite',
          text: 'Sample Text'
        }
      ]
    };
  }
};
</script>
