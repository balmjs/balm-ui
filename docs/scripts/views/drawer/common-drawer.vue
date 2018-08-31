<template>
  <ui-permanent-drawer>
    <ui-drawer-header>
      <ui-drawer-title>{{ title }}</ui-drawer-title>
      <ui-drawer-subtitle>{{ subtitle }}</ui-drawer-subtitle>
    </ui-drawer-header>
    <ui-drawer-content>
      <ui-list-group>
        <template v-for="(item, index) in menu">
          <ui-list-divider v-if="item === '-'" :key="`divider-${index}`"></ui-list-divider>
          <template v-else>
            <ui-list-group-subheader v-if="item.subheader" :key="`subheader-${index}`">
              {{ item.subheader }}
            </ui-list-group-subheader>
            <ui-list-nav v-if="item.items" :key="`list-${index}`">
              <ui-item-link v-for="(subItem, subIndex) in item.items"
                :key="subIndex"
                :firstIcon="subItem.icon">
                {{ subItem.name }}
              </ui-item-link>
            </ui-list-nav>
          </template>
        </template>
      </ui-list-group>
    </ui-drawer-content>
  </ui-permanent-drawer>
</template>

<script>
export default {
  data() {
    return {
      title: 'Mail',
      subtitle: 'ui@balmjs.com',
      menu: [
        {
          items: [
            {
              icon: 'inbox',
              name: 'Inbox'
            },
            {
              icon: 'star',
              name: 'Star'
            },
            {
              icon: 'send',
              name: 'Sent Mail'
            },
            {
              icon: 'drafts',
              name: 'Drafts'
            }
          ]
        },
        '-',
        {
          subheader: 'Labels',
          items: [
            {
              icon: 'email',
              name: 'All Mail'
            },
            {
              icon: 'delete',
              name: 'Trash'
            },
            {
              icon: 'report',
              name: 'Spam'
            }
          ]
        },
        '-',
        {
          items: [
            {
              icon: 'settings',
              name: 'Settings'
            },
            {
              icon: 'announcement',
              name: 'Help & feedback'
            }
          ]
        }
      ]
    };
  }
};
</script>

