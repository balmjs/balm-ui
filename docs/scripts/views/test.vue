<template>
  <ui-grid class="demo">
    <ui-grid-cell class="yellow" columns="3" align="top">
      <div v-for="i in 1" :key="i">item {{ i }}</div>
    </ui-grid-cell>
    <ui-grid-cell class="yellow" columns="3" align="middle">
      <div v-for="i in 2" :key="i">item {{ i }}</div>
    </ui-grid-cell>
    <ui-grid-cell class="yellow" columns="3" align="bottom">
      <div v-for="i in 3" :key="i">item {{ i }}</div>
    </ui-grid-cell>
    <ui-grid-cell class="yellow" columns="3">
      <div v-for="i in 4" :key="i">item {{ i }}</div>
    </ui-grid-cell>
  </ui-grid>
</template>

<script>
export default {};
</script>

<style>
.yellow {
  background: yellow;
}

.demo {
  border: 1px solid;
}

.demo .mdc-layout-grid__inner {
  background: cyan;
}
</style>
