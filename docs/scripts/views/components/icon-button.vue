<template>
  <ui-page name="icon-button" demoCount="2">
    <template #hero>
      <div class="hero-demo">
        <ui-icon-button :toggle="icon" v-model="value"></ui-icon-button>
      </div>
    </template>

    <!-- Content -->
    <section class="example">
      <div>
        <h6 :class="$tt('headline6')">1.1 Buttons</h6>

        <div class="toggle-examples-container">
          <div class="toggle-example">
            <div>Material Icons</div>
            <div class="demo-wrapper">
              <ui-icon-button icon="favorite"></ui-icon-button>
              <ui-icon-button icon="airplanemode_active"></ui-icon-button>
            </div>
          </div>

          <div class="toggle-example">
            <div>SVG Icon</div>
            <div class="demo-wrapper">
              <ui-icon-button>
                <svg-logo></svg-logo>
              </ui-icon-button>
            </div>
          </div>

          <div class="toggle-example">
            <div>Disabled Buttons</div>
            <div class="demo-wrapper">
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
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="example">
      <div>
        <h6 :class="$tt('headline6')">1.2 Button Toggles</h6>

        <div class="toggle-examples-container">
          <div class="toggle-example">
            <div>Using Material Icons</div>
            <div class="demo-wrapper">
              <ui-icon-button :toggle="icon" v-model="value1"></ui-icon-button>
            </div>
            <p>
              Favorited?
              <span id="favorited-status">{{ value1 }}</span>
            </p>
          </div>

          <div class="toggle-example">
            <div>Using Font Awesome</div>
            <div class="demo-wrapper">
              <ui-icon-button v-model="value2">
                <template #default="{ onClass, offClass }">
                  <i :class="[onClass, icon2.on]"></i>
                  <i :class="[offClass, icon2.off]"></i>
                </template>
              </ui-icon-button>
            </div>
            <p>Result: {{ value2 }}</p>
          </div>

          <div class="toggle-example">
            <div>Using SVG Icons</div>
            <div class="demo-wrapper">
              <ui-icon-button>
                <template #default="{ onClass, offClass }">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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
                    xmlns="http://www.w3.org/2000/svg"
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
            <div class="demo-wrapper">
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
            <div class="demo-wrapper">
              <ui-icon-button :toggle="icon1" disabled></ui-icon-button>
            </div>
          </div>
        </div>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </ui-page>
</template>

<script>
import imageOn from '../../../images/icon/ic_button_24px.svg';
import imageOff from '../../../images/icon/ic_card_24px.svg';

export default {
  metaInfo: {
    titleTemplate: '%s - Icon Button'
  },
  data() {
    return {
      // hero
      value: false,
      icon: {
        on: 'favorite',
        off: 'favorite_border'
      },
      // demo
      value1: false,
      icon1: {
        on: 'favorite',
        off: 'favorite_border'
      },
      value2: true,
      icon2: {
        on: 'fa fa-star',
        off: 'fa fa-star-o'
      },
      imageOn,
      imageOff
    };
  },
  mounted() {
    setTimeout(() => {
      this.value = true;
    }, 1e3);
  }
};
</script>
