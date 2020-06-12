<template>
  <ui-page type="directive" name="elevation" demo-count="2">
    <template #hero>
      <div class="hero-demos">
        <figure v-shadow="0" class="demo-surface">
          <figcaption>FLAT 0dp</figcaption>
        </figure>
        <figure v-shadow="8" class="demo-surface">
          <figcaption>RAISED 8dp</figcaption>
        </figure>
        <figure :class="['demo-surface', 'demo-elevation--custom-color']">
          <figcaption>CUSTOM 16dp</figcaption>
        </figure>
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <figure v-for="i in 25" :key="i" v-shadow="i - 1" class="demo-surface">
          <figcaption>
            {{ i - 1 }}dp (
            <code>v-shadow="{{ i - 1 }}"</code>)
          </figcaption>
        </figure>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <div id="hover-el" v-shadow.transition="[2, 8]">
          <p>Hover over or tap me for a transition</p>
        </div>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Elevation'
  }
};
</script>
