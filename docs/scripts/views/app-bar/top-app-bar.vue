<template>
  <div class="demo--top-app-bar">
    <ui-top-app-bar
      contentSelector="#content-main"
      navId="demo-menu"
      :variant="selected"
      :title="title"
    >
      <template #toolbar="{ iconClass, itemClass }">
        <a v-if="!isShort" :class="[iconClass, itemClass]">file_download</a>
        <ui-menu-anchor v-if="isShort">
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

        <ui-toc-affix></ui-toc-affix>

        <div :class="$tt('body2')">
          <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
          <ui-markdown :text="code[0]"></ui-markdown>

          <h4 v-anchor:id="'ui-example'" :class="$tt('headline4')">1. Example</h4>
          <div class="demo-controls">
            <ui-select :options="options" v-model="selected">Variant</ui-select>
            <ui-textfield v-model="title">Title</ui-textfield>
          </div>
          <p
            v-for="i in 12"
            :key="i"
            class="demo-paragraph"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ui-accordion>
            <ui-markdown :text="code[1]"></ui-markdown>
          </ui-accordion>

          <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
          <ui-apidocs name="top-app-bar"></ui-apidocs>

          <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">3. Sass Variables</h4>
          <ui-cssdocs name="top-app-bar"></ui-cssdocs>
        </div>
      </div>
    </main>

    <!-- <div
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
    </div>-->
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
import DrawerMixin from '@/mixins/drawer';

const options = [
  {
    label: 'Standard',
    value: 0
  },
  {
    label: 'Fixed',
    value: 1
  },
  {
    label: 'Dense',
    value: 2
  },
  {
    label: 'Prominent',
    value: 3
  },
  {
    label: 'Prominent and Dense',
    value: 4
  },
  {
    label: 'Short',
    value: 5
  },
  {
    label: 'Short, Always Collapsed',
    value: 6
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Top App Bar'
  },
  mixins: [snippets, DrawerMixin],
  data() {
    return {
      options,
      selected: 0,
      title: 'Hello BalmUI',
      open: false,
      showControls: false,
      showMoreActions: false
    };
  },
  computed: {
    isShort() {
      return this.selected === 5;
    }
  },
  created() {
    this.showCode('top-app-bar');
  }
};
</script>
