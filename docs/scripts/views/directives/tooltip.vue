<template>
  <ui-page type="directive" name="tooltip">
    <template #hero>
      <h1
        :class="$tt('headline1')"
        aria-describedby="hero-tooltip"
        v-tooltip="'Hello BalmUI'"
      >Tooltip</h1>
    </template>

    <!-- Content -->
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Tooltip'
  }
};
</script>
