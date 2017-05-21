<template>
  <div class="demo--elevation">
    <section class="hero">
      <figure :class="['demo-surface', zSpace()]">
        <figcaption>FLAT 0dp</figcaption>
      </figure>
      <figure :class="['demo-surface', zSpace(4)]">
        <figcaption>RAISED 4dp</figcaption>
      </figure>
    </section>

    <section class="demo-surfaces">
      <figure :class="['demo-surface', zSpace()]">
        <figcaption>0dp (<code>mdc-elevation--z0</code>)</figcaption>
      </figure>
      <figure v-for="i in 24"
        :key="i"
        :class="['demo-surface', zSpace(i)]">
        <figcaption>{{ i }}dp (<code>mdc-elevation--z{{ i }}</code>)</figcaption>
      </figure>
    </section>
    <section>
      <div id="hover-el" :class="zSpace(2, true)">
        <p>Hover over or tap me for a transition</p>
      </div>
    </section>
  </div>
</template>
