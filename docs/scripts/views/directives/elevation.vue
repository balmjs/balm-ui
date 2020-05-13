<template>
  <ui-page type="directive" name="elevation" demoCount="2">
    <template #hero>
      <div class="hero-demos">
        <figure class="demo-surface" v-shadow="0">
          <figcaption>FLAT 0dp</figcaption>
        </figure>
        <figure class="demo-surface" v-shadow="8">
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
        <figure v-for="i in 25" :key="i" class="demo-surface" v-shadow="i - 1">
          <figcaption>
            {{ i - 1 }}dp ( <code>v-shadow="{{ i - 1 }}"</code>)
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
