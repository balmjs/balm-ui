<template>
  <ui-page-structure name="skeleton" demoCount="3">
    <template #hero>
      <h3 :class="$tt('headline3')">Skeleton</h3>
    </template>

    <!-- Content -->
    <div class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Basic</h6>
      <ui-skeleton></ui-skeleton>
    </div>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>

    <div class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Complex combination</h6>
      <ui-skeleton avatar :paragraph="{ rows: 4 }"></ui-skeleton>
    </div>
    <ui-snippet :code="$store.demos[2]"></ui-snippet>

    <div class="demo-wrapper">
      <h6 :class="$tt('headline6')">
        1.3 Active animation (Loading: {{ loading }})
      </h6>
      <p>
        <ui-switch v-model="loading"></ui-switch>
      </p>
      <ui-skeleton
        v-model="loading"
        active
        :avatar="{ size: 'large', shape: 'square' }"
      >
        <ui-list>
          <ui-item v-for="i in 3" :key="i">Hello BalmJS {{ i }}</ui-item>
        </ui-list>
      </ui-skeleton>
    </div>
    <ui-snippet :code="$store.demos[3]"></ui-snippet>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Skeleton'
  },
  data() {
    return {
      loading: true
    };
  }
};
</script>
