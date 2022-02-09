<template>
  <docs-page name="badge" :apis="['badge', 'v-badge']" demo-count="2">
    <template #hero>
      <ui-icon v-badge.overlap="mail">mail</ui-icon>
    </template>

    <section class="demo-wrapper">
      <div class="demo">
        <ui-badge overlap dot>
          <ui-icon>mail</ui-icon>
        </ui-badge>

        <ui-badge overlap :count="8">
          <ui-icon>mail</ui-icon>
        </ui-badge>

        <ui-badge overlap :count="999">
          <ui-icon>mail</ui-icon>
        </ui-badge>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <ui-badge state="success">
          Text1231231
          <template #badge>new</template>
        </ui-badge>

        <ui-badge state="info">
          Text1231231
          <template #badge>new</template>
        </ui-badge>

        <ui-badge state="warning">
          Text123123
          <template #badge>new</template>
        </ui-badge>

        <ui-badge state="error">
          Text123123
          <template #badge>new</template>
        </ui-badge>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo() {
    return {
      subtitle: 'Badge'
    };
  },
  data() {
    return {
      mail: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.mail = 6;
    }, 1e3);
  }
};
</script>
