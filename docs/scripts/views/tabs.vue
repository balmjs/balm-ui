<template>
  <div class="demo--tabs">
    <section class="hero">
      <ui-tabs id="demo-tab-bar" :data="tabs"></ui-tabs>
    </section>

    <section>
      <fieldset>
        <legend :class="typography('title')">Basic Tab Bar</legend>
        <ui-tab-bar id="basic-tab-bar">
          <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
            {{ tab.name }}
          </ui-tab>
        </ui-tab-bar>
      </fieldset>
    </section>

    <section>
      <div class="demo-tabs__scroller">
        <h2 :class="[typography('title'), 'demo-title']">Tab Bar with Scroller</h2>
        <ui-tab-bar-scroller id="tab-bar-scroller" @change="(index) => { console.log(index); }">
          <ui-tab v-for="(tab, index) in 9" :key="index" :href="`#${tab}`">
            Item {{ tab }}
          </ui-tab>
        </ui-tab-bar-scroller>
      </div>
    </section>

    <section>
      <fieldset>
        <legend :class="typography('title')">Icon Tab Labels</legend>
        <ui-tab-bar type="1" id="icon-tab-bar">
          <ui-tab v-for="(tab, index) in tabs2" :key="index"
            :icon="tab.icon" :href="tab.url">
          </ui-tab>
        </ui-tab-bar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="typography('title')">Icon &amp; Text Labels</legend>
        <ui-tab-bar type="2" id="icon-text-tab-bar">
          <ui-tab v-for="(tab, index) in tabs2" :key="index"
            :icon="tab.icon" :text="tab.text" :href="tab.url">
          </ui-tab>
        </ui-tab-bar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="typography('title')">Primary Color Indicator</legend>
        <ui-tab-bar primary id="primary-indicator-tab-bar">
          <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
            {{ tab.name }}
          </ui-tab>
        </ui-tab-bar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="typography('title')">Secondary Color Indicator</legend>
        <ui-tab-bar accent id="accent-indicator-tab-bar">
          <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
            {{ tab.name }}
          </ui-tab>
        </ui-tab-bar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="typography('title')">Within mdc-toolbar</legend>
        <ui-toolbar>
          <ui-toolbar-row>
            <ui-toolbar-section fit align="start">
              <ui-toolbar-title>Title</ui-toolbar-title>
            </ui-toolbar-section>
            <ui-toolbar-section align="end">
              <div>
                <ui-tab-bar id="toolbar-tab-bar">
                  <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
                    {{ tab.name }}
                  </ui-tab>
                </ui-tab-bar>
              </div>
            </ui-toolbar-section>
          </ui-toolbar-row>
        </ui-toolbar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="typography('title')">Within MDCToolbar - fixed to bottom of toolbar</legend>
        <div class="demo-note">
          <em>Note: The style used to acheive this example is:</em>
          <pre><code>.my-modified-toolbar-section {
  position: absolute;
  right: 0;
  bottom: 0;
}

[dir="rtl"] .my-modified-toolbar-section {
  right: auto;
  left: 0;
}</code></pre>
        </div>
        <ui-toolbar>
          <ui-toolbar-row>
            <ui-toolbar-section fit align="start">
              <ui-toolbar-title>Title</ui-toolbar-title>
            </ui-toolbar-section>
            <ui-toolbar-section class="my-modified-toolbar-section">
              <ui-tab-bar id="toolbar-tab-bar-modified">
                <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
                  {{ tab.name }}
                </ui-tab>
              </ui-tab-bar>
            </ui-toolbar-section>
          </ui-toolbar-row>
        </ui-toolbar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="typography('title')">Within mdc-toolbar + primary indicator</legend>
        <div class="demo-note">
          <em>Note: Changing the toolbar's background color here so that the primary indicator can be visible</em>
        </div>
        <ui-toolbar :class="themeColor('secondary', true)">
          <ui-toolbar-row>
            <ui-toolbar-section fit align="start">
              <ui-toolbar-title>Title</ui-toolbar-title>
            </ui-toolbar-section>
            <ui-toolbar-section align="end">
              <div>
                <ui-tab-bar primary id="toolbar-tab-bar-primary-indicator">
                  <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
                    {{ tab.name }}
                  </ui-tab>
                </ui-tab-bar>
              </div>
            </ui-toolbar-section>
          </ui-toolbar-row>
        </ui-toolbar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="typography('title')">Within mdc-toolbar + secondary indicator</legend>
        <ui-toolbar>
          <ui-toolbar-row>
            <ui-toolbar-section fit align="start">
              <ui-toolbar-title>Title</ui-toolbar-title>
            </ui-toolbar-section>
            <ui-toolbar-section align="end">
              <div>
                <ui-tab-bar accent id="toolbar-tab-bar-accent-indicator">
                  <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
                    {{ tab.name }}
                  </ui-tab>
                </ui-tab-bar>
              </div>
            </ui-toolbar-section>
          </ui-toolbar-row>
        </ui-toolbar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="typography('title')">Within Toolbar, Dynamic Content Control</legend>
        <ui-toolbar id="dynamic-demo-toolbar">
          <ui-toolbar-row>
            <ui-toolbar-section fit align="start">
              <ui-tabs accent
                id="dynamic-tab-bar"
                :data="tabs"
                :active="active"
                @change="onChange('active', $event)"></ui-tabs>
            </ui-toolbar-section>
          </ui-toolbar-row>
        </ui-toolbar>
        <section>
          <ui-panels class="panels" :active="active">
            <ui-panel>Panel One</ui-panel>
            <ui-panel>Panel Two</ui-panel>
            <ui-panel>Panel Three</ui-panel>
          </ui-panels>
        </section>
      </fieldset>
    </section>

    <!-- <ui-apidoc name="tabs"></ui-apidoc>
    <ui-apidoc name="panel"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      active: 0,
      tabs: [{
        name: 'Item One',
        url: '#one',
        panel: 'panel-1'
      }, {
        name: 'Item Two',
        url: '#two',
        panel: 'panel-2'
      }, {
        name: 'Item Three',
        url: '#three',
        panel: 'panel-3'
      }],
      tabs2: [{
        icon: 'phone',
        url: '#recents',
        text: 'Recents'
      }, {
        icon: 'favorite',
        url: '#favorites',
        text: 'Favorites'
      }, {
        icon: 'person_pin',
        url: '#nearby',
        text: 'Nearby'
      }]
    };
  },
  created() {
    // this.showCode('tabs', 3);
  }
};
</script>
