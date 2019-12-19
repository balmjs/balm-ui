<template>
  <div :class="[$tt('body1'), 'page--not-found']">
    <section class="hero">
      <h2 :class="$tt('headline2')">404 Not Found</h2>
    </section>
    <div :class="$tt('body2')">
      <p>
        <ui-a href="/" v-ripple>Back</ui-a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Not Found'
  }
};
</script>
