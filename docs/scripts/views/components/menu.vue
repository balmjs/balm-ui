<template>
  <docs-page
    name="menu"
    demo-count="2"
    :apis="['ui-menu', 'menu', 'menuitem', 'menu-anchor']"
  >
    <template #hero>
      <ui-menu
        :items="[
          'Back',
          'Forward',
          'Reload',
          '-',
          'Help &amp; Feedback',
          'Settings'
        ]"
        css-only
      ></ui-menu>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Simple</h6>
      <div class="demo-content">
        <ui-menu-anchor>
          <ui-button @click="open1 = true">Open Menu</ui-button>
          <ui-menu
            v-model="open1"
            :items="items1"
            @selected="onSelected1"
          ></ui-menu>
        </ui-menu-anchor>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Advanced</h6>
      <div class="demo-content">
        <ui-form
          class="demo-controls"
          item-margin-bottom="16"
          label-width="120"
        >
          <template #default="{ subitemClass, actionClass }">
            <ui-form-field>
              <label>Button Position:</label>
              <div :class="subitemClass">
                <ui-form-field>
                  <ui-radio
                    v-model="controls.buttonPosition"
                    input-id="position-top-left"
                    value="top left"
                  ></ui-radio>
                  <label for="position-top-left">Top left</label>
                </ui-form-field>
                <ui-form-field>
                  <ui-radio
                    v-model="controls.buttonPosition"
                    input-id="position-top-right"
                    value="top right"
                  ></ui-radio>
                  <label for="position-top-right">Top right</label>
                </ui-form-field>
                <ui-form-field>
                  <ui-radio
                    v-model="controls.buttonPosition"
                    input-id="position-middle-left"
                    value="middle left"
                  ></ui-radio>
                  <label for="position-middle-left">Middle left</label>
                </ui-form-field>
                <ui-form-field>
                  <ui-radio
                    v-model="controls.buttonPosition"
                    input-id="position-middle-right"
                    value="middle right"
                  ></ui-radio>
                  <label for="position-middle-right">Middle right</label>
                </ui-form-field>
                <ui-form-field>
                  <ui-radio
                    v-model="controls.buttonPosition"
                    input-id="position-bottom-left"
                    value="bottom left"
                  ></ui-radio>
                  <label for="position-bottom-left">Bottom left</label>
                </ui-form-field>
                <ui-form-field>
                  <ui-radio
                    v-model="controls.buttonPosition"
                    input-id="position-bottom-right"
                    value="bottom right"
                  ></ui-radio>
                  <label for="position-bottom-right">Bottom right</label>
                </ui-form-field>
              </div>
            </ui-form-field>
            <ui-form-field>
              <label>Menu Anchor Corner:</label>
              <div :class="subitemClass">
                <ui-form-field>
                  <ui-radio
                    v-model="controls.menuPosition"
                    input-id="menu-position-top-start"
                    value="top start"
                  ></ui-radio>
                  <label for="menu-position-top-start">Top start</label>
                </ui-form-field>
                <ui-form-field>
                  <ui-radio
                    v-model="controls.menuPosition"
                    input-id="menu-position-top-end"
                    value="top end"
                  ></ui-radio>
                  <label for="menu-position-top-end">Top end</label>
                </ui-form-field>
                <ui-form-field>
                  <ui-radio
                    v-model="controls.menuPosition"
                    input-id="menu-position-bottom-start"
                    value="bottom start"
                  ></ui-radio>
                  <label for="menu-position-bottom-start">Bottom start</label>
                </ui-form-field>
                <ui-form-field>
                  <ui-radio
                    v-model="controls.menuPosition"
                    input-id="menu-position-bottom-end"
                    value="bottom end"
                  ></ui-radio>
                  <label for="menu-position-bottom-end">Bottom end</label>
                </ui-form-field>
              </div>
            </ui-form-field>
            <ui-form-field>
              <label>Menu Distance:</label>
              <div :class="subitemClass">
                <ui-form-field>
                  <ui-textfield v-model="controls.distance.top">
                    Top:
                  </ui-textfield>
                </ui-form-field>
                <ui-form-field>
                  <ui-textfield v-model="controls.distance.right">
                    Right:
                  </ui-textfield>
                </ui-form-field>
                <ui-form-field>
                  <ui-textfield v-model="controls.distance.bottom">
                    Bottom:
                  </ui-textfield>
                </ui-form-field>
                <ui-form-field>
                  <ui-textfield v-model="controls.distance.left">
                    Left:
                  </ui-textfield>
                </ui-form-field>
              </div>
            </ui-form-field>
            <ui-form-field>
              <label>Misc:</label>
              <div :class="subitemClass">
                <ui-form-field>
                  <ui-checkbox
                    v-model="controls.rtl"
                    input-id="is-rtl"
                  ></ui-checkbox>
                  <label for="is-rtl">RTL</label>
                </ui-form-field>
                <ui-form-field>
                  <ui-checkbox
                    v-model="controls.disableAnimation"
                    input-id="animation"
                  ></ui-checkbox>
                  <label for="animation">Disable Open Animation</label>
                </ui-form-field>
                <ui-form-field>
                  <ui-checkbox
                    v-model="controls.fixedPosition"
                    input-id="fixed-position"
                  ></ui-checkbox>
                  <label for="fixed-position">
                    Fixed Position Menu Surface
                  </label>
                </ui-form-field>
              </div>
            </ui-form-field>
            <ui-form-field :class="actionClass">
              Last Selected item:
              <em id="last-selected">{{
                selectedValue
                  ? `"${selectedValue.text}" at index ${selectedValue.index}`
                  : '&lt;none selected&gt;'
              }}</em>
            </ui-form-field>
          </template>
        </ui-form>

        <div class="demo" :dir="controls.rtl ? 'rtl' : null">
          <ui-menu-anchor absolute :position="controls.buttonPosition">
            <ui-button
              raised
              class="demo-button demo-button--normal"
              @click="open2 = true"
            >
              Show Menu
            </ui-button>

            <ui-menu
              id="demo-menu"
              v-model="open2"
              :position="menuPosition"
              :distance="controls.distance"
              :point="controls.point"
              :quick-open="controls.disableAnimation"
              :fixed="controls.fixedPosition"
              @selected="onSelected2"
              @closed="onClosed"
            >
              <ui-menuitem nested>
                <ui-menuitem value="1">
                  <ui-menuitem-icon>
                    <svg-selected></svg-selected>
                  </ui-menuitem-icon>
                  <ui-menuitem-text>Single</ui-menuitem-text>
                </ui-menuitem>
                <ui-menuitem value="2" disabled>
                  <ui-menuitem-icon>
                    <svg-selected></svg-selected>
                  </ui-menuitem-icon>
                  <ui-menuitem-text>1.15</ui-menuitem-text>
                </ui-menuitem>
                <ui-menuitem value="3">
                  <ui-menuitem-icon>
                    <svg-selected></svg-selected>
                  </ui-menuitem-icon>
                  <ui-menuitem-text>Double</ui-menuitem-text>
                </ui-menuitem>
                <ui-menuitem value="4" selected>
                  <ui-menuitem-icon>
                    <svg-selected></svg-selected>
                  </ui-menuitem-icon>
                  <ui-menuitem-text>Custom: 1.2</ui-menuitem-text>
                </ui-menuitem>
              </ui-menuitem>
              <ui-item-divider></ui-item-divider>
              <ui-menuitem value="5">
                <ui-menuitem-text>Add space before paragraph</ui-menuitem-text>
              </ui-menuitem>
              <ui-menuitem value="6">
                <ui-menuitem-text>Add space after paragraph</ui-menuitem-text>
              </ui-menuitem>
              <ui-item-divider></ui-item-divider>
              <ui-menuitem value="7">
                <ui-menuitem-text>Custom spacing...</ui-menuitem-text>
              </ui-menuitem>
            </ui-menu>
          </ui-menu-anchor>
        </div>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
