<template>
  <ui-page type="directive" name="anchor" demoCount="2" withoutCss>
    <template #hero>
      <h1 :class="$tt('headline1')">Anchor</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
      <div class="demo" v-anchor>
        <ui-button raised v-anchor:href="'#target1'">Anchor 1</ui-button>
        <ui-button outlined v-anchor:href="'#target2'">Anchor 2</ui-button>
        <div class="anchor-example-inner">
          <div v-anchor:id="'target1'">Target 1</div>
          <div v-anchor:id="'target2'">Target 2</div>
        </div>
      </div>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 HTML Usage (e.g. markdown)</h6>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
      <div class="demo" v-anchor.html>
        <a href="javascript:void(0)" class="v-anchor" data-href="#target3"
          >Anchor 3</a
        >
        <a href="javascript:void(0)" class="v-anchor" data-href="#target4"
          >Anchor 4</a
        >
        <div class="anchor-example-inner">
          <div id="target3">Target 3</div>
          <div id="target4">Target 4</div>
        </div>
      </div>
    </section>
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Anchor'
  }
};
</script>
