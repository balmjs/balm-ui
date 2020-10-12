<template>
  <div
    v-anchor.offset="bottomAffix ? 64 : 128"
    :class="[$tt('body1'), `page--${name}`]"
  >
    <header :class="[$theme.getTextClassOnLight('primary'), 'hero', type]">
      <slot name="hero"></slot>
    </header>

    <ui-toc-affix v-if="name === 'icon'">
      <ui-tab v-anchor:href="'#ui-icons'" class="v-anchor">Icons</ui-tab>
    </ui-toc-affix>
    <ui-toc-affix v-else-if="name === 'theme'">
      <ui-tab v-anchor:href="'#ui-colors'" class="v-anchor">Colors</ui-tab>
    </ui-toc-affix>
    <ui-toc-affix
      v-else
      :class="{ 'toc-affix--bottom': bottomAffix }"
      :without-apis="name === 'store'"
      :without-css="withoutCss"
    ></ui-toc-affix>

    <div :class="$tt('body2')">
      <div class="ui-intro">
        <ui-markdown :text="docs.intro"></ui-markdown>
      </div>

      <slot name="before"></slot>

      <h2 v-anchor:id="'ui-usage'">0. {{ $t('page.usage') }}</h2>
      <ui-markdown
        v-if="hasRequirement"
        :text="docs.usage.requirement"
      ></ui-markdown>
      <h3>{{ $t('page.default-usage') }}</h3>
      <ui-markdown :text="docs.usage.default"></ui-markdown>
      <h3>{{ $t('page.individual-usage') }}</h3>
      <ui-markdown :text="docs.usage.individual"></ui-markdown>

      <h2 v-anchor:id="'ui-demo'">1. {{ $t('page.demo') }}</h2>

      <template v-if="name !== 'store'">
        <slot>
          <p>Coming Up...</p>
        </slot>

        <h2 v-anchor:id="'ui-apis'">2. {{ $t('page.apis') }}</h2>
      </template>

      <ui-markdown
        v-for="(apidocs, index) in docs.apis"
        :key="index"
        :class="[
          'component-docs',
          apis[index] ? `component--${apis[index]}` : ''
        ]"
        :text="apidocs"
      ></ui-markdown>

      <template v-if="!withoutCss">
        <h2 v-anchor:id="'ui-sass'">3. {{ $t('page.sass') }}</h2>
        <ui-markdown :text="docs.css"></ui-markdown>
      </template>

      <h2 v-if="name === 'icon'" v-anchor:id="'ui-icons'">4. Icons List</h2>
      <h2 v-if="name === 'theme'" v-anchor:id="'ui-colors'">
        4. Color Palette
      </h2>
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocsPage',
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
    },
    bottomAffix: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    docs() {
      return this.initDocs(this.name, {
        apis: this.apis,
        css: !this.withoutCss
      });
    },
    hasRequirement() {
      return ['store', 'typography', 'validator'].includes(this.name);
    }
  },
  created() {
    this.$store.initSnippet(this.name, this.demoCount);
  },
  methods: {
    // NOTE: just one variable in `require` !important
    getDocs(name, key) {
      let result;

      switch (key) {
        case 'css':
          let filename = `${key}/${name}`;
          let docs = require(`@/docs/${filename}.md`);
          result = docs;
          break;
        case 'usage':
          const usageDocs = this.hasRequirement
            ? ['requirement', 'default', 'individual']
            : ['default', 'individual'];

          result = {};
          usageDocs.forEach((usageDoc) => {
            let filename = `${key}/${name}/${usageDoc}`;
            let docs = require(`@/docs/${filename}.md`);
            result[usageDoc] = docs;
          });
          break;
        default:
          if (Array.isArray(key)) {
            result = key.map((apiDoc) => {
              let filename = `${this.$store.lang}/${name}/${apiDoc}`;
              let docs = require(`@/docs/${filename}.md`);
              return docs;
            });
          } else {
            let filename = `${this.$store.lang}/${name}/${key}`;
            let docs = require(`@/docs/${filename}.md`);
            result = docs;
          }
      }

      return result;
    },
    initDocs(
      name,
      options = {
        apis: [],
        css: false
      }
    ) {
      let result = {
        intro: '',
        usage: '',
        apis: [],
        css: ''
      };

      result.intro = this.getDocs(name, 'intro');

      if (name !== 'utils') {
        result.usage = this.getDocs(name, 'usage');

        if (options.apis) {
          const apidocs = options.apis.length ? options.apis : [name];
          result.apis = this.getDocs(name, apidocs);
        }

        if (options.css) {
          result.css = this.getDocs(name, 'css');
        }
      }

      return result;
    }
  }
};
</script>
