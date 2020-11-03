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
            :model="keywords"
            input-id="search"
            input-type="search"
            icon="search"
            placeholder="Icon name keywords"
            fullwidth
            :source="tags"
            @input="onSearch"
            @selected="onSelected"
          ></ui-autocomplete>
          <ui-select id="icon-type" v-model="typeOption" :options="TypeOptions"
            >Theme</ui-select
          >
        </div>
        <ui-textfield-helper class="search-helper" visible>
          TIPS: Click an icon to copy icon name, then you can use `
          <b>&lt;ui-icon&gt;${icon_name}&lt;/ui-icon&gt;</b>`.
        </ui-textfield-helper>
      </div>

      <ui-list-group>
        <template v-for="(category, index) in categories">
          <ui-list-group-subheader
            :key="`subheader${index}`"
            v-anchor:id="category.name"
            :class="$tt('headline6')"
            >{{ category.name }}</ui-list-group-subheader
          >
          <template v-if="Object.keys(currentIcons).length">
            <ui-image-list :key="`list${index}`">
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
import Clipboard from 'clipboard';

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
  }
  // Flagged: GPL-3.0-only
  // {
  //   label: 'Sharp',
  //   value: 4
  // }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Icons'
  },
  data() {
    return {
      // hero
      TypeOptions,
      typeOption: 0,
      // icons
      categories: [],
      icons: {},
      tags: [],
      currentIcons: {},
      keywords: ''
    };
  },
  async created() {
    const url = `${this.$domain}/data/icons.json`;
    const { icons, tags } = await this.$http.get(url);

    Object.keys(icons).map((category) => {
      this.categories.push({
        name: category,
        count: icons[category].length
      });
    });
    this.icons = icons;
    this.tags = tags;

    this.currentIcons = Object.assign({}, this.icons);
  },
  mounted() {
    let clipboard = new Clipboard('.btn-copy');

    clipboard.on('success', (e) => {
      this.$toast(`'${e.text}' copied!`);

      e.clearSelection();
    });
  },
  methods: {
    filterIcons() {
      if (this.keywords) {
        const tag = this.tags.find((tag) => tag === this.keywords);

        for (let categoryName in this.icons) {
          this.currentIcons[categoryName] = this.icons[categoryName].filter(
            (icon) => {
              const hasName = icon.name.indexOf(this.keywords) > -1;
              const hasTag = icon.tags.includes(tag);
              return hasName || hasTag;
            }
          );
        }
      } else {
        this.currentIcons = Object.assign({}, this.icons);
      }
    },
    onSearch(value) {
      this.keywords = value.trim();
      this.filterIcons();
    },
    onSelected(item) {
      this.keywords = item.value;
      this.filterIcons();
    }
  }
};
</script>
