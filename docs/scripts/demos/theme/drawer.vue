<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">Drawer</h6>
    <div class="component-wrapper">
      <ui-drawer>
        <ui-drawer-header>
          <ui-drawer-title :class="$theme.getTextClass('primary', $store.theme)"
            >Headline 6</ui-drawer-title
          >
          <ui-drawer-subtitle
            :class="$theme.getTextClass('secondary', $store.theme)"
            >Body 2</ui-drawer-subtitle
          >
        </ui-drawer-header>
        <ui-drawer-content>
          <ui-nav>
            <ui-nav-item
              v-for="(item, index) in [
                'inbox',
                'star',
                'bookmark',
                'send',
                'drafts'
              ]"
              :key="index"
              href="javascript:void(0)"
              :active="index === 0"
            >
              <ui-item-first-content
                :class="$theme.getTextClass('secondary', $store.theme)"
              >
                <ui-icon>{{ item }}</ui-icon>
              </ui-item-first-content>
              <ui-item-text-content
                :class="$theme.getTextClass('primary', $store.theme)"
                >Body 2</ui-item-text-content
              >
            </ui-nav-item>
          </ui-nav>
        </ui-drawer-content>
      </ui-drawer>
    </div>
  </section>
</template>
