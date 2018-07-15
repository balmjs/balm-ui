<template>
  <div class="demo--ripple">
    <section :class="['hero']" v-ripple></section>

    <section class="example">
      <div>
        <h2>Bounded</h2>
        <div class="demo-surface mdc-elevation--z2" v-ripple>
          Interact with me!
        </div>
      </div>
      <div>
        <h2>Bounded - CSS Only</h2>
        <div class="demo-surface mdc-elevation--z2" v-ripple:cssOnly>
          Interact with me!
        </div>
      </div>
    </section>
    <section class="example">
      <div>
        <h2>Unbounded</h2>
        <div class="demo-surface material-icons" v-ripple.unbounded>
          favorite
        </div>
      </div>
      <div>
        <h2>Unbounded - CSS Only</h2>
        <div class="demo-surface material-icons" v-ripple:cssOnly.unbounded>
          favorite
        </div>
      </div>
    </section>
    <section class="example">
      <div>
        <h2>Theme Styles</h2>
        <div
          class="mdc-theme--primary demo-surface mdc-elevation--z2" v-ripple="1">
          Primary
        </div>
        <div
          class="mdc-theme--secondary demo-surface mdc-elevation--z2" v-ripple="2">
          Secondary
        </div>
      </div>
      <div>
        <h2>Theme Styles - CSS Only</h2>
        <div
          class="mdc-theme--primary demo-surface mdc-elevation--z2" v-ripple:cssOnly="2">
          Primary
        </div>
        <div
          class="mdc-theme--secondary demo-surface mdc-elevation--z2" v-ripple:cssOnly="2">
          Secondary
        </div>
      </div>
    </section>
  </div>
</template>
