<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">List</h6>
    <div class="component-wrapper list-component">
      <ui-list v-model="value" :type="2" avatar single-selection>
        <template v-for="i in 3" :key="`item${i}`">
          <ui-item>
            <ui-item-first-content>
              <ui-icon>child_care</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>
              <ui-item-text1>Subtitle1</ui-item-text1>
              <ui-item-text2>Body2</ui-item-text2>
            </ui-item-text-content>
          </ui-item>
          <ui-item-divider v-if="i < 3" :key="`divider${i}`"></ui-item-divider>
        </template>
      </ui-list>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    };
  }
};
</script>
