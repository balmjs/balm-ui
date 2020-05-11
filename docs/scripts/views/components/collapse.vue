<template>
  <ui-page-structure name="collapse" demoCount="3">
    <template #hero>
      <ui-collapse v-model="show">
        <template #toggle>
          <ui-button :icon="show ? 'code' : 'settings_ethernet'">
            {{ show ? 'Hide' : 'Show' }} Code
          </ui-button>
        </template>
        Collapse Content
      </ui-collapse>
    </template>

    <!-- Content -->
    <section class="example">
      <h6 :class="$tt('headline6')">1.1 Simple</h6>
      <ui-collapse>
        <template #toggle>
          <ui-button>Button</ui-button>
        </template>
        Show Content
      </ui-collapse>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="example">
      <h6 :class="$tt('headline6')">1.2 Accordion</h6>
      <div>
        <ui-collapse v-for="i in 3" :key="i" withIcon ripple>
          <template #toggle>
            <div>Heading {{ i }}</div>
          </template>
          <div>Content {{ i }}</div>
        </ui-collapse>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="example">
      <h6 :class="$tt('headline6')">1.3 Custom Icon</h6>
      <div>
        <ui-collapse v-for="i in 3" :key="i" withIcon :ripple="1">
          <template #expand-more-icon>
            <ui-icon>arrow_drop_down</ui-icon>
          </template>
          <template #expand-less-icon>
            <ui-icon>arrow_right</ui-icon>
          </template>
          <template #toggle>
            <div>Heading {{ i }}</div>
          </template>
          <div>Content {{ i }}</div>
        </ui-collapse>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Collapse'
  },
  data() {
    return {
      // hero
      show: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1e3);
  }
};
</script>
