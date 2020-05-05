<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">Drawer</h6>
    <div class="component-wrapper">
      <ui-drawer>
        <ui-drawer-header>
          <ui-drawer-title>Headline 6</ui-drawer-title>
          <ui-drawer-subtitle>Body 2</ui-drawer-subtitle>
        </ui-drawer-header>
        <ui-drawer-content>
          <ui-nav>
            <template #default="{ itemClass, activeClass }">
              <a
                v-for="(item, index) in [
                  'inbox',
                  'star',
                  'bookmark',
                  'send',
                  'drafts'
                ]"
                :key="index"
                :class="index === 0 ? [itemClass, activeClass] : itemClass"
              >
                <ui-item-first-content>
                  <ui-icon>{{ item }}</ui-icon>
                </ui-item-first-content>
                <ui-item-text-content>Body 2</ui-item-text-content>
              </a>
            </template>
          </ui-nav>
        </ui-drawer-content>
      </ui-drawer>
    </div>
  </section>
</template>
