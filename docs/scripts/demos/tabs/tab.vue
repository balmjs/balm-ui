<template>
  <section class="demo-wrapper">
    <h6 :class="$tt('headline6')">1.1 Tabs</h6>

    <h6 :class="$tt('subtitle1')">Text Label</h6>
    <div class="demo">
      <ui-tab-bar>
        <ui-tab v-for="(tab, index) in tabs" :key="index">{{
          tab.text
        }}</ui-tab>
      </ui-tab-bar>
    </div>

    <h6 :class="$tt('subtitle1')">Icon</h6>
    <div class="demo">
      <ui-tab-bar>
        <template v-for="(tab, index) in tabs" :key="index">
          <ui-tab type="iconOnly" :icon="tab.icon"></ui-tab>
        </template>
      </ui-tab-bar>
    </div>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>

    <h6 :class="$tt('subtitle1')">Text Label and Icon</h6>
    <div class="demo">
      <ui-tab-bar type="textWithIcon">
        <template v-for="(tab, index) in tabs" :key="index">
          <ui-tab type="textWithIcon" :icon="tab.icon">{{ tab.text }}</ui-tab>
        </template>
      </ui-tab-bar>
    </div>

    <h6 :class="$tt('subtitle1')">Stacked Text Label and Icon</h6>
    <div class="demo">
      <ui-tab-bar type="textWithIcon">
        <template v-for="(tab, index) in tabs" :key="index">
          <ui-tab type="textWithIcon" :icon="tab.icon" stacked>{{
            tab.text
          }}</ui-tab>
        </template>
      </ui-tab-bar>
    </div>
    <ui-snippet :code="$store.demos[2]"></ui-snippet>

    <h6 :class="$tt('subtitle1')">Text Label Width-Matching Indicator</h6>
    <div class="example">
      <ui-tab-bar>
        <ui-tab v-for="(tab, index) in tabs" :key="index" content-indicator>{{
          tab.text
        }}</ui-tab>
      </ui-tab-bar>
    </div>

    <h6 :class="$tt('subtitle1')">Text Label with Icon Indicator</h6>
    <div class="example">
      <ui-tab-bar>
        <ui-tab v-for="(tab, index) in tabs" :key="index">
          {{ tab.text }}
          <template #indicator>
            <ui-tab-indicator type="icon">{{ tab.indicator }}</ui-tab-indicator>
          </template>
        </ui-tab>
      </ui-tab-bar>
    </div>
    <ui-snippet :code="$store.demos[3]"></ui-snippet>

    <h6 :class="$tt('subtitle1')">Customization</h6>
    <div class="example">
      <ui-tab-bar class="custom-demo">
        <ui-tab
          v-for="(tab, index) in tabs"
          :key="index"
          class="demo-tab custom-tab"
          type="textWithIcon"
          :icon="tab.icon"
          stacked
          content-indicator
        >
          {{ tab.text }}
          <template #indicator>
            <ui-tab-indicator class="custom-tab-indicator"></ui-tab-indicator>
          </template>
        </ui-tab>
      </ui-tab-bar>
    </div>
    <ui-snippet :code="$store.demos[4]"></ui-snippet>
  </section>
</template>

<script>
export default {
  props: {
    code: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      tabs: [
        {
          text: 'Favorites',
          icon: 'favorite',
          indicator: 'crop_square'
        },
        {
          text: 'Recents',
          icon: 'phone',
          indicator: 'panorama_fish_eye'
        },
        {
          text: 'Nearby',
          icon: 'near_me',
          indicator: 'change_history'
        }
      ]
    };
  }
};
</script>
