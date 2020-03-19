<template>
  <ui-page-structure type="plugin" name="confirm" demoCount="1">
    <template #hero>
      <h1 :class="$tt('headline1')">$confirm</h1>
    </template>

    <!-- Content -->
    <div class="example">
      <ui-button raised @click="show">Show Confrim</ui-button>
    </div>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Confirm'
  },
  methods: {
    show() {
      this.$confirm({
        message: 'Do you like BalmJS?',
        acceptText: 'Cool',
        cancelText: 'Good'
      }).then(result => {
        if (result) {
          this.$alert('Thanks :)');
        }
      });
    }
  }
};
</script>
