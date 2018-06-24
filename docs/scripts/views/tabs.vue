<template>
  <div class="demo--tabs">
    <section class="hero">
      <ui-tabs id="demo-tab-bar" :items="tabs"></ui-tabs>
    </section>

    <section>
      <fieldset>
        <legend :class="$tt('headline6')">Basic Tab Bar</legend>
        <ui-tab-bar id="basic-tab-bar">
          <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
            {{ tab.label }}
          </ui-tab>
        </ui-tab-bar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="$tt('headline6')">Basic Tab Bar / Custom Label Color</legend>
        <ui-tab-bar id="basic-tab-bar-custom-label-color" class="custom-label-color-tab">
          <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
            {{ tab.label }}
          </ui-tab>
        </ui-tab-bar>
      </fieldset>
    </section>

    <section>
      <div class="demo-tabs__scroller">
        <h2 :class="[$tt('headline6'), 'demo-title']">Tab Bar with Scroller</h2>
        <ui-tab-bar-scroller id="tab-bar-scroller">
          <ui-tab v-for="(tab, index) in 9" :key="index" :href="`#${tab}`">
            Item {{ tab }}
          </ui-tab>
        </ui-tab-bar-scroller>
      </div>
    </section>

    <section>
      <fieldset>
        <legend :class="$tt('headline6')">Icon Tab Labels</legend>
        <ui-tab-bar type="1" id="icon-tab-bar">
          <ui-tab v-for="(tab, index) in tabs2" :key="index"
            :icon="tab.icon" :href="tab.url">
          </ui-tab>
        </ui-tab-bar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="$tt('headline6')">Icon Tab Labels / Custom Icon Color</legend>
        <ui-tab-bar type="1" id="icon-tab-bar-custom-icon-color" class="custom-icon-color-tab">
          <ui-tab v-for="(tab, index) in tabs2" :key="index"
            :icon="tab.icon" :href="tab.url">
          </ui-tab>
        </ui-tab-bar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="$tt('headline6')">Icon &amp; Text Labels</legend>
        <ui-tab-bar type="2" id="icon-text-tab-bar">
          <ui-tab v-for="(tab, index) in tabs2" :key="index"
            :icon="tab.icon" :text="tab.text" :href="tab.url">
          </ui-tab>
        </ui-tab-bar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="$tt('headline6')">Icon &amp; Text Labels / Custom Colors</legend>
        <ui-tab-bar type="2" id="icon-text-tab-bar-custom-colors" class="custom-ink-color-tab">
          <ui-tab v-for="(tab, index) in tabs2" :key="index"
            :icon="tab.icon" :text="tab.text" :href="tab.url">
          </ui-tab>
        </ui-tab-bar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="$tt('headline6')">Custom Indicator Colors</legend>
        <ui-tab-bar id="custom-indicator-tab-bar" class="custom-indicator-tab-bar">
          <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
            {{ tab.label }}
          </ui-tab>
        </ui-tab-bar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="$tt('headline6')">Within mdc-toolbar</legend>
        <ui-toolbar>
          <ui-toolbar-row>
            <ui-toolbar-section fit align="start">
              <ui-toolbar-title>Title</ui-toolbar-title>
            </ui-toolbar-section>
            <ui-toolbar-section align="end">
              <div>
                <ui-tab-bar class="custom-tab-bar-in-toolbar">
                  <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
                    {{ tab.label }}
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
        <legend :class="$tt('headline6')">Within MDCToolbar - fixed to bottom of toolbar</legend>
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
              <ui-tab-bar class="custom-tab-bar-in-toolbar">
                <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
                  {{ tab.label }}
                </ui-tab>
              </ui-tab-bar>
            </ui-toolbar-section>
          </ui-toolbar-row>
        </ui-toolbar>
      </fieldset>
    </section>

    <section>
      <fieldset>
        <legend :class="$tt('headline6')">Within mdc-toolbar + custom color indicator</legend>
        <div class="demo-note">
          <em>Note: Changing the toolbar's background color here so that the primary indicator can be visible</em>
        </div>
        <ui-toolbar>
          <ui-toolbar-row>
            <ui-toolbar-section fit align="start">
              <ui-toolbar-title>Title</ui-toolbar-title>
            </ui-toolbar-section>
            <ui-toolbar-section align="end">
              <div>
                <ui-tab-bar class="custom-indicator-tab-bar-in-toolbar">
                  <ui-tab v-for="(tab, index) in tabs" :key="index" :href="tab.url">
                    {{ tab.label }}
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
        <legend :class="$tt('headline6')">Within Toolbar, Dynamic Content Control</legend>
        <ui-toolbar id="dynamic-demo-toolbar">
          <ui-toolbar-row>
            <ui-toolbar-section fit align="start">
              <ui-tabs accent
                id="dynamic-tab-bar"
                :items="tabs"
                v-model="active"></ui-tabs>
            </ui-toolbar-section>
          </ui-toolbar-row>
        </ui-toolbar>
        {{ active }}
        <section>
          <ui-panels class="panels" v-model="active">
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
      tabs: [
        {
          label: 'Item One',
          url: '#one',
          panel: 'panel-1'
        },
        {
          label: 'Item Two',
          url: '#two',
          panel: 'panel-2'
        },
        {
          label: 'Item Three',
          url: '#three',
          panel: 'panel-3'
        }
      ],
      tabs2: [
        {
          icon: 'phone',
          url: '#recents',
          text: 'Recents'
        },
        {
          icon: 'favorite',
          url: '#favorites',
          text: 'Favorites'
        },
        {
          icon: 'person_pin',
          url: '#nearby',
          text: 'Nearby'
        }
      ]
    };
  },
  created() {
    // this.showCode('tabs', 3);
  }
};
</script>
