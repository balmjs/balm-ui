<template>
  <ui-drawer-content>
    <ui-nav #default="{ itemClass, activeClass }">
      <slot></slot>
      <template v-for="(item, index) in menu">
        <ui-list-divider
          v-if="item === '-'"
          :key="`divider-${index}`"
        ></ui-list-divider>
        <template v-else>
          <ui-list-group-subheader
            v-if="item.subheader"
            :key="`subheader-${index}`"
          >
            {{ item.subheader }}
          </ui-list-group-subheader>
          <a
            v-for="(subItem, subIndex) in item.items"
            :key="`item-${index}-${subIndex}`"
            :class="itemClass"
          >
            <ui-item-first-content>
              <ui-icon>{{ subItem.icon }}</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>{{ subItem.name }}</ui-item-text-content>
          </a>
        </template>
      </template>
    </ui-nav>
  </ui-drawer-content>
</template>

<script>
export default {
  data() {
    return {
      menu: []
    };
  },
  created() {
    setTimeout(() => {
      this.menu = [
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
      ];
    }, 100);
  }
};
</script>
