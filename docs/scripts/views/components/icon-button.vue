<template>
  <div :class="[$tt('body1'), 'demo--icon-button']">
    <section class="hero component">
      <div class="demo-wrapper">
        <ui-icon-button v-model="icon1.value" :on="icon1.on" :off="icon1.off">
        </ui-icon-button>
      </div>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <section class="example">
        <div>
          <div>
            <h5 :class="$tt('headline5')">1.1 Buttons</h5>
          </div>
          <div class="toggle-examples-container">
            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Material Icons</h6>
              <div class="demo-wrapper">
                <ui-icon-button>favorite</ui-icon-button>
                <ui-icon-button>airplanemode_active</ui-icon-button>
                <ui-icon-link>directions_transit</ui-icon-link>
              </div>
            </div>

            <div class="toggle-example">
              <h6 :class="$tt('headline6')">SVG Icon</h6>
              <div class="demo-wrapper">
                <ui-icon-button>
                  <ui-logo></ui-logo>
                </ui-icon-button>
              </div>
            </div>

            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Disabled Buttons</h6>
              <div class="demo-wrapper">
                <ui-icon-button disabled>airplanemode_active</ui-icon-button>
                <ui-icon-button disabled>
                  <ui-logo></ui-logo>
                </ui-icon-button>
              </div>
            </div>

            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Larger Buttons</h6>
              <div class="demo-wrapper">
                <ui-icon-button class="demo-icon-button-large">airplanemode_active</ui-icon-button>
                <ui-icon-button class="demo-icon-button-large">
                  <ui-logo></ui-logo>
                </ui-icon-button>
              </div>
            </div>
          </div>
        </div>
        <ui-accordion>
          <ui-markdown :code="code[1]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example">
        <div>
          <div>
            <h5 :class="$tt('headline5')">1.2 Button Toggles</h5>
          </div>
          <div class="toggle-examples-container">
            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Using Material Icons</h6>
              <div class="demo-wrapper">
                <ui-icon-button
                  v-model="icon1.value"
                  :on="icon1.on"
                  :off="icon1.off">
                </ui-icon-button>
              </div>
              <p>Favorited? <span id="favorited-status">{{ icon1.value }}</span></p>
            </div>

            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Using Font Awesome</h6>
              <div class="demo-wrapper">
                <ui-icon-button
                  iconInnerSelector=".fa"
                  v-model="icon2.value"
                  :on="icon2.on"
                  :off="icon2.off">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </ui-icon-button>
              </div>
            </div>

            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Disabled Icons</h6>
              <div class="demo-wrapper">
                <ui-icon-button
                  :on="icon1.on"
                  :off="icon1.off"
                  disabled>
                </ui-icon-button>
              </div>
            </div>
          </div>
          <ui-accordion>
            <ui-markdown :code="code[2]"></ui-markdown>
          </ui-accordion>

          <div class="toggle-example">
            <h6 :class="$tt('headline6')">Additional Color Combinations</h6>
            <div id="demo-color-combos">
              <div id="light-on-bg" class="demo-color-combo">
                <div>
                  <ui-icon-button :class="$themeColor('on-primary')"
                    :on="icon1.on"
                    :off="icon1.off">
                  </ui-icon-button>
                </div>
                <div :class="$themeColor('on-primary')">Light icon on background</div>
              </div>
              <div id="dark-on-bg" class="demo-color-combo">
                <div :class="$themeColor('primary')">
                  <ui-icon-button
                    :on="icon1.on"
                    :off="icon1.off">
                  </ui-icon-button>
                </div>
                <div>Dark icon on background</div>
              </div>
              <div id="custom-color-combo" class="demo-color-combo">
                <div>
                  <ui-icon-button
                    :on="icon1.on"
                    :off="icon1.off">
                  </ui-icon-button>
                </div>
                <div>Custom color</div>
              </div>
            </div>
          </div>
          <ui-accordion>
            <ui-markdown :code="code[3]"></ui-markdown>
          </ui-accordion>
        </div>
      </section>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="icon-button"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Icon Button'
  },
  mixins: [snippets],
  data() {
    return {
      icon1: {
        value: false,
        on: {
          content: 'favorite',
          label: 'Remove From Favorites'
        },
        off: {
          content: 'favorite_border',
          label: 'Add to Favorites'
        }
      },
      icon2: {
        value: true,
        on: {
          class: 'fa-star',
          label: 'Unstar this item'
        },
        off: {
          class: 'fa-star-o',
          label: 'Star this item'
        }
      }
    };
  },
  created() {
    this.showCode('icon-button', 3);
  }
};
</script>
