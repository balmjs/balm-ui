<template>
  <div class="demo--elevation">
    <section class="hero">
      <figure :class="['demo-surface', $shadow()]">
        <figcaption>FLAT 0dp</figcaption>
      </figure>
      <figure :class="['demo-surface', $shadow(8)]">
        <figcaption>RAISED 8dp</figcaption>
      </figure>
      <figure :class="['demo-surface', 'demo-elevation--custom-color']">
        <figcaption>CUSTOM 16dp</figcaption>
      </figure>
    </section>

    <section class="demo-surfaces">
      <figure :class="['demo-surface', $shadow()]">
        <figcaption>0dp (<code>mdc-elevation--z0</code>)</figcaption>
      </figure>
      <figure v-for="i in 24"
        :key="i"
        :class="['demo-surface', $shadow(i)]">
        <figcaption>{{ i }}dp (<code>mdc-elevation--z{{ i }}</code>)</figcaption>
      </figure>
    </section>
    <section>
      <div id="hover-el" :class="$shadow(2, true)">
        <p>Hover over or tap me for a transition</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.demo-surfaces {
  padding-top: 48px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.demo-surface {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 100px;
  margin: 0 60px 80px;

  border-radius: 3px;
  font-size: 0.8em;
  color: #9e9e9e;
  background: white;
}

.hero .demo-surface {
  width: 120px;
  height: 48px;
  margin: 24px 24px;
  background-color: #212121;
  color: #f0f0f0;
}

#hover-el {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 4px;
}
</style>
