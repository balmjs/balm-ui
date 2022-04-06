<template>
  <div
    v-anchor.offset="bottomAffix ? 64 : 128"
    :class="[$tt('body1'), `page--${name}`]"
  >
    <header :class="[$theme.getTextClassOnLight('primary'), 'hero', type]">
      <slot name="hero"></slot>
    </header>

    <ui-toc-affix v-if="name === 'icon'">
      <ui-tab v-anchor:href="'#ui-icons'" class="v-anchor">{{
        $t('page.icons')
      }}</ui-tab>
    </ui-toc-affix>
    <ui-toc-affix v-else-if="name === 'theme'">
      <ui-tab v-anchor:href="'#ui-colors'" class="v-anchor">{{
        $t('page.colors')
      }}</ui-tab>
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

      <h2 v-anchor:id="'ui-usage'">0. {{ t('page.usage') }}</h2>
      <ui-markdown
        v-if="hasRequirement"
        :text="docs.usage.requirement"
      ></ui-markdown>
      <h3>{{ t('page.default-usage') }}</h3>
      <ui-markdown :text="docs.usage.default"></ui-markdown>
      <h3>{{ t('page.individual-usage') }}</h3>
      <ui-markdown :text="docs.usage.individual"></ui-markdown>

      <h2 v-anchor:id="'ui-demo'">1. {{ t('page.demo') }}</h2>

      <template v-if="name !== 'store'">
        <slot>
          <p>Coming Up...</p>
        </slot>

        <h2 v-anchor:id="'ui-apis'">2. {{ t('page.apis') }}</h2>
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
        <h2 v-anchor:id="'ui-sass'">3. {{ t('page.sass') }}</h2>
        <ui-markdown :text="docs.css"></ui-markdown>
      </template>

      <h2 v-if="name === 'icon'" v-anchor:id="'ui-icons'">
        4. {{ $t('page.icon-list') }}
      </h2>
      <h2 v-if="name === 'theme'" v-anchor:id="'ui-colors'">
        4. {{ $t('page.color-palette') }}
      </h2>
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocsPage',
  customOptions: {}
};
</script>

<script setup>
import { computed, onBeforeMount } from 'vue';
import { useStore } from 'balm-ui';
import useTranslation from '@/utils/t';

const props = defineProps({
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
});

const store = useStore();
const { t } = useTranslation();

const hasRequirement = computed(() =>
  ['store', 'typography', 'validator'].includes(props.name)
);
const docs = computed(() => initDocs(props, hasRequirement.value));

onBeforeMount(() => store.initSnippet(props.name, props.demoCount));

// NOTE: just one variable in `require` !important
function getDocs(name, key, hasRequirement = false) {
  let result;

  switch (key) {
    case 'css':
      let filename = `${key}/${name}.md`;
      let docs = require(`@/docs/${filename}`).default;
      result = docs;
      break;
    case 'usage':
      const usageDocs = hasRequirement
        ? ['requirement', 'default', 'individual']
        : ['default', 'individual'];

      result = {};
      usageDocs.forEach((usageDoc) => {
        let filename = `${key}/${name}/${usageDoc}.md`;
        let docs = require(`@/docs/${filename}`).default;
        result[usageDoc] = docs;
      });
      break;
    default:
      if (Array.isArray(key)) {
        // apidocs
        result = key.map((apiDocs) => {
          let filename = `${store.lang}/${name}/${apiDocs}.md`;
          let docs = require(`@/docs/${filename}`).default;
          return docs;
        });
      } else {
        // intro
        let filename = `${store.lang}/${name}/${key}.md`;
        let docs = require(`@/docs/${filename}`).default;
        result = docs;
      }
  }

  return result;
}

function initDocs({ type, name, apis, withoutCss }, hasRequirement) {
  const options = {
    apis: apis || [],
    css: !withoutCss || false
  };

  let result = {
    intro: '',
    usage: '',
    apis: [],
    css: ''
  };

  result.intro = getDocs(name, 'intro', hasRequirement);

  if (name !== 'utils') {
    result.usage = getDocs(name, 'usage', hasRequirement);

    if (options.apis) {
      let apidocs;
      if (options.apis.length) {
        apidocs = options.apis;
      } else {
        const keyName = type === 'directive' ? `v-${name}` : name;
        apidocs = [keyName];
      }
      result.apis = getDocs(name, apidocs, hasRequirement);
    }

    if (options.css) {
      result.css = getDocs(name, 'css', hasRequirement);
    }
  }

  return result;
}
</script>
