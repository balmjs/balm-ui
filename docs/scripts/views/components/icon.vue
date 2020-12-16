<template>
  <docs-page name="icon" demo-count="2">
    <template #hero>
      <div class="hero-demos">
        <ui-icon :type="typeOption">add</ui-icon>
        <ui-icon :type="typeOption">description</ui-icon>
        <ui-icon :type="typeOption">edit</ui-icon>
        <ui-icon :type="typeOption">delete</ui-icon>
      </div>
      <div class="hero-options">
        <ui-select
          v-model="typeOption"
          class="hero-option"
          :options="TypeOptions"
          >Icon themes</ui-select
        >
      </div>
    </template>

    <!-- Content -->
    <!-- <ui-tab-bar class="category-affix">
      <ui-tab
        v-for="(category, index) in categories"
        v-anchor:href="`#${category.name}`"
        :key="category.name"
        >{{ category.name }}</ui-tab
      >
    </ui-tab-bar>-->

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Sizing</h6>
      <div class="demo sizing-example">
        <div class="icons-preview-code">
          <div v-for="i in [18, 24, 36, 48]" :key="i" class="icons-preview">
            <ui-icon :size="i">face</ui-icon>
            <div class="icon-caption">
              {{ i }}px
              {{ i === 24 ? '(default)' : '' }}
            </div>
          </div>
        </div>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Coloring</h6>
      <div class="demo coloring-example">
        <div class="icons-preview-code">
          <div class="icons-preview">
            <ui-icon dark>face</ui-icon>
            <div class="icon-caption">Normal</div>
          </div>
          <div class="icons-preview">
            <ui-icon dark inactive>face</ui-icon>
            <div class="icon-caption">Disabled</div>
          </div>
          <div class="icons-preview icons-dark-bg">
            <ui-icon light>face</ui-icon>
            <div class="icon-caption">Normal</div>
          </div>
          <div class="icons-preview icons-dark-bg">
            <ui-icon light inactive>face</ui-icon>
            <div class="icon-caption">Disabled</div>
          </div>
          <div class="icons-preview">
            <ui-icon class="orange600">face</ui-icon>
            <div class="icon-caption">orange600</div>
          </div>
        </div>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <template #after>
      <div v-shadow="1" class="search-area">
        <div class="search-area-inner">
          <ui-autocomplete
            v-model="keywords"
            input-id="search"
            input-type="search"
            icon="search"
            placeholder="Icon name keywords"
            fullwidth
            :source="tags"
            highlight
            @update:modelValue="onSearch"
            @selected="onSelected"
          ></ui-autocomplete>
          <ui-select id="icon-type" v-model="typeOption" :options="TypeOptions"
            >Theme</ui-select
          >
        </div>
        <p class="search-helper">
          TIPS: Click an icon to copy icon name, then you can use `
          <b>&lt;ui-icon&gt;${icon_name}&lt;/ui-icon&gt;</b>`.
        </p>
      </div>

      <ui-list-group v-if="categories.length">
        <template
          v-for="(category, index) in categories"
          :key="`category${index}`"
        >
          <ui-list-group-subheader
            v-anchor:id="category.name"
            :class="$tt('headline6')"
            >{{ category.name }}</ui-list-group-subheader
          >
          <template v-if="Object.keys(currentIcons).length">
            <ui-image-list v-if="currentIcons[category.name].length">
              <ui-image-item
                v-for="icon in currentIcons[category.name]"
                :key="icon.id"
                :title="icon.name"
                class="btn-copy"
                :data-clipboard-text="icon.name"
              >
                <template #image>
                  <ui-icon :type="typeOption" size="36">{{
                    icon.name
                  }}</ui-icon>
                  <div v-if="icon.isNew" class="new-badge">New</div>
                </template>
                <ui-image-text>{{ icon.name }}</ui-image-text>
              </ui-image-item>
            </ui-image-list>
          </template>
          <p v-else :key="`p${index}`">No Icons</p>
          <template v-if="index < category.count - 1">
            <ui-list-divider :key="`divider${index}`"></ui-list-divider>
          </template>
        </template>
      </ui-list-group>
    </template>
  </docs-page>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
import { useToast } from 'balm-ui/plugins/toast';
import Clipboard from 'clipboard';
import { useHttp } from '@/plugins/http';
import { useConfig } from '@/config';

const TypeOptions = [
  {
    label: 'Filled',
    value: 0
  },
  {
    label: 'Outlined',
    value: 1
  },
  {
    label: 'Round',
    value: 2
  },
  {
    label: 'Two-Tone',
    value: 3
  },
  {
    label: 'Sharp',
    value: 4
  }
];

const state = reactive({
  // hero
  typeOption: 0,
  // icons
  categories: [],
  icons: {},
  tags: [],
  currentIcons: {},
  keywords: ''
});

function filterIcons() {
  if (state.keywords) {
    const tag = state.tags.find((tag) => tag === state.keywords);

    for (let categoryName in state.icons) {
      state.currentIcons[categoryName] = state.icons[categoryName].filter(
        (icon) => {
          const hasName = icon.name.indexOf(state.keywords) > -1;
          const hasTag = icon.tags.includes(tag);
          return hasName || hasTag;
        }
      );
    }
  } else {
    state.currentIcons = Object.assign({}, state.icons);
  }
}

async function init() {
  const { domain } = useConfig();
  const $http = useHttp();

  const url = `${domain}/data/icons.json`;
  const { icons, tags } = await $http.get(url);

  Object.keys(icons).map((category) => {
    state.categories.push({
      name: category,
      count: icons[category].length
    });
  });
  state.icons = icons;
  state.tags = tags;

  state.currentIcons = Object.assign({}, state.icons);
}

export default {
  metaInfo: {
    titleTemplate: '%s - Icons'
  },
  setup() {
    const $toast = useToast();

    init();

    onMounted(() => {
      let clipboard = new Clipboard('.btn-copy');

      clipboard.on('success', (e) => {
        $toast(`'${e.text}' copied!`);

        e.clearSelection();
      });
    });

    return {
      TypeOptions,
      ...toRefs(state)
    };
  },
  methods: {
    onSearch(value) {
      state.keywords = value.trim();
      filterIcons();
    },
    onSelected(item) {
      state.keywords = item.value;
      filterIcons();
    }
  }
};
</script>
