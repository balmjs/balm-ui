<template>
  <docs-page name="skeleton" demo-count="3">
    <template #hero>
      <h1 :class="$tt('headline1')">Skeleton</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <h6 :class="$tt('headline6')">1.1 Basic</h6>
        <ui-skeleton></ui-skeleton>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Complex combination</h6>
      <div class="demo">
        <ui-skeleton avatar :paragraph="{ rows: 4 }"></ui-skeleton>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">
        1.3 Active animation (Loading: {{ loading }})
      </h6>
      <p class="demo-controls">
        <ui-form-field>
          <ui-switch v-model="loading" input-id="demo-loading"></ui-switch>
          <label for="demo-loading">Loading</label>
        </ui-form-field>
      </p>
      <div class="demo">
        <ui-skeleton
          :loading="loading"
          active
          :avatar="{ size: 'large', shape: 'square' }"
        >
          <ui-list>
            <ui-item v-for="i in 3" :key="i">Hello BalmJS {{ i }}</ui-item>
          </ui-list>
        </ui-skeleton>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo() {
    return {
      subtitle: 'Skeleton'
    };
  },
  data() {
    return {
      loading: true
    };
  }
};
</script>
