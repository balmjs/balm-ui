<template>
  <div :class="[$tt('body1'), 'page--not-found']">
    <header class="hero">
      <h2 :class="$tt('headline2')">404 Not Found</h2>
    </header>

    <div :class="$tt('body2')">
      <p>
        <ui-button @click="$router.replace({ name: 'home' })">Back</ui-button>
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
