```html
<div>
  <ui-top-app-bar contentSelector=".demo-main" navId="demo-menu" fixed>
    Modal Drawer
  </ui-top-app-bar>

  <ui-drawer type="modal" navId="demo-menu">
    <ui-drawer-header>
      <ui-drawer-title>Title</ui-drawer-title>
      <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
    </ui-drawer-header>
    <ui-drawer-content>
      <ui-list>
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
            <ui-item
              v-for="(subItem, subIndex) in item.items"
              :key="`item-${index}-${subIndex}`"
            >
              <ui-item-first-content>
                <ui-icon>{{ subItem.icon }}</ui-icon>
              </ui-item-first-content>
              <ui-item-text-content>{{ subItem.name }}</ui-item-text-content>
            </ui-item>
          </template>
        </template>
      </ui-list>
    </ui-drawer-content>
  </ui-drawer>

  <ui-drawer-backdrop></ui-drawer-backdrop>

  <main :class="[$tt('body1'), 'demo-main']">
    <div :class="$tt('body2')">
      <h1 :class="$tt('headline4')">Modal Drawer</h1>
      <p>Click the menu icon above to open.</p>
    </div>
  </main>
</div>
```

```js
export default {
  data() {
    return {
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
```
