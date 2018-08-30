<template>
  <div :class="[$tt('body1'), 'page--not-found']">
    <section class="hero">
      <h3 :class="$tt('headline3')">404 Not Found</h3>
    </section>
    <div :class="$tt('body2')">
      <p>
        <ui-link href="/">Back</ui-link>
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
