<template>
  <div class="demo--image-list">
    <section class="hero">
      <ui-image-list class="hero-image-list">
        <ui-image-item v-for="i in 15" :key="i" withWrapper block>
        </ui-image-item>
      </ui-image-list>
    </section>
  </div>
</template>
