<template>
  <div class="demo--top-app-bar" :dir="controls.rtl ? 'rtl' : null">
    <ui-top-app-bar
      contentSelector="#content-main"
      navId="demo-menu"
      :actionItems="controls.noAction ? [] : items"
      :dense="controls.dense"
      :fixed="controls.fixed"
      :prominent="controls.prominent"
      :short="controls.short"
      :alwaysClosed="controls.alwaysCollapsed">
      San Francisco, CA
    </ui-top-app-bar>

    <ui-temporary-drawer menuSelector="#demo-menu">
      <ui-drawer-header :innerClass="[$themeColor('on-primary'), $themeColor('primary-bg')]">
        Header here
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-list-group>
          <ui-list-nav>
            <ui-item-link @click.native="() => { $router.back(); }">
              <ui-item-first>
                <ui-icon>&#xE5C4;</ui-icon>
              </ui-item-first>
              Back
            </ui-item-link>
            <ui-item-link v-for="(item, index) in menu1" :key="index">
              <ui-item-first :icon="item.icon"></ui-item-first>
              {{ item.name }}
            </ui-item-link>
          </ui-list-nav>
          <ui-list-divider></ui-list-divider>
          <ui-list-nav>
            <ui-item-link v-for="(item, index) in menu2" :key="index">
              <ui-item-first :icon="item.icon"></ui-item-first>
              {{ item.name }}
            </ui-item-link>
          </ui-list-nav>
        </ui-list-group>
      </ui-drawer-content>
    </ui-temporary-drawer>

    <main class="demo-main">
      <div id="content-main">
        <h3 :class="$tt('headline3')">0. Usage</h3>
        <ui-markdown :text="code[0]"></ui-markdown>

        <h3 :class="$tt('headline3')">1. Example</h3>
        <p v-for="i in 12" :key="i" class="demo-paragraph">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
        </p>
        <ui-accordion>
          <ui-markdown :text="code[1]"></ui-markdown>
        </ui-accordion>

        <h3 :class="$tt('headline3')">2. APIs</h3>
        <ui-apidocs name="top-app-bar"></ui-apidocs>
      </div>
    </main>

    <div class="demo-controls-container" dir="ltr" v-shadow.transition="showControls ? 4 : [4, 12]">
      <template v-if="showControls">
        <h3 :class="$tt('headline6')">
          <span>Demo Controls</span>
          <ui-icon @click="$balmUI.onHide('showControls')" title="Hide Controls">close</ui-icon>
        </h3>
        <div class="demo-row">
          <div class="demo-col">
            <span :class="[$tt('subtitle1'), 'demo-options-heading']">Common Options</span>
            <div>
              <ui-checkbox id="rtl-checkbox" v-model="controls.rtl">
                RTL
              </ui-checkbox>
            </div>
            <div>
              <ui-checkbox id="no-action-item-checkbox" v-model="controls.noAction">
                No Action Item
              </ui-checkbox>
            </div>
          </div>
          <div class="demo-col">
            <span :class="[$tt('subtitle1'), 'demo-options-heading']">Top App Bar Specific Options</span>
            <div>
              <ui-checkbox id="dense-checkbox" v-model="controls.dense">
                Dense
              </ui-checkbox>
            </div>
            <div>
              <ui-checkbox id="fixed-checkbox" v-model="controls.fixed">
                Fixed
              </ui-checkbox>
            </div>
            <div>
              <ui-checkbox id="prominent-checkbox" v-model="controls.prominent">
                Prominent
              </ui-checkbox>
            </div>
          </div>
          <div class="demo-col">
            <span :class="[$tt('subtitle1'), 'demo-options-heading']">Short Top App Bar Specific Options</span>
            <div>
              <ui-checkbox id="short-checkbox" v-model="controls.short"
                :disabled="controls.dense || controls.fixed || controls.prominent">
                Short
              </ui-checkbox>
            </div>
            <div>
              <ui-checkbox id="always-collapsed-checkbox" v-model="controls.alwaysCollapsed"
                :disabled="!controls.short">
                Always Collapsed (Short Only)
              </ui-checkbox>
            </div>
          </div>
        </div>
      </template>
      <ui-icon v-else
        title="Show Controls"
        @click="$balmUI.onShow('showControls')">add</ui-icon>
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
      items: [
        {
          icon: 'file_download',
          label: 'Download'
        }
      ],
      controls: {
        rtl: false,
        noAction: false,
        dense: false,
        fixed: false,
        prominent: false,
        short: false,
        alwaysCollapsed: false
      },
      showControls: false
    };
  },
  created() {
    this.showCode('top-app-bar');
  }
};
</script>

