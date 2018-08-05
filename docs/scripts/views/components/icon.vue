<template>
  <div :class="[$tt('body1'), 'demo--icon']">
    <section class="hero component">
      <ui-icon>add</ui-icon>
      <ui-icon>description</ui-icon>
      <ui-icon>edit</ui-icon>
      <ui-icon>delete</ui-icon>
    </section>

    <div :class="$tt('body2')">
      <h3 :class="$tt('headline3')">0. Usage</h3>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h3 :class="$tt('headline3')">1. Example</h3>
      <section clsss="example">
        <h6 :class="$tt('headline6')">1.1 Sizing</h6>
        <div class="icons-preview-code">
          <div v-for="i in [18, 24, 36, 48]" :key="i" class="icons-preview">
            <ui-icon :size="i">face</ui-icon>
            <div class="icon-caption">
              {{ i }}px
              {{ i === 24 ? '(default)' : '' }}
            </div>
          </div>
        </div>
      </section>
      <ui-accordion>
        <ui-markdown :text="code[1]"></ui-markdown>
      </ui-accordion>

      <section clsss="example">
        <h6 :class="$tt('headline6')">1.2 Coloring</h6>
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
      </section>
      <ui-accordion>
        <ui-markdown :text="code[2]"></ui-markdown>
      </ui-accordion>

      <h3 :class="$tt('headline3')">2. APIs</h3>
      <ui-apidocs name="icon"></ui-apidocs>

      <h3 :class="$tt('headline3')">3. Icon List</h3>
      <p>
        <ui-textfield type="search"
          id="search"
          helptextId="my-icons"
          fullwidth
          :model="keywords"
          @input="onInput">
          Search Icon
        </ui-textfield>
        <ui-textfield-helptext id="my-icons" class="search-helper" visible>
          TIPS: Click an icon to copy icon name, then you can use <b>`&lt;ui-icon&gt;${icon_name}&lt;/ui-icon&gt;`</b>.
        </ui-textfield-helptext>
      </p>

      <ui-list nonInteractive>
        <template v-for="(group, index) in groups">
          <ui-item :key="`item${index}`">
            <h2>{{ group.name }}</h2>
            <template v-if="Object.keys(currentIcons).length">
              <ui-grid-list>
                <ui-grid-tile
                  v-for="(icon, i) in currentIcons[group.id]"
                  :key="i"
                  noImage
                  class="btn-clipboard"
                  :data-clipboard-text="icon.id">
                  <template slot="icon">
                    <ui-icon size="48">{{ icon.id }}</ui-icon>
                  </template>
                  <div v-if="icon.isNew" class="new-badge">New</div>
                  <ui-grid-tile-title :title="icon.name">{{ icon.name }}</ui-grid-tile-title>
                </ui-grid-tile>
              </ui-grid-list>
            </template>
            <template v-else>
              <p>No Icons</p>
            </template>
          </ui-item>
          <ui-item-divider :key="`divider${index}`" v-if="index < group.count - 1"></ui-item-divider>
        </template>
      </ui-list>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard';
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Icon'
  },
  mixins: [snippets],
  data() {
    return {
      number: 0,
      groups: [],
      icons: {},
      currentIcons: {},
      keywords: ''
    };
  },
  async created() {
    this.showCode('icon', 2);

    let response = await this.$http.get(`${this.$domain}/data/grid.json`);
    let { groups, icons } = response.data;

    groups.map(group => {
      this.groups.push({
        id: group.data.id,
        name: group.data.name,
        count: group.length
      });
    });

    this.groups.forEach(group => {
      this.icons[group.id] = [];
    });

    icons.forEach(icon => {
      this.icons[icon.group_id].push({
        id: icon.ligature,
        name: icon.name,
        isNew: icon.is_new
      });
    });

    this.currentIcons = Object.assign({}, this.icons);
  },
  mounted() {
    let clipboard = new Clipboard('.btn-clipboard');

    clipboard.on('success', e => {
      this.$toast(`'${e.text}' copied!`);

      e.clearSelection();
    });
  },
  methods: {
    filterIcons() {
      if (this.keywords) {
        for (let groupId in this.icons) {
          this.currentIcons[groupId] = this.icons[groupId].filter(icon => {
            return icon.name.indexOf(this.keywords) > -1;
          });
        }
      } else {
        this.currentIcons = Object.assign({}, this.icons);
      }
    },
    onInput(value) {
      this.keywords = value.trim();
      this.filterIcons();
    }
  }
};
</script>
