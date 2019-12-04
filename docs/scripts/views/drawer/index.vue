<template>
  <div :class="[$tt('body1'), 'demo--drawer']">
    <header class="hero component">
      <div class="hero-demo">
        <ui-drawer>
          <ui-drawer-header>
            <ui-drawer-title>Title</ui-drawer-title>
            <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
          </ui-drawer-header>
          <ui-drawer-content>
            <ui-list>
              <template #default="{ activatedClass }">
                <ui-item
                  v-for="(item, index) in menu"
                  :key="index"
                  :activated="index === 0"
                >
                  <ui-item-first-content
                    :icon="item.icon"
                  ></ui-item-first-content>
                  <ui-item-text-content>{{ item.name }}</ui-item-text-content>
                </ui-item>
              </template>
            </ui-list>
          </ui-drawer-content>
        </ui-drawer>
      </div>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demos'" :class="$tt('headline4')">1. Example</h4>
      <ui-list nonInteractive>
        <ui-item>
          <ui-item-text-content>
            <span>1.1</span>
            <router-link
              :to="{ name: 'navigation.permanent-drawer-above-toolbar' }"
              >Permanent Drawer Above Toolbar</router-link
            >
          </ui-item-text-content>
        </ui-item>
        <ui-item>
          <ui-item-text-content>
            <span>1.2</span>
            <router-link
              :to="{ name: 'navigation.permanent-drawer-below-toolbar' }"
              >Permanent Drawer Below Toolbar</router-link
            >
          </ui-item-text-content>
        </ui-item>
        <ui-item>
          <ui-item-text-content>
            <span>1.3</span>
            <router-link :to="{ name: 'navigation.dismissible-drawer' }"
              >Dismissible Drawer</router-link
            >
          </ui-item-text-content>
        </ui-item>
        <ui-item>
          <ui-item-text-content>
            <span>1.4</span>
            <router-link :to="{ name: 'navigation.modal-drawer' }"
              >Modal Drawer</router-link
            >
          </ui-item-text-content>
        </ui-item>
      </ui-list>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="drawer"></ui-apidocs>
      <ui-apidocs name="drawer-header"></ui-apidocs>
      <ui-apidocs name="drawer-content"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="drawer"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import DrawerMixin from '@/mixins/drawer';
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Drawer'
  },
  mixins: [DrawerMixin, snippets],
  data() {
    return {
      menu: [
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
    };
  },
  created() {
    this.showCode('drawer');
  }
};
</script>
