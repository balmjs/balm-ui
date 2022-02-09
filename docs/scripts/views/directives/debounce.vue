<template>
  <docs-page type="directive" name="debounce" demo-count="1" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">Debounce</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demos">
        <ui-button outlined @click="onClick">Click</ui-button>
        <ui-button v-debounce="config" raised>Click with debounce</ui-button>
        <ui-textfield-helper visible>
          NOTE: See console panel
        </ui-textfield-helper>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo() {
    return {
      subtitle: 'Debounce'
    };
  },
  data() {
    return {
      config: {
        callback: () => {
          this.onClick();
        }
      }
    };
  },
  methods: {
    onClick() {
      console.log('clicked');
    }
  }
};
</script>
