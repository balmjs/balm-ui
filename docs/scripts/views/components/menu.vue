<template>
  <div class="demo--menu">
    <section class="hero component">
      <ui-menu cssOnly
        class="mdc-menu--open"
        :items="[
          'Back',
          'Forward',
          'Reload',
          '-',
          'Help &amp; Feedback',
          'Settings'
        ]">
      </ui-menu>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">1. Example</h3>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>
    <div class="demo-content">
      <div id="demo-wrapper" :dir="controls.rtl ? 'rtl' : null">
        <ui-menu-anchor :position="controls.buttonPosition">
          <ui-button id="menu-button"
            :class="[
              'demo-button',
              {'demo-button--normal': isRegularWidth},
              {'demo-button--long': isWideWidth}
            ]"
            raised
            @click="$balmUI.onShow('open')">
            Show
            <span v-if="isWideWidth || isRegularWidth" class="demo-button__normal-text"> Menu</span>
            <span v-if="isWideWidth" class="demo-button__long-text"> From Here Now!</span>
          </ui-button>

          <ui-menu id="demo-menu"
            :class="[
              {'demo-menu--long': controls.menuLength === 'large'},
              {'demo-menu--extra-long': controls.menuLength === 'tall'}
            ]"
            v-model="open"
            :position="menuPosition"
            :margin="anchorMargin"
            :rememberSelection="controls.rememberSelection"
            :quickOpen="controls.disableAnimation"
            @selected="onSelected"
            @cancel="onCancel">
            <ui-menuitem v-for="(item, index) in items" :key="index">
              {{ item }}
            </ui-menuitem>
            <ui-item-divider></ui-item-divider>
            <ui-menuitem>Save As...</ui-menuitem>
            <ui-menuitem>Help</ui-menuitem>
            <span class="demo-menu__long-items">
              <ui-menuitem v-for="(item, index) in longItems" :key="index">
                {{ item }}
              </ui-menuitem>
            </span>
            <span class="demo-menu__extra-long-items">
              <ui-menuitem v-for="(item, index) in extraLongItems" :key="index">
                {{ item }}
              </ui-menuitem>
            </span>
          </ui-menu>
        </ui-menu-anchor>
      </div>

      <div class="demo-controls-container">
        <div class="demo-controls">
          <div class="left-column-controls">
            Button Position:
            <div>
              <ui-radio name="position" value="top left" v-model="controls.buttonPosition"> Top left</ui-radio>
            </div>
            <div>
              <ui-radio name="position" value="top right" v-model="controls.buttonPosition"> Top right</ui-radio>
            </div>
            <div>
              <ui-radio name="position" value="middle left" v-model="controls.buttonPosition"> Middle left</ui-radio>
            </div>
            <div>
              <ui-radio name="position" value="middle right" v-model="controls.buttonPosition"> Middle right</ui-radio>
            </div>
            <div>
              <ui-radio name="position" value="bottom left" v-model="controls.buttonPosition"> Bottom left</ui-radio>
            </div>
            <div>
              <ui-radio name="position" value="bottom right" v-model="controls.buttonPosition"> Bottom right</ui-radio>
            </div>
          </div>
          <div class="right-column-controls">
            Default Menu Position:
            <div>
              <ui-radio name="menu-position" value="top start" v-model="controls.menuPosition"> Top start</ui-radio>
            </div>
            <div>
              <ui-radio name="menu-position" value="top end" v-model="controls.menuPosition"> Top end</ui-radio>
            </div>
            <div>
              <ui-radio name="menu-position" value="bottom start" v-model="controls.menuPosition"> Bottom start</ui-radio>
            </div>
            <div>
              <ui-radio name="menu-position" value="bottom end" v-model="controls.menuPosition"> Bottom end</ui-radio>
            </div>
          </div>
          <div>
            Anchor Margins:
            <div id="margin-inputs" class="margin-inputs">
              <ui-textfield id="top-margin" v-model="controls.anchorMargin.top">T:</ui-textfield>
              <ui-textfield id="bottom-margin" v-model="controls.anchorMargin.bottom">B:</ui-textfield>
              <ui-textfield id="left-margin" v-model="controls.anchorMargin.left">L:</ui-textfield>
              <ui-textfield id="right-margin" v-model="controls.anchorMargin.right">R:</ui-textfield>
            </div>
          </div>
          <div>
            <ui-checkbox id="is-rtl" v-model="controls.rtl"> RTL</ui-checkbox>
          </div>
          <div>
            <ui-checkbox id="remember" v-model="controls.rememberSelection"> Remember Selected Item</ui-checkbox>
          </div>
          <div>
            <ui-checkbox id="animation" v-model="controls.disableAnimation"> Disable Open Animation</ui-checkbox>
          </div>
          <div>
            <div class="left-column-controls">
              Menu Sizes:
              <div>
                <ui-radio name="menu-length" value="small" v-model="controls.menuLength"> Regular menu</ui-radio>
              </div>
              <div>
                <ui-radio name="menu-length" value="large" v-model="controls.menuLength"> Large menu</ui-radio>
              </div>
              <div>
                <ui-radio name="menu-length" value="tall" v-model="controls.menuLength"> Extra tall menu</ui-radio>
              </div>
            </div>
            <div class="right-column-controls">
              Anchor Widths
              <div>
                <ui-radio name="anchor-width" value="tiny" v-model="controls.anchorWidth"> Small button</ui-radio>
              </div>
              <div>
                <ui-radio name="anchor-width" value="regular" v-model="controls.anchorWidth"> Comparable to menu</ui-radio>
              </div>
              <div>
                <ui-radio name="anchor-width" value="wide" v-model="controls.anchorWidth"> Wider than menu</ui-radio>
              </div>
            </div>
          </div>
          <hr>
          <div>
            <span>Last Selected item:
              <em id="last-selected">
                {{
                  selectedValue
                    ? `"${selectedValue.label}" at index ${selectedValue.index}`
                    : '&lt;none selected&gt;'
                }}
              </em>
            </span>
          </div>
        </div>
      </div>
    </div>

    <h3 :class="$tt('headline3')">2. APIs</h3>
    <ui-apidocs name="menu"></ui-apidocs>
    <ui-apidocs name="menuitem"></ui-apidocs>
    <ui-apidocs name="menu-anchor"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Menu'
  },
  mixins: [snippets],
  data() {
    return {
      open: false,
      items: ['Back', 'Forward', 'Reload'],
      longItems: ['Settings', 'Feedback', 'Options...', 'Item 1', 'Item 2'],
      extraLongItems: [3, 4, 5, 6, 7, 8, 9].map(i => `Item ${i}`),
      selectedValue: null,
      controls: {
        buttonPosition: 'top left',
        menuPosition: 'top start',
        anchorMargin: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        rtl: false,
        rememberSelection: false,
        disableAnimation: false,
        menuLength: 'small',
        anchorWidth: 'regular'
      }
    };
  },
  computed: {
    menuPosition() {
      return this.controls.menuPosition
        .toUpperCase()
        .split(' ')
        .join('_');
    },
    anchorMargin() {
      return `${this.controls.anchorMargin.top} ${
        this.controls.anchorMargin.right
      } ${this.controls.anchorMargin.bottom} ${
        this.controls.anchorMargin.left
      }`;
    },
    isRegularWidth() {
      return this.controls.anchorWidth === 'regular';
    },
    isWideWidth() {
      return this.controls.anchorWidth === 'wide';
    }
  },
  methods: {
    onSelected(data) {
      console.log('onSelected', data);
      this.selectedValue = data;
    },
    onCancel() {
      console.log('onCancel');
    }
  },
  created() {
    this.showCode('menu');
  }
};
</script>
