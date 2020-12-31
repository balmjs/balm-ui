<template>
  <docs-page
    name="segmented-button"
    :apis="['segmented-buttons', 'segmented-button']"
    demo-count="3"
    without-css
  >
    <template #hero>
      <h1 :class="$tt('headline1')">
        <ui-segmented-buttons :items="heroItems"></ui-segmented-buttons>
      </h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">
        1.1 Multi select (Checked: {{ checkedValue1 }})
      </h6>
      <div class="demo">
        <ui-segmented-buttons
          v-model="checkedValue1"
          :items="heroItems"
        ></ui-segmented-buttons>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">
        1.2 Single select (Checked: {{ checkedValue2 }})
      </h6>
      <div class="demo">
        <ui-segmented-buttons
          v-model="checkedValue2"
          :items="heroItems"
          single-select
        ></ui-segmented-buttons>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">
        1.3 Custom items (NOTE: Does not support single selection)
      </h6>
      <div class="demo">
        <ui-segmented-buttons v-model="checkedValue3">
          <ui-segmented-button icon="favorite"></ui-segmented-button>
          <ui-segmented-button>Sample Text</ui-segmented-button>
          <ui-segmented-button>
            Sample Text
            <template #after="{ iconClass }">
              <ui-icon :class="iconClass">favorite</ui-icon>
            </template>
          </ui-segmented-button>
        </ui-segmented-buttons>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
const heroItems = [
  {
    icon: 'favorite'
  },
  {
    text: 'Sample Text'
  },
  {
    icon: 'favorite',
    text: 'Sample Text'
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Segmented Button'
  },
  data() {
    return {
      heroItems,
      checkedValue1: [],
      checkedValue2: -1,
      checkedValue3: []
    };
  }
};
</script>
