<template>
  <div class="demo--top-app-bar" :dir="controls.rtl ? 'rtl' : null">
    <ui-top-app-bar
      contentSelector="#content-main"
      navId="demo-menu"
      :dense="controls.dense"
      :fixed="controls.fixed"
      :prominent="controls.prominent"
      :short="controls.short"
      :alwaysClosed="controls.alwaysCollapsed"
    >Hello BalmUI
      <template slot="toolbar" slot-scope="{ iconClass, itemClass }">
        <a
          v-if="!controls.short && !controls.noAction"
          :class="[iconClass, itemClass]"
        >file_download</a>
        <ui-menu-anchor v-if="controls.short">
          <a :class="[iconClass, itemClass]" @click="$balmUI.onOpen('showMoreActions')">more_vert</a>
          <ui-menu
            v-model="showMoreActions"
            :items="[
              'Back',
              'Forward',
              'Reload',
              '-',
              'Settings'
            ]"
          ></ui-menu>
        </ui-menu-anchor>
      </template>
    </ui-top-app-bar>

    <ui-modal-drawer v-model="open" menuSelector="#demo-menu">
      <ui-drawer-header :innerClass="[$themeColor('on-primary'), $themeColor('primary-bg')]">
        <ui-drawer-title>Header here</ui-drawer-title>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-list-nav>
          <ui-item-a @click.native="() => { $router.back(); }" firstIcon="arrow_back">Back</ui-item-a>
          <ui-list-divider></ui-list-divider>
        </ui-list-nav>
      </ui-drawer-content>
    </ui-modal-drawer>

    <ui-drawer-scrim></ui-drawer-scrim>

    <main class="demo-main">
      <div :class="$tt('body1')" id="content-main">
        <section class="hero component">
          <h2 :class="$tt('headline4')">Top App Bar</h2>
        </section>

        <div :class="$tt('body2')">
          <h4 :class="$tt('headline4')">0. Usage</h4>
          <ui-markdown :text="code[0]"></ui-markdown>

          <h4 :class="$tt('headline4')">1. Example</h4>
          <p
            v-for="i in 12"
            :key="i"
            class="demo-paragraph"
          >Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.</p>
          <ui-accordion>
            <ui-markdown :text="code[1]"></ui-markdown>
          </ui-accordion>

          <h4 :class="$tt('headline4')">2. APIs</h4>
          <ui-apidocs name="top-app-bar"></ui-apidocs>
        </div>
      </div>
    </main>

    <div
      :class="['demo-controls-container', {'show': showControls}]"
      dir="ltr"
      v-shadow.transition="showControls ? 4 : [4, 12]"
    >
      <template v-if="showControls">
        <h3 :class="$tt('headline6')">
          <span>Demo Controls</span>
          <ui-icon @click="$balmUI.onHide('showControls')" title="Hide Controls">close</ui-icon>
        </h3>
        <div class="demo-row">
          <div class="demo-col">
            <span :class="[$tt('subtitle1'), 'demo-options-heading']">Common Options</span>
            <div>
              <ui-checkbox id="rtl-checkbox" v-model="controls.rtl">RTL</ui-checkbox>
            </div>
            <div>
              <ui-checkbox id="no-action-item-checkbox" v-model="controls.noAction">No Action Item</ui-checkbox>
            </div>
          </div>
          <div class="demo-col">
            <span :class="[$tt('subtitle1'), 'demo-options-heading']">Top App Bar Specific Options</span>
            <div>
              <ui-checkbox id="dense-checkbox" v-model="controls.dense">Dense</ui-checkbox>
            </div>
            <div>
              <ui-checkbox id="fixed-checkbox" v-model="controls.fixed">Fixed</ui-checkbox>
            </div>
            <div>
              <ui-checkbox id="prominent-checkbox" v-model="controls.prominent">Prominent</ui-checkbox>
            </div>
          </div>
          <div class="demo-col">
            <span
              :class="[$tt('subtitle1'), 'demo-options-heading']"
            >Short Top App Bar Specific Options</span>
            <div>
              <ui-checkbox
                id="short-checkbox"
                v-model="controls.short"
                :disabled="controls.dense || controls.fixed || controls.prominent"
              >Short</ui-checkbox>
            </div>
            <div>
              <ui-checkbox
                id="always-collapsed-checkbox"
                v-model="controls.alwaysCollapsed"
                :disabled="!controls.short"
              >Always Collapsed (Short Only)</ui-checkbox>
            </div>
          </div>
        </div>
      </template>
      <ui-icon v-else title="Show Controls" @click="$balmUI.onShow('showControls')">add</ui-icon>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import DrawerMixin from '../../mixins/drawer';

export default {
  metaInfo: {
    titleTemplate: '%s - Top App Bar'
  },
  mixins: [snippets, DrawerMixin],
  data() {
    return {
      open: false,
      controls: {
        rtl: false,
        noAction: false,
        dense: false,
        fixed: false,
        prominent: false,
        short: false,
        alwaysCollapsed: false
      },
      showControls: false,
      showMoreActions: false
    };
  },
  created() {
    this.showCode('top-app-bar');
  }
};
</script>
