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
        <div class="demo" v-shape.small="'1'">4dp</div>
        <div class="demo" v-shape="'1 0'">16dp</div>
        <div class="demo" v-shape.large="'1 0 0'">24dp</div>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Cut shapes (Experimental, just for all corners)</h6>
      <div class="demos">
        <div class="demo">0dp</div>
        <div class="demo" v-shape.cut.small>4dp</div>
        <div class="demo" v-shape.cut>16dp</div>
        <div class="demo" v-shape.cut.large>24dp</div>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Shape'
  }
};
</script>
