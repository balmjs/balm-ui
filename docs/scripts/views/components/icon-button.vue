<template>
  <docs-page name="icon-button" demo-count="2">
    <template #hero>
      <div class="hero-demo">
        <ui-icon-button v-model="value" :toggle="mdcIcon"></ui-icon-button>
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Buttons</h6>
      <div class="demo">
        <div class="toggle-example">
          <div>Material Icons</div>
          <div class="example">
            <ui-icon-button icon="favorite"></ui-icon-button>
            <ui-icon-button icon="airplanemode_active"></ui-icon-button>
          </div>
        </div>

        <div class="toggle-example">
          <div>SVG Icon</div>
          <div class="example">
            <ui-icon-button>
              <svg-logo></svg-logo>
            </ui-icon-button>
          </div>
        </div>

        <div class="toggle-example">
          <div>Disabled Buttons</div>
          <div class="example">
            <ui-icon-button
              icon="airplanemode_active"
              disabled
            ></ui-icon-button>
            <ui-icon-button disabled>
              <svg-logo></svg-logo>
            </ui-icon-button>
          </div>
        </div>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Button Toggles</h6>
      <div class="demo">
        <div class="toggle-example">
          <div>Using Material Icons</div>
          <div class="example">
            <ui-icon-button v-model="value1" :toggle="mdcIcon"></ui-icon-button>
          </div>
          <p>
            Favorited?
            <span id="favorited-status">{{ value1 }}</span>
          </p>
        </div>

        <div class="toggle-example">
          <div>Using Font Awesome</div>
          <div class="example">
            <ui-icon-button v-model="value2">
              <template #default="{ onClass, offClass }">
                <i :class="[onClass, faIcon.on]"></i>
                <i :class="[offClass, faIcon.off]"></i>
              </template>
            </ui-icon-button>
          </div>
          <p>Result: {{ value2 }}</p>
        </div>

        <div class="toggle-example">
          <div>Using SVG Icons</div>
          <div class="example">
            <ui-icon-button>
              <template #default="{ onClass, offClass }">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  :class="onClass"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                  />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  :class="offClass"
                >
                  <path
                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                </svg>
              </template>
            </ui-icon-button>
          </div>
        </div>

        <div class="toggle-example">
          <div>Using Image Icons</div>
          <div class="example">
            <ui-icon-button>
              <template #default="{ onClass, offClass }">
                <img :src="imageOn" :class="onClass" />
                <img :src="imageOff" :class="offClass" />
              </template>
            </ui-icon-button>
          </div>
        </div>

        <div class="toggle-example">
          <div>Disabled Icons</div>
          <div class="example">
            <ui-icon-button :toggle="mdcIcon" disabled></ui-icon-button>
          </div>
        </div>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
import imageOn from '@/assets/ic_button.svg';
import imageOff from '@/assets/ic_card.svg';

const mdcIcon = {
  on: 'favorite',
  off: 'favorite_border'
};

const faIcon = {
  on: 'fa fa-star',
  off: 'fa fa-star-o'
};

const stateData = {
  // hero
  value: false,
  // demo
  value1: false,
  value2: true
};
const state = reactive(stateData);

export default {
  metaInfo() {
    return {
      subtitle: 'Icon Button'
    };
  },
  // Composition API
  setup() {
    onMounted(() => {
      setTimeout(() => {
        state.value = true;
      }, 1e3);
    });

    return {
      imageOn,
      imageOff,
      mdcIcon,
      faIcon,
      ...toRefs(state)
    };
  }
  // Options API
  // data() {
  //   return {
  //     imageOn,
  //     imageOff,
  //     mdcIcon,
  //     faIcon,
  //     ...stateData
  //   };
  // },
  // mounted() {
  //   setTimeout(() => {
  //     this.value = true;
  //   }, 1e3);
  // }
};
</script>
