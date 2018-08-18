<template>
  <div :class="[$tt('body1'), 'demo--menu']">
    <section class="hero component">
      <ui-menu cssOnly
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

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <!-- <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion> -->

      <div class="demo-content">
        <div class="demo-controls-container" dir="ltr">
          <div class="demo-controls">
            <div class="left-column-controls">
              Button Position:
              <div>
                <ui-radio name="position"
                  value="top left"
                  v-model="controls.buttonPosition">Top left</ui-radio>
              </div>
              <div>
                <ui-radio name="position"
                  value="top right"
                  v-model="controls.buttonPosition">Top right</ui-radio>
              </div>
              <div>
                <ui-radio name="position"
                  value="middle left"
                  v-model="controls.buttonPosition">Middle left</ui-radio>
              </div>
              <div>
                <ui-radio name="position"
                  value="middle right"
                  v-model="controls.buttonPosition">Middle right</ui-radio>
              </div>
              <div>
                <ui-radio name="position"
                  value="bottom left"
                  v-model="controls.buttonPosition">Bottom left</ui-radio>
              </div>
              <div>
                <ui-radio name="position"
                  value="bottom right"
                  v-model="controls.buttonPosition">Bottom right</ui-radio>
              </div>
            </div>
            <div class="right-column-controls">
              Default Menu Position:
              <div>
                <ui-radio name="menu-position"
                  value="top start"
                  v-model="controls.menuPosition">Top start</ui-radio>
              </div>
              <div>
                <ui-radio name="menu-position"
                  value="top end"
                  v-model="controls.menuPosition">Top end</ui-radio>
              </div>
              <div>
                <ui-radio name="menu-position"
                  value="bottom start"
                  v-model="controls.menuPosition">Bottom start</ui-radio>
              </div>
              <div>
                <ui-radio name="menu-position"
                  value="bottom end"
                  v-model="controls.menuPosition">Bottom end</ui-radio>
              </div>
            </div>
            <p>
              Anchor Margins:
              <span class="margin-inputs">
                <ui-textfield id="top-margin"
                  v-model="controls.anchorMargin.top">T:</ui-textfield>
                <ui-textfield id="bottom-margin"
                  v-model="controls.anchorMargin.bottom">B:</ui-textfield>
                <ui-textfield id="left-margin"
                  v-model="controls.anchorMargin.left">L:</ui-textfield>
                <ui-textfield id="right-margin"
                  v-model="controls.anchorMargin.right">R:</ui-textfield>
              </span>
            </p>
            <div>
              <ui-checkbox id="is-rtl" v-model="controls.rtl">RTL</ui-checkbox>
            </div>
            <div>
              <ui-checkbox id="animation" v-model="controls.disableAnimation">Disable Open Animation</ui-checkbox>
            </div>
            <div>
              <ui-checkbox id="fixed-position" v-model="controls.fixedPosition">Fixed Position Menu Surface</ui-checkbox>
            </div>
            <!-- <div>
              <ui-checkbox id="right-click" v-model="controls.rightClick">Enable Right-Click Menu Surface</ui-checkbox>
            </div> -->
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

        <div id="demo-wrapper" :dir="controls.rtl ? 'rtl' : null">
          <ui-menu-anchor :position="controls.buttonPosition">
            <ui-button raised class="demo-button demo-button--normal"
              @click="$balmUI.onOpen('open')">
              <span>
                Show Menu
              </span>
            </ui-button>

            <ui-menu id="demo-menu"
              v-model="open"
              :position="menuPosition"
              :margin="anchorMargin"
              :quickOpen="controls.disableAnimation"
              :fixed="controls.fixedPosition"
              @selected="onSelected"
              @closed="onClosed">
              <ui-menuitem nested>
                <ui-menuitem>
                  <ui-menuitem-icon>
                    <svg-selected></svg-selected>
                  </ui-menuitem-icon>
                  Single
                </ui-menuitem>
                <ui-menuitem disabled>
                  <ui-menuitem-icon>
                    <svg-selected></svg-selected>
                  </ui-menuitem-icon>
                  1.15
                </ui-menuitem>
                <ui-menuitem>
                  <ui-menuitem-icon>
                    <svg-selected></svg-selected>
                  </ui-menuitem-icon>
                  Double
                </ui-menuitem>
                <ui-menuitem selected>
                  <ui-menuitem-icon>
                    <svg-selected></svg-selected>
                  </ui-menuitem-icon>
                  Custom: 1.2
                </ui-menuitem>
              </ui-menuitem>
              <ui-item-divider></ui-item-divider>
              <ui-menuitem>Add space before paragraph</ui-menuitem>
              <ui-menuitem>Add space after paragraph</ui-menuitem>
              <ui-item-divider></ui-item-divider>
              <ui-menuitem>Custom spacing...</ui-menuitem>
            </ui-menu>
          </ui-menu-anchor>
        </div>
      </div>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="menu"></ui-apidocs>
      <ui-apidocs name="menuitem"></ui-apidocs>
      <ui-apidocs name="menu-anchor"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import SvgSelected from '../../components/selected';
import snippets from '../../mixins/snippets';

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
      return `${this.controls.anchorMargin.top} ${
        this.controls.anchorMargin.right
      } ${this.controls.anchorMargin.bottom} ${
        this.controls.anchorMargin.left
      }`;
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
