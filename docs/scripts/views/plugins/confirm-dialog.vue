<template>
  <ui-page type="plugin" name="confirm-dialog" demoCount="2">
    <template #hero>
      <h1 :class="$tt('headline1')">$confirm</h1>
    </template>

    <!-- Content -->
    <div class="example">
      <ui-button raised @click="show">Show confrim</ui-button>
    </div>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>

    <div class="example">
      <ui-button raised @click="showConfrim">Show confrim with icon</ui-button>
    </div>
    <ui-snippet :code="$store.demos[2]"></ui-snippet>
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Confirm Dialog'
  },
  methods: {
    show() {
      this.$confirm({
        message: 'Do you like BalmJS?',
        acceptText: 'Cool',
        cancelText: 'Good'
      }).then((result) => {
        if (result) {
          this.$alert('Thanks :)');
        }
      });
    },
    showConfrim() {
      this.$confirm({
        message: 'Do you like BalmJS?',
        state: 'help',
        acceptText: 'Cool',
        cancelText: 'Good'
      }).then((result) => {
        if (result) {
          this.$alert('Thanks :)');
        }
      });
    }
  }
};
</script>
