<template>
  <div class="demo--ripple">
    <section :class="['hero']" v-ripple></section>

    <section class="example">
      <div>
        <h2>Bounded</h2>
        <div class="demo-surface" v-ripple v-shadow="2">
          Interact with me!
        </div>
      </div>
      <div>
        <h2>Bounded - CSS Only</h2>
        <div class="demo-surface" v-ripple:cssOnly v-shadow="2">
          Interact with me!
        </div>
      </div>
    </section>

    <section class="example">
      <div>
        <h2>Unbounded</h2>
        <div class="demo-surface" data-mdc-ripple-is-unbounded v-icon v-ripple.unbounded>
          favorite
        </div>
      </div>
      <div>
        <h2>Unbounded - CSS Only</h2>
        <div class="demo-surface" data-mdc-ripple-is-unbounded v-icon v-ripple:cssOnly.unbounded>
          favorite
        </div>
      </div>
    </section>

    <section class="example">
      <div>
        <h2>Theme Styles</h2>
        <div :class="['demo-surface', $themeColor('primary')]"
          v-ripple="1"
          v-shadow="1">
          Primary
        </div>
        <div :class="['demo-surface', $themeColor('secondary')]"
          v-ripple="2"
          v-shadow="2">
          Secondary
        </div>
      </div>
      <div>
        <h2>Theme Styles - CSS Only</h2>
        <div :class="['demo-surface', $themeColor('primary')]"
          v-ripple:cssOnly="1"
          v-shadow="2">
          Primary
        </div>
        <div :class="['demo-surface', $themeColor('secondary')]"
          v-ripple:cssOnly="2"
          v-shadow="2">
          Secondary
        </div>
      </div>
    </section>
  </div>
</template>
