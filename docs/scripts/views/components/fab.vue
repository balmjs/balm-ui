<template>
  <docs-page name="fab" demo-count="4">
    <template #hero>
      <div class="hero-demo">
        <ui-fab :type="typeOption" :mini="!!fabOptions.mini">
          <!-- :icon="type && fabOptions.leadingIcon ? 'add' : ''" -->
          <template
            v-if="typeOption && fabOptions.leadingIcon"
            #before="{ iconClass }"
          >
            <ui-icon :class="iconClass">add</ui-icon>
          </template>
          <template v-if="typeOption">
            <span>Button</span>
          </template>
          <ui-icon v-else>add</ui-icon>
        </ui-fab>
      </div>
      <div class="hero-options">
        <ui-select
          v-model="typeOption"
          class="hero-option"
          :options="TypeOptions"
        >
          Type
        </ui-select>
        <ui-form-field v-if="typeOption" class="hero-option">
          <ui-checkbox
            v-model="fabOptions.leadingIcon"
            input-id="leading-icon"
            :value="1"
          ></ui-checkbox>
          <label for="leading-icon">Leading icon</label>
        </ui-form-field>
        <div v-else class="hero-option">
          <ui-form-field>
            <ui-radio
              v-model="fabOptions.mini"
              input-id="default"
              :value="0"
            ></ui-radio>
            <label for="default">Default</label>
          </ui-form-field>
          <ui-form-field>
            <ui-radio
              v-model="fabOptions.mini"
              input-id="mini"
              :value="1"
            ></ui-radio>
            <label for="mini">Mini</label>
          </ui-form-field>
        </div>
      </div>
    </template>

    <!-- Content -->
    <ui-fab class="demo-fixed-fab" icon="mode_edit"></ui-fab>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Regular FAB</h6>
      <div class="demo">
        <figure>
          <ui-fab icon="favorite_border"></ui-fab>
          <figcaption>Standard</figcaption>
        </figure>
        <figure>
          <ui-fab icon="favorite_border" mini></ui-fab>
          <figcaption>Mini</figcaption>
        </figure>
        <figure>
          <ui-fab>
            <template #default="{ iconClass }">
              <svg-logo :class="iconClass"></svg-logo>
            </template>
          </ui-fab>
          <figcaption>
            <div>SVG</div>
          </figcaption>
        </figure>
        <figure>
          <ui-fab mini>
            <template #default="{ iconClass }">
              <svg-logo :class="iconClass"></svg-logo>
            </template>
          </ui-fab>
          <figcaption>
            <div>SVG Mini</div>
          </figcaption>
        </figure>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Extended FAB</h6>
      <div class="demo">
        <figure>
          <ui-fab extended>
            <template #before="{ iconClass }">
              <ui-icon :class="iconClass">add</ui-icon>
            </template>
            <span>Create</span>
          </ui-fab>
          <figcaption>Extended (with icon)</figcaption>
        </figure>
        <figure>
          <ui-fab extended>
            <span>Create</span>
            <template #after="{ iconClass }">
              <ui-icon :class="iconClass">add</ui-icon>
            </template>
          </ui-fab>
          <figcaption>Extended (followed by icon)</figcaption>
        </figure>
        <figure>
          <ui-fab extended>Create</ui-fab>
          <figcaption>Extended (without icon)</figcaption>
        </figure>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.3 Example of Enter and Exit Motions</h6>
      <div class="fab-motion-container">
        <div class="fab-motion-container__view">
          <p>View one (with FAB)</p>
        </div>
        <div
          class="fab-motion-container__view"
          :class="{ 'fab-motion-container__view--exited': !exited }"
        >
          <p>View two (without FAB)</p>
          <p>
            <ui-button
              id="enter-exit-back"
              :disabled="!exited"
              @click="balmUI.onHide('exited')"
            >
              Go back
            </ui-button>
          </p>
        </div>
        <ui-fab
          id="enter-exit-add"
          class="demo-absolute-fab"
          icon="add"
          :exited="exited"
          @click="balmUI.onShow('exited')"
        ></ui-fab>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.4 Custom FABs (Using font awesome)</h6>
      <div class="demo">
        <ui-fab>
          <i class="fa fa-flag fa-lg"></i>
        </ui-fab>
        <ui-fab>
          <i class="fa fa-smile-o fa-lg"></i>
        </ui-fab>
        <ui-fab>
          <i class="fa fa-camera-retro fa-lg"></i>
        </ui-fab>
        <ui-fab>
          <i class="fa fa-spinner fa-pulse fa-lg fa-fw"></i>
        </ui-fab>
      </div>
      <ui-snippet :code="$store.demos[4]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useEvent } from 'balm-ui';

const TypeOptions = [
  {
    label: 'Regular',
    value: 0
  },
  {
    label: 'Extended',
    value: 1
  }
];

const stateData = {
  // hero
  typeOption: 0,
  fabOptions: {
    mini: 0,
    leadingIcon: false
  },
  // demo
  exited: false
};
const state = reactive(stateData);

export default {
  metaInfo() {
    return {
      subtitle: 'Fab'
    };
  },
  // Composition API
  setup() {
    const balmUI = useEvent();

    return {
      balmUI,
      TypeOptions,
      ...toRefs(state)
    };
  }
  // Options API
  // data() {
  //   return {
  //     balmUI: useEvent(),
  //     TypeOptions,
  //     ...stateData
  //   };
  // }
};
</script>
