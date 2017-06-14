<template>
  <div class="demo--material-icons">
    <p>
      <ui-textfield type="search"
        id="search"
        fullwidth
        :model="keywords"
        @input="onInput">
        Search
      </ui-textfield>
      <ui-textfield-helptext class="search-helper" show>
        TIPS: Click icon to copy icon name, then you can use <b>`&lt;ui-icon&gt;${icon_name}&lt;/ui-icon&gt;`</b>
      </ui-textfield-helptext>
    </p>
    <ui-list>
      <template v-for="(group, index) in groups">
        <ui-item>
          <h2>{{ group.name }}</h2>
          <template v-if="Object.keys(currentIcons).length">
            <ui-grid-list>
              <ui-grid-tile
                v-for="(icon, i) in currentIcons[group.id]"
                :key="i"
                noImage
                class="btn-clipboard"
                :icon="icon.id"
                :iconSize="48"
                :data-clipboard-text="icon.id">
                <div v-if="icon.isNew" class="new-badge">New</div>
                <ui-grid-tile-title :title="icon.name">{{ icon.name }}</ui-grid-tile-title>
              </ui-grid-tile>
            </ui-grid-list>
          </template>
          <template v-else>
            <p>No Icons</p>
          </template>
        </ui-item>
        <ui-item-divider v-if="index < group.count - 1"></ui-item-divider>
      </template>
    </ui-list>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

export default {
  data() {
    return {
      number: 0,
      groups: [],
      icons: {},
      currentIcons: {},
      keywords: ''
    };
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
  },
  async created() {
    let response = await this.$http.get(`${this.$domain}/data/grid.json`);
    let {groups, icons} = response.data;

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
  }
};
</script>
