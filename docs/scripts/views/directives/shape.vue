<template>
  <docs-page type="directive" name="shape" demo-count="2">
    <template #hero>
      <h1 :class="$tt('headline1')">Shape</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Rounded shapes</h6>
      <div class="demos">
        <div class="demo">0dp</div>
        <div v-shape.small class="demo">4dp</div>
        <div v-shape class="demo">16dp</div>
        <div v-shape.large class="demo">24dp</div>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">
        1.2 Cut shapes (Experimental, Sass Only)
      </h6>
      <div class="demos">
        <div class="demo">0dp</div>
        <div v-shape.cut.small class="demo">4dp</div>
        <div v-shape.cut class="demo">8dp</div>
        <div v-shape.cut.large class="demo">12dp</div>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo() {
    return {
      subtitle: 'Shape'
    };
  }
};
</script>
