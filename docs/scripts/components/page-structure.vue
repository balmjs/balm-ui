<template>
  <div :class="[$tt('body1'), `demo--${name}`]">
    <header :class="['hero', type]">
      <slot name="hero"></slot>
    </header>

    <ui-toc-affix v-if="name === 'icon'">
      <ui-tab v-anchor:href="'#ui-icons'" class="v-anchor">Icons</ui-tab>
    </ui-toc-affix>
    <ui-toc-affix v-else-if="name === 'theme'">
      <ui-tab v-anchor:href="'#ui-colors'" class="v-anchor">Colors</ui-tab>
    </ui-toc-affix>
    <ui-toc-affix v-else :withoutCss="withoutCss"></ui-toc-affix>

    <div :class="$tt('body2')">
      <!-- <ui-markdown :text="$store.docs.intro"></ui-markdown> -->

      <slot name="before"></slot>

      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="$store.docs.usage"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <slot>
        <p>Coming Up...</p>
      </slot>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown
        v-for="(apidocs, index) in $store.docs.apis"
        :key="index"
        :text="apidocs"
      ></ui-markdown>

      <template v-if="!withoutCss">
        <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
          3. Sass Variables
        </h4>
        <ui-markdown :text="$store.docs.css"></ui-markdown>
      </template>

      <h4
        v-if="name === 'icon'"
        v-anchor:id="'ui-icons'"
        :class="$tt('headline4')"
      >
        4. Icons List
      </h4>
      <h4
        v-if="name === 'theme'"
        v-anchor:id="'ui-colors'"
        :class="$tt('headline4')"
      >
        4. Color Palette
      </h4>
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-page-structure',
  props: {
    type: {
      type: String,
      default: 'component'
    },
    name: {
      type: String,
      required: true
    },
    demoCount: {
      type: [String, Number],
      default: 0
    },
    apis: {
      type: Array,
      default() {
        return [];
      }
    },
    withoutCss: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.$store.initDocs(this.name, {
      demoCount: this.demoCount,
      apis: this.apis,
      css: !this.withoutCss
    });
  }
};
</script>
