<template>
  <div>
    <ui-grid>
      <ui-cell v-for="i in [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]" :col="i">{{ i }}</ui-cell>
    </ui-grid>
    <ui-grid>
      <ui-cell v-for="i in [4, 4, 4]" :col="i">{{ i }}</ui-cell>
    </ui-grid>
    <ui-grid>
      <ui-cell col="6">6</ui-cell>
      <ui-cell col="4">4</ui-cell>
      <ui-cell col="2">2</ui-cell>
    </ui-grid>
  </div>
</template>
