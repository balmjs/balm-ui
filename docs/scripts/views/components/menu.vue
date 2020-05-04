<template>
  <ui-page-structure
    name="menu"
    demoCount="2"
    :apis="['ui-menu', 'menu', 'menuitem', 'menu-anchor']"
  >
    <template #hero>
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
    </template>

    <!-- Content -->
    <h6 :class="$tt('headline6')">1.1 Simple</h6>
    <div class="demo-content">
      <ui-button @click="$balmUI.onOpen('open1')">Open Menu</ui-button>
      <ui-menu
        v-model="open1"
        :items="[
          'Back',
          'Forward',
          'Reload',
          '-',
          'Help &amp; Feedback',
          'Settings'
        ]"
      ></ui-menu>
    </div>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>

    <h6 :class="$tt('headline6')">1.2 Advanced</h6>
    <div class="demo-content">
      <div class="demo-controls" dir="ltr">
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
        <div class="margin-controls">
          Anchor Margins:
          <ui-form-field block>
            <ui-textfield id="top-margin" v-model="controls.anchorMargin.top"
              >Top:</ui-textfield
            >
            <ui-textfield
              id="bottom-margin"
              v-model="controls.anchorMargin.bottom"
              >Bottom:</ui-textfield
            >
            <ui-textfield id="left-margin" v-model="controls.anchorMargin.left"
              >Lelf:</ui-textfield
            >
            <ui-textfield
              id="right-margin"
              v-model="controls.anchorMargin.right"
              >Right:</ui-textfield
            >
          </ui-form-field>
        </div>
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

      <div class="demo-wrapper" :dir="controls.rtl ? 'rtl' : null">
        <ui-menu-anchor :position="controls.buttonPosition">
          <ui-button
            raised
            class="demo-button demo-button--normal"
            @click="$balmUI.onOpen('open2')"
            >Show Menu</ui-button
          >

          <ui-menu
            id="demo-menu"
            v-model="open2"
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
    <ui-snippet :code="$store.demos[2]"></ui-snippet>
  </ui-page-structure>
</template>

<script>
import SvgSelected from '@/components/svg-selected';

export default {
  metaInfo: {
    titleTemplate: '%s - Menu'
  },
  components: {
    SvgSelected
  },
  data() {
    return {
      open1: false,
      open2: false,
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
      return this.controls.menuPosition.toUpperCase().split(' ').join('_');
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
  }
};
</script>