import { reactive, toRefs, computed } from 'vue';
import SvgSelected from '@/components/svg-selected';

const state = reactive({
  items1: [
    {
      text: 'Back'
    },
    {
      text: 'Forward'
    },
    {
      text: 'Reload'
    },
    '-',
    {
      text: 'Help & Feedback'
    },
    {
      text: 'Settings'
    }
  ],
  open1: false,
  open2: false,
  selectedValue: null,
  controls: {
    buttonPosition: 'top left',
    menuPosition: 'top start',
    distance: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    rtl: false,
    disableAnimation: false,
    fixedPosition: false
  }
});

export default {
  metaInfo: {
    titleTemplate: '%s - Menu'
  },
  components: {
    SvgSelected
  },
  setup() {
    const menuPosition = computed(() =>
      state.controls.menuPosition.toUpperCase().split(' ').join('_')
    );

    return {
      ...toRefs(state),
      menuPosition
    };
  },
  methods: {
    onSelected1(data) {
      console.log('onSelected', data);

      const oldIndex = state.items1.findIndex(
        (item) => item !== '-' && item.selected
      );
      if (oldIndex > -1) {
        state.items1[oldIndex].selected = false;
      }

      const newIndex = state.items1.findIndex(
        (item) => item !== '-' && item.text === data.text
      );
      if (newIndex !== -1) {
        state.items1[newIndex].selected = true;
      }
    },
    onSelected2(data) {
      console.log('onSelected', data);
      state.selectedValue = data;
    },
    onClosed() {
      console.log('onClosed');
    }
  }
};
</script>
