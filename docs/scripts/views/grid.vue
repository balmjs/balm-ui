<template>
  <div>
    <h3>MDC Layout Grid</h3>

    <div class="demo-grid-legend">Grid of 1 column wide items</div>
    <ui-grid class="demo-grid">
      <ui-cell class="demo-cell" col="1">1</ui-cell>
      <ui-cell class="demo-cell" col="1">1</ui-cell>
      <ui-cell class="demo-cell" col="1">1</ui-cell>
      <ui-cell class="demo-cell" col="1">1</ui-cell>
      <ui-cell class="demo-cell" col="1">1</ui-cell>
      <ui-cell class="demo-cell" col="1">1</ui-cell>
      <ui-cell class="demo-cell" col="1">1</ui-cell>
      <ui-cell class="demo-cell" col="1">1</ui-cell>
      <ui-cell class="demo-cell" col="1">1</ui-cell>
      <ui-cell class="demo-cell" col="1">1</ui-cell>
      <ui-cell class="demo-cell" col="1">1</ui-cell>
      <ui-cell class="demo-cell" col="1">1</ui-cell>
    </ui-grid>

    <div class="demo-grid-legend">Grid of 4 column wide items</div>
    <ui-grid class="demo-grid">
      <ui-cell class="demo-cell">4</ui-cell>
      <ui-cell class="demo-cell">4</ui-cell>
      <ui-cell class="demo-cell">4</ui-cell>
    </ui-grid>

    <div class="demo-grid-legend">Grid of differently sized items</div>
    <ui-grid class="demo-grid">
      <ui-cell class="demo-cell" col="6">6</ui-cell>
      <ui-cell class="demo-cell" col="4">4</ui-cell>
      <ui-cell class="demo-cell" col="2">2</ui-cell>
    </ui-grid>

    <div class="demo-grid-legend">Grid of items with tweaks at different screen sizes</div>
    <ui-grid class="demo-grid">
      <ui-cell class="demo-cell" :col="{default:6, tablet:8}">6 (8 tablet)</ui-cell>
      <ui-cell class="demo-cell" :col="{default:4, tablet:6}">4 (6 tablet)</ui-cell>
      <ui-cell class="demo-cell" :col="{default:2, phone:4}">2 (4 phone)</ui-cell>
    </ui-grid>

    <div class="demo-grid-legend">Grid with max width and center alignment</div>
    <ui-grid :class="'demo-grid max-width'">
      <ui-cell class="demo-cell"></ui-cell>
      <ui-cell class="demo-cell"></ui-cell>
      <ui-cell class="demo-cell"></ui-cell>
    </ui-grid>

    <div class="demo-grid-legend">Grid with max width and left alignment</div>
    <ui-grid :class="'demo-grid max-width left-align'">
      <ui-cell class="demo-cell"></ui-cell>
      <ui-cell class="demo-cell"></ui-cell>
      <ui-cell class="demo-cell"></ui-cell>
    </ui-grid>

    <!-- <ui-apidoc name="grid"></ui-apidoc>
    <ui-apidoc name="cell"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  created() {
    // this.showCode('grid');
  }
};
</script>
