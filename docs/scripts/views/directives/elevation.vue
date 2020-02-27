<template>
  <ui-page-structure type="directive" name="elevation" demoCount="2">
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
    <section class="demo-surfaces">
      <figure class="demo-surface" v-shadow="0">
        <figcaption>
          0dp (
          <code>mdc-elevation--z0</code>)
        </figcaption>
      </figure>
      <figure v-for="i in 24" :key="i" class="demo-surface" v-shadow="i">
        <figcaption>
          {{ i }}dp ( <code>mdc-elevation--z{{ i }}</code
          >)
        </figcaption>
      </figure>
    </section>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>

    <section>
      <div id="hover-el" v-shadow.transition="[2, 8]">
        <p>Hover over or tap me for a transition</p>
      </div>
    </section>
    <ui-snippet :code="$store.demos[2]"></ui-snippet>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Elevation'
  }
};
</script>
