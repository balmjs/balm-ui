<template>
  <div class="demo--top-app-bar" :dir="controls.rtl ? 'rtl' : false">
    <ui-top-app-bar id="demo-top-app-bar"
      contentSelector="#content-main"
      :actionItems="controls.noAction ? [] : items"
      :dense="controls.dense"
      :fixed="controls.fixed"
      :prominent="controls.prominent"
      :short="controls.short"
      :alwaysClosed="controls.alwaysCollapsed"
      @nav="showMenu">
      San Francisco, CA
    </ui-top-app-bar>

    <main class="demo-main">
      <div id="content-main">
        <p v-for="i in 12" :key="i" class="demo-paragraph">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
        </p>
      </div>
    </main>

    <div class="demo-controls-container" dir="ltr">
      <h3 :class="$tt('headline6')">Demo Controls</h3>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      }
    };
  },
  methods: {
    showMenu() {
      console.log('gg');
    }
  }
};
</script>

