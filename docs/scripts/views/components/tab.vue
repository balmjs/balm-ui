<template>
  <section class="example">
    <h5 :class="$tt('headline4')">1.1 Tabs</h5>

    <h6 :class="$tt('headline6')">Text Label</h6>
    <div class="demo">
      <ui-tab-bar v-model="active">
        <ui-tab v-for="(tab, index) in tabs" :key="index">
          {{ tab.text }}
        </ui-tab>
      </ui-tab-bar>
    </div>

    <h6 :class="$tt('headline6')">Icon</h6>
    <div class="demo">
      <ui-tab-bar v-model="active">
        <ui-tab v-for="(tab, index) in tabs" :key="index"
          type="icon"
          :icon="tab.icon">
        </ui-tab>
      </ui-tab-bar>
    </div>
    <ui-accordion>
      <ui-markdown :text="code[1]"></ui-markdown>
    </ui-accordion>

    <h6 :class="$tt('headline6')">Text Label and Icon</h6>
    <div class="demo">
      <ui-tab-bar type="both" v-model="active">
        <ui-tab v-for="(tab, index) in tabs" :key="index"
          type="both"
          :icon="tab.icon">
          {{ tab.text }}
        </ui-tab>
      </ui-tab-bar>
    </div>

    <h6 :class="$tt('headline6')">Stacked Text Label and Icon</h6>
    <div class="demo">
      <ui-tab-bar type="both" v-model="active">
        <ui-tab v-for="(tab, index) in tabs" :key="index"
          type="both"
          :icon="tab.icon"
          stacked>
          {{ tab.text }}
        </ui-tab>
      </ui-tab-bar>
    </div>
    <ui-accordion>
      <ui-markdown :text="code[2]"></ui-markdown>
    </ui-accordion>

    <h6 :class="$tt('headline6')">Text Label Width-Matching Indicator</h6>
    <div class="example">
      <ui-tab-bar v-model="active">
        <ui-tab v-for="(tab, index) in tabs" :key="index" contentIndicator>
          {{ tab.text }}
        </ui-tab>
      </ui-tab-bar>
    </div>

    <h6 :class="$tt('headline6')">Text Label with Icon Indicator</h6>
    <div class="example">
      <ui-tab-bar v-model="active">
        <ui-tab v-for="(tab, index) in tabs" :key="index">
          {{ tab.text }}
          <template slot="indicator">
            <ui-tab-indicator type="icon">{{ tab.indicator }}</ui-tab-indicator>
          </template>
        </ui-tab>
      </ui-tab-bar>
    </div>
    <ui-accordion>
      <ui-markdown :text="code[3]"></ui-markdown>
    </ui-accordion>

    <h6 :class="$tt('headline6')">Customization</h6>
    <div class="example">
      <ui-tab-bar class="custom-demo" v-model="active">
        <ui-tab v-for="(tab, index) in tabs" :key="index"
          class="demo-tab custom-tab"
          type="both"
          :icon="tab.icon"
          stacked
          contentIndicator>
          {{ tab.text }}
          <template slot="indicator">
            <ui-tab-indicator class="custom-tab-indicator"></ui-tab-indicator>
          </template>
        </ui-tab>
      </ui-tab-bar>
    </div>
    <ui-accordion>
      <ui-markdown :text="code[4]"></ui-markdown>
    </ui-accordion>
  </section>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    },
    code: Array
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>
