<template>
  <ui-accordion>
    <ui-markdown code :text="code"></ui-markdown>
  </ui-accordion>
</template>

<script>
export default {
  name: 'ui-snippet',
  props: {
    code: String
  }
};
</script>
