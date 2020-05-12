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
      <div class="ui-intro">
        <ui-markdown :text="$store.docs.intro"></ui-markdown>
      </div>

      <slot name="before"></slot>

      <h2 v-anchor:id="'ui-usage'" :class="$tt('headline5')">0. Usage</h2>
      <ui-markdown :text="$store.docs.usage"></ui-markdown>

      <h2 v-anchor:id="'ui-demo'" :class="$tt('headline5')">1. Demo</h2>
      <slot>
        <p>Coming Up...</p>
      </slot>

      <h2 v-anchor:id="'ui-apis'" :class="$tt('headline5')">2. APIs</h2>
      <ui-markdown
        v-for="(apidocs, index) in $store.docs.apis"
        :key="index"
        :class="[
          'component-docs',
          apis[index] ? `component--${apis[index]}` : ''
        ]"
        :text="apidocs"
      ></ui-markdown>

      <template v-if="!withoutCss">
        <h2 v-anchor:id="'ui-sass'" :class="$tt('headline5')">
          3. Sass Variables
        </h2>
        <ui-markdown :text="$store.docs.css"></ui-markdown>
      </template>

      <h2
        v-if="name === 'icon'"
        v-anchor:id="'ui-icons'"
        :class="$tt('headline5')"
      >
        4. Icons List
      </h2>
      <h2
        v-if="name === 'theme'"
        v-anchor:id="'ui-colors'"
        :class="$tt('headline5')"
      >
        4. Color Palette
      </h2>
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-page',
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
