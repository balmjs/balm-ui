<template>
  <ui-page name="menu" demo-count="2" :apis="['ui-menu', 'menu', 'menuitem', 'menu-anchor']">
    <template #hero>
      <ui-menu
        css-only
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
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Simple</h6>
      <div class="demo-content">
        <ui-menu-anchor>
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
            @selected="onSelected1"
          ></ui-menu>
        </ui-menu-anchor>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Advanced</h6>
      <div class="demo-content">
        <ui-form class="demo-controls" dir="ltr">
          <div class="left-column-controls">
            Button Position:
            <ui-form-field>
              <ui-radio
                id="position-top-left"
                v-model="controls.buttonPosition"
                name="position"
                value="top left"
              ></ui-radio>
              <label for="position-top-left">Top left</label>
            </ui-form-field>
            <ui-form-field>
              <ui-radio
                id="position-top-right"
                v-model="controls.buttonPosition"
                name="position"
                value="top right"
              ></ui-radio>
              <label for="position-top-right">Top right</label>
            </ui-form-field>
            <ui-form-field>
              <ui-radio
                id="position-middle-left"
                v-model="controls.buttonPosition"
                name="position"
                value="middle left"
              ></ui-radio>
              <label for="position-middle-left">Middle left</label>
            </ui-form-field>
            <ui-form-field>
              <ui-radio
                id="position-middle-right"
                v-model="controls.buttonPosition"
                name="position"
                value="middle right"
              ></ui-radio>
              <label for="position-middle-right">Middle right</label>
            </ui-form-field>
            <ui-form-field>
              <ui-radio
                id="position-bottom-left"
                v-model="controls.buttonPosition"
                name="position"
                value="bottom left"
              ></ui-radio>
              <label for="position-bottom-left">Bottom left</label>
            </ui-form-field>
            <ui-form-field>
              <ui-radio
                id="position-bottom-right"
                v-model="controls.buttonPosition"
                name="position"
                value="bottom right"
              ></ui-radio>
              <label for="position-bottom-right">Bottom right</label>
            </ui-form-field>
          </div>
          <div class="right-column-controls">
            Menu Anchor Corner:
            <ui-form-field>
              <ui-radio
                id="menu-position-top-start"
                v-model="controls.menuPosition"
                name="menu-position"
                value="top start"
              ></ui-radio>
              <label for="menu-position-top-start">Top start</label>
            </ui-form-field>
            <ui-form-field>
              <ui-radio
                id="menu-position-top-end"
                v-model="controls.menuPosition"
                name="menu-position"
                value="top end"
              ></ui-radio>
              <label for="menu-position-top-end">Top end</label>
            </ui-form-field>
            <ui-form-field>
              <ui-radio
                id="menu-position-bottom-start"
                v-model="controls.menuPosition"
                name="menu-position"
                value="bottom start"
              ></ui-radio>
              <label for="menu-position-bottom-start">Bottom start</label>
            </ui-form-field>
            <ui-form-field>
              <ui-radio
                id="menu-position-bottom-end"
                v-model="controls.menuPosition"
                name="menu-position"
                value="bottom end"
              ></ui-radio>
              <label for="menu-position-bottom-end">Bottom end</label>
            </ui-form-field>
          </div>
          <div class="distance-controls">
            Menu Distance:
            <ui-form-field>
              <ui-textfield v-model="controls.distance.top">Top:</ui-textfield>
              <ui-textfield v-model="controls.distance.right">Right:</ui-textfield>
              <ui-textfield v-model="controls.distance.bottom">Bottom:</ui-textfield>
              <ui-textfield v-model="controls.distance.left">Left:</ui-textfield>
            </ui-form-field>
          </div>
          <div class="other-controls">
            <ui-form-field>
              <ui-checkbox v-model="controls.rtl"></ui-checkbox>
              <label for="is-rtl">RTL</label>
            </ui-form-field>
            <ui-form-field>
              <ui-checkbox id="animation" v-model="controls.disableAnimation"></ui-checkbox>
              <label for="animation">Disable Open Animation</label>
            </ui-form-field>
            <ui-form-field>
              <ui-checkbox id="fixed-position" v-model="controls.fixedPosition"></ui-checkbox>
              <label for="fixed-position">Fixed Position Menu Surface</label>
            </ui-form-field>
          </div>
          <hr />
          <div>
            <span>
              Last Selected item:
              <em
                id="last-selected"
              >{{ selectedValue ? `"${selectedValue.label}" at index ${selectedValue.index}` : '&lt;none selected&gt;' }}</em>
            </span>
          </div>
        </ui-form>

        <div class="demo" :dir="controls.rtl ? 'rtl' : null">
          <ui-menu-anchor absolute :position="controls.buttonPosition">
            <ui-button
              raised
              class="demo-button demo-button--normal"
              @click="$balmUI.onOpen('open2')"
            >Show Menu</ui-button>

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
    </section>
  </ui-page>
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
    };
  },
  computed: {
    menuPosition() {
      return this.controls.menuPosition.toUpperCase().split(' ').join('_');
    }
  },
  methods: {
    onSelected1(data) {
      console.log('onSelected', data);
    },
    onSelected2(data) {
      console.log('onSelected', data);
      this.selectedValue = data;
    },
    onClosed() {
      console.log('onClosed');
    }
  }
};
</script>
