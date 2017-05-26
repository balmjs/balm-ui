<template>
  <div class="demo--material-icons">
    <ui-list>
      <template v-for="(group, index) in groups">
        <ui-item>
          <h2>{{ group.data.name }}</h2>
          <ui-grid-list>
            <ui-grid-tile
              v-for="(icon, i) in icons[group.data.id]"
              :key="i"
              noImage
              :icon="icon.id">
              <ui-grid-tile-title>{{ icon.name }}</ui-grid-tile-title>
            </ui-grid-tile>
          </ui-grid-list>
        </ui-item>
        <ui-item-divider v-if="index < groups.length - 1"></ui-item-divider>
      </template>
    </ui-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      groups: [],
      icons: []
    };
  },
  async created() {
    let response = await this.$http.get(`${this.$domain}/data/grid.json`);
    let {groups, icons} = response.data;
    this.groups = groups;

    groups.forEach(group => {
      this.icons[group.data.id] = [];
    });

    icons.forEach(icon => {
      this.icons[icon.group_id].push({
        id: icon.ligature,
        name: icon.name,
        is_new: icon.is_new
      })
    });
  }
};
</script>
