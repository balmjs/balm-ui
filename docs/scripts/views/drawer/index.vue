<template>
  <docs-page
    name="drawer"
    demo-count="5"
    :apis="[
      'ui-drawer',
      'drawer',
      'drawer-header',
      'drawer-content',
      'drawer-backdrop',
      'drawer-app-content'
    ]"
  >
    <template #hero>
      <div class="hero-demo">
        <ui-drawer>
          <ui-drawer-header>
            <ui-drawer-title :class="$theme.getTextClass('primary', $store.theme)">Title</ui-drawer-title>
            <ui-drawer-subtitle :class="$theme.getTextClass('secondary', $store.theme)">Subtitle</ui-drawer-subtitle>
          </ui-drawer-header>
          <ui-drawer-content>
            <ui-nav>
              <ui-nav-item
                v-for="(item, index) in menu"
                :key="index"
                href="javascript:void(0)"
                :active="index === 0"
              >
                <ui-item-first-content :class="$theme.getTextClass('secondary', $store.theme)">
                  <ui-icon>{{ item.icon }}</ui-icon>
                </ui-item-first-content>
                <ui-item-text-content
                  :class="$theme.getTextClass('primary', $store.theme)"
                >{{ item.name }}</ui-item-text-content>
              </ui-nav-item>
            </ui-nav>
          </ui-drawer-content>
        </ui-drawer>
      </div>
    </template>

    <!-- Content -->
    <ui-list non-interactive>
      <ui-item>
        <ui-item-text-content>
          <span>1.1</span>
          <router-link
            v-if="isDesktop"
            :to="{ name: 'navigation.permanent-drawer-above-toolbar' }"
          >Permanent Drawer Above Toolbar</router-link>
          <span v-else>(Desktop only) Permanent Drawer Above Toolbar</span>
        </ui-item-text-content>
      </ui-item>
      <ui-item>
        <ui-item-text-content>
          <span>1.2</span>
          <router-link
            v-if="isDesktop"
            :to="{ name: 'navigation.permanent-drawer-below-toolbar' }"
          >Permanent Drawer Below Toolbar</router-link>
          <span v-else>(Desktop only) Permanent Drawer Below Toolbar</span>
        </ui-item-text-content>
      </ui-item>
      <ui-item>
        <ui-item-text-content>
          <span>1.3</span>
          <router-link
            :to="{ name: 'navigation.dismissible-drawer-full-height-drawer' }"
          >Dismissible Drawer Full Height Drawer</router-link>
        </ui-item-text-content>
      </ui-item>
      <ui-item>
        <ui-item-text-content>
          <span>1.4</span>
          <router-link
            :to="{ name: 'navigation.dismissible-drawer-below-top-app-bar' }"
          >Dismissible Drawer Below Top App Bar</router-link>
        </ui-item-text-content>
      </ui-item>
      <ui-item>
        <ui-item-text-content>
          <span>1.5</span>
          <router-link :to="{ name: 'navigation.modal-drawer' }">Modal Drawer</router-link>
        </ui-item-text-content>
      </ui-item>
    </ui-list>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Drawer'
  },
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
      ],
      isDesktop: window.innerWidth >= 840
    };
  }
};
</script>
