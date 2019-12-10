<template>
  <div :class="[$tt('body1'), 'demo--menu']">
    <header class="hero component">
      <ui-menu
        cssOnly
        :items="[
          'Back',
          'Forward',
          'Reload',
          '-',
          'Help &amp; Feedback',
          'Settings'
        ]"
      ></ui-menu>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <div class="demo-content">
        <div class="demo-controls-container" dir="ltr">
          <div class="demo-controls">
            <div class="left-column-controls">
              Button Position:
              <ui-form-field block>
                <ui-radio
                  id="position-top-left"
                  name="position"
                  value="top left"
                  v-model="controls.buttonPosition"
                ></ui-radio>
                <label for="position-top-left">Top left</label>
              </ui-form-field>
              <ui-form-field block>
                <ui-radio
                  id="position-top-right"
                  name="position"
                  value="top right"
                  v-model="controls.buttonPosition"
                ></ui-radio>
                <label for="position-top-right">Top right</label>
              </ui-form-field>
              <ui-form-field block>
                <ui-radio
                  id="position-middle-left"
                  name="position"
                  value="middle left"
                  v-model="controls.buttonPosition"
                ></ui-radio>
                <label for="position-middle-left">Middle left</label>
              </ui-form-field>
              <ui-form-field block>
                <ui-radio
                  id="position-middle-right"
                  name="position"
                  value="middle right"
                  v-model="controls.buttonPosition"
                ></ui-radio>
                <label for="position-middle-right">Middle right</label>
              </ui-form-field>
              <ui-form-field block>
                <ui-radio
                  id="position-bottom-left"
                  name="position"
                  value="bottom left"
                  v-model="controls.buttonPosition"
                ></ui-radio>
                <label for="position-bottom-left">Bottom left</label>
              </ui-form-field>
              <ui-form-field block>
                <ui-radio
                  id="position-bottom-right"
                  name="position"
                  value="bottom right"
                  v-model="controls.buttonPosition"
                ></ui-radio>
                <label for="position-bottom-right">Bottom right</label>
              </ui-form-field>
            </div>
            <div class="right-column-controls">
              Default Menu Position:
              <ui-form-field block>
                <ui-radio
                  id="menu-position-top-start"
                  name="menu-position"
                  value="top start"
                  v-model="controls.menuPosition"
                ></ui-radio>
                <label for="menu-position-top-start">Top start</label>
              </ui-form-field>
              <ui-form-field block>
                <ui-radio
                  id="menu-position-top-end"
                  name="menu-position"
                  value="top end"
                  v-model="controls.menuPosition"
                ></ui-radio>
                <label for="menu-position-top-end">Top end</label>
              </ui-form-field>
              <ui-form-field block>
                <ui-radio
                  id="menu-position-bottom-start"
                  name="menu-position"
                  value="bottom start"
                  v-model="controls.menuPosition"
                ></ui-radio>
                <label for="menu-position-bottom-start">Bottom start</label>
              </ui-form-field>
              <ui-form-field block>
                <ui-radio
                  id="menu-position-bottom-end"
                  name="menu-position"
                  value="bottom end"
                  v-model="controls.menuPosition"
                ></ui-radio>
                <label for="menu-position-bottom-end">Bottom end</label>
              </ui-form-field>
            </div>
            <p>
              Anchor Margins:
              <span class="margin-inputs">
                <ui-textfield
                  id="top-margin"
                  v-model="controls.anchorMargin.top"
                  >T:</ui-textfield
                >
                <ui-textfield
                  id="bottom-margin"
                  v-model="controls.anchorMargin.bottom"
                  >B:</ui-textfield
                >
                <ui-textfield
                  id="left-margin"
                  v-model="controls.anchorMargin.left"
                  >L:</ui-textfield
                >
                <ui-textfield
                  id="right-margin"
                  v-model="controls.anchorMargin.right"
                  >R:</ui-textfield
                >
              </span>
            </p>
            <ui-form-field block>
              <ui-checkbox id="is-rtl" v-model="controls.rtl"></ui-checkbox>
              <label for="is-rtl">RTL</label>
            </ui-form-field>
            <ui-form-field block>
              <ui-checkbox
                id="animation"
                v-model="controls.disableAnimation"
              ></ui-checkbox>
              <label for="animation">Disable Open Animation</label>
            </ui-form-field>
            <ui-form-field block>
              <ui-checkbox
                id="fixed-position"
                v-model="controls.fixedPosition"
              ></ui-checkbox>
              <label for="fixed-position">Fixed Position Menu Surface</label>
            </ui-form-field>
            <!-- <ui-form-field block>
              <ui-checkbox id="right-click" v-model="controls.rightClick"></ui-checkbox>
              <label for="right-click">Enable Right-Click Menu Surface</label>
            </ui-form-field>-->
            <hr />
            <div>
              <span>
                Last Selected item:
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

        <div id="demo-wrapper" :dir="controls.rtl ? 'rtl' : null">
          <ui-menu-anchor :position="controls.buttonPosition">
            <ui-button
              raised
              class="demo-button demo-button--normal"
              @click="$balmUI.onOpen('open')"
            >
              <span>Show Menu</span>
            </ui-button>

            <ui-menu
              id="demo-menu"
              v-model="open"
              :position="menuPosition"
              :margin="anchorMargin"
              :quickOpen="controls.disableAnimation"
              :fixed="controls.fixedPosition"
              @selected="onSelected"
              @closed="onClosed"
            >
              <ui-menuitem nested>
                <ui-menuitem>
                  <ui-menuitem-icon>
                    <svg-selected></svg-selected>
                  </ui-menuitem-icon>
                  <ui-menuitem-text>Single</ui-menuitem-text>
                </ui-menuitem>
                <ui-menuitem disabled>
                  <ui-menuitem-icon>
                    <svg-selected></svg-selected>
                  </ui-menuitem-icon>
                  <ui-menuitem-text>1.15</ui-menuitem-text>
                </ui-menuitem>
                <ui-menuitem>
                  <ui-menuitem-icon>
                    <svg-selected></svg-selected>
                  </ui-menuitem-icon>
                  <ui-menuitem-text>Double</ui-menuitem-text>
                </ui-menuitem>
                <ui-menuitem selected>
                  <ui-menuitem-icon>
                    <svg-selected></svg-selected>
                  </ui-menuitem-icon>
                  <ui-menuitem-text>Custom: 1.2</ui-menuitem-text>
                </ui-menuitem>
              </ui-menuitem>
              <ui-item-divider></ui-item-divider>
              <ui-menuitem>
                <ui-menuitem-text>Add space before paragraph</ui-menuitem-text>
              </ui-menuitem>
              <ui-menuitem>
                <ui-menuitem-text>Add space after paragraph</ui-menuitem-text>
              </ui-menuitem>
              <ui-item-divider></ui-item-divider>
              <ui-menuitem>
                <ui-menuitem-text>Custom spacing...</ui-menuitem-text>
              </ui-menuitem>
            </ui-menu>
          </ui-menu-anchor>
        </div>
      </div>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="menu"></ui-apidocs>
      <ui-apidocs name="menuitem"></ui-apidocs>
      <ui-apidocs name="menu-anchor"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="menu"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import SvgSelected from '@/components/selected';
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Menu'
  },
  components: {
    SvgSelected
  },
  mixins: [snippets],
  data() {
    return {
      open: false,
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
        disableAnimation: false,
        fixedPosition: false,
        rightClick: false
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
      return `${this.controls.anchorMargin.top} ${this.controls.anchorMargin.right} ${this.controls.anchorMargin.bottom} ${this.controls.anchorMargin.left}`;
    }
  },
  methods: {
    onSelected(data) {
      console.log('onSelected', data);
      this.selectedValue = data;
    },
    onClosed() {
      console.log('onClosed');
    }
  },
  created() {
    this.showCode('menu');
  }
};
</script>
