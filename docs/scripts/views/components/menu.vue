<template>
  <div class="demo--menu">
    <section class="hero">
      <ui-menu cssOnly
        open
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

    <div class="demo-content">
      <div id="demo-wrapper">
        <ui-menu-anchor :position="controls.position">
          <ui-button id="menu-button"
            class="demo-button demo-button--normal"
            raised
            @click="balmUI.onShow('open')">
            Show<span class="demo-button__normal-text"> Menu</span><span class="demo-button__long-text"> From Here Now!</span>
          </ui-button>

          <ui-menu id="demo-menu"
            v-model="open"
            :position="menuPosition"
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
              <ui-radio name="position" value="top left" v-model="controls.position">Top left</ui-radio>
            </div>
            <div>
              <ui-radio name="position" value="top right" v-model="controls.position">Top right</ui-radio>
            </div>
            <div>
              <ui-radio name="position" value="middle left" v-model="controls.position">Middle left</ui-radio>
            </div>
            <div>
              <ui-radio name="position" value="middle right" v-model="controls.position">Middle right</ui-radio>
            </div>
            <div>
              <ui-radio name="position" value="bottom left" v-model="controls.position">Bottom left</ui-radio>
            </div>
            <div>
              <ui-radio name="position" value="bottom right" v-model="controls.position">Bottom right</ui-radio>
            </div>
          </div>
          <div class="right-column-controls">
            Default Menu Position:
            <div>
              <ui-radio name="menu-position" value="top start" v-model="controls.menuPosition">Top start</ui-radio>
            </div>
            <div>
              <ui-radio name="menu-position" value="top end" v-model="controls.menuPosition"> Top end</ui-radio>
            </div>
            <div>
              <ui-radio name="menu-position" value="bottom start" v-model="controls.menuPosition">Bottom start</ui-radio>
            </div>
            <div>
              <ui-radio name="menu-position" value="bottom end" v-model="controls.menuPosition"> Bottom end</ui-radio>
            </div>
          </div>
          <p>
            Anchor Margins:
            <div id="margin-inputs" class="margin-inputs">
              <label>T: <input type="text" id="top-margin" value="0" size="3" max-length="3"></label>
              <label>B: <input type="text" id="bottom-margin" value="0" size="3"></label>
              <label>L: <input type="text" id="left-margin" value="0" size="3"></label>
              <label>R: <input type="text" id="right-margin" value="0" size="3"></label>
            </div>
          </p>
          <div>
            <label><input type="checkbox" name="is-rtl"> RTL</label>
          </div>
          <div>
            <label><input type="checkbox" name="remember"> Remember Selected Item</label>
          </div>
          <div>
            <label><input type="checkbox" name="animation"> Disable Open Animation</label>
          </div>
          <p>
            <div class="left-column-controls">
              Menu Sizes:
              <div>
                <label><input type="radio" name="menu-length" value="small" checked> Regular menu</label>
              </div>
              <div>
                <label><input type="radio" name="menu-length" value="large"> Large menu</label>
              </div>
              <div>
                <label><input type="radio" name="menu-length" value="tall"> Extra tall menu</label>
              </div>
            </div>
            <div class="right-column-controls">
              Anchor Widths
              <div>
                <label><input type="radio" name="anchor-width" value="tiny"> Small button</label>
              </div>
              <div>
                <label><input type="radio" name="anchor-width" value="regular" checked> Comparable to menu</label>
              </div>
              <div>
                <label><input type="radio" name="anchor-width" value="wide"> Wider than menu</label>
              </div>
            </div>
          </p>
          <hr>
          <div>
            <span>Last Selected item: <em id="last-selected">&lt;{{ selectedValue.label || 'none' }} selected&gt;</em></span>
          </div>
        </div>
      </div>
    </div>

    <!-- <ui-apidoc name="menu"></ui-apidoc>
    <ui-apidoc name="menuitem"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      open: false,
      items: ['Back', 'Forward', 'Reload'],
      longItems: ['Settings', 'Feedback', 'Options...', 'Item 1', 'Item 2'],
      extraLongItems: [3, 4, 5, 6, 7, 8, 9].map(i => `Item ${i}`),
      selectedValue: {},
      controls: {
        position: 'top left',
        menuPosition: 'top start'
      }
    };
  },
  computed: {
    menuPosition() {
      return this.controls.menuPosition
        .toUpperCase()
        .split(' ')
        .join('_');
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
    // this.showCode('menu', 2);
  }
};
</script>
