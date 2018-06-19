<template>
  <div class="demo--icon-button">
    <section class="hero">
      <div class="demo-wrapper">
        <ui-icon-button :model="icon1.value" :on="icon1.on" :off="icon1.off">
        </ui-icon-button>
      </div>
    </section>

    <h1 :class="$tt('headline5')">0. Usage</h1>
    <ui-markdown :text="code[0]"></ui-markdown>

    <section class="example">
      <div>
        <div>
          <h1 :class="$tt('headline5')">1. Buttons</h1>
        </div>
        <div class="toggle-examples-container">
          <div class="toggle-example">
            <h2 :class="$tt('headline6')">Material Icons</h2>
            <div class="demo-wrapper">
              <ui-icon-button>favorite</ui-icon-button>
              <ui-icon-button>airplanemode_active</ui-icon-button>
              <ui-icon-link>directions_transit</ui-icon-link>
            </div>
          </div>

          <div class="toggle-example">
            <h2 :class="$tt('headline6')">SVG Icon</h2>
            <div class="demo-wrapper">
              <ui-icon-button>
                <ui-logo></ui-logo>
              </ui-icon-button>
            </div>
          </div>

          <div class="toggle-example">
            <h2 :class="$tt('headline6')">Disabled Buttons</h2>
            <div class="demo-wrapper">
              <ui-icon-button disabled>airplanemode_active</ui-icon-button>
              <ui-icon-button disabled>
                <ui-logo></ui-logo>
              </ui-icon-button>
            </div>
          </div>

          <div class="toggle-example">
            <h2 :class="$tt('headline6')">Larger Buttons</h2>
            <div class="demo-wrapper">
              <ui-icon-button class="demo-icon-button-large">airplanemode_active</ui-icon-button>
              <ui-icon-button class="demo-icon-button-large">
                <ui-logo></ui-logo>
              </ui-icon-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>

    <section class="example">
      <div>
        <div>
          <h1 :class="$tt('headline5')">2. Button Toggles</h1>
        </div>
        <div class="toggle-examples-container">
          <div class="toggle-example">
            <h2 :class="$tt('headline6')">Using Material Icons</h2>
            <div class="demo-wrapper">
              <ui-icon-button
                :model="icon1.value"
                :on="icon1.on"
                :off="icon1.off"
                @change="balmUI.onChange('icon1.value', $event)">
              </ui-icon-button>
            </div>
            <p>Favorited? <span id="favorited-status">{{ icon1.value }}</span></p>
          </div>

          <div class="toggle-example">
            <h2 :class="$tt('headline6')">Using Font Awesome</h2>
            <div class="demo-wrapper">
              <ui-icon-button
                iconInnerSelector=".fa"
                :model="icon2.value"
                :on="icon2.on"
                :off="icon2.off"
                @change="balmUI.onChange('icon2.value', $event)">
                <i class="fa fa-star" aria-hidden="true"></i>
              </ui-icon-button>
            </div>
          </div>

          <div class="toggle-example">
            <h2 :class="$tt('headline6')">Disabled Icons</h2>
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
          <h2 :class="$tt('headline6')">Additional Color Combinations</h2>
          <div id="demo-color-combos">
            <div id="light-on-bg" class="demo-color-combo">
              <div>
                <ui-icon-button :class="$textColor('primary', 'primary')"
                  :on="icon1.on"
                  :off="icon1.off">
                </ui-icon-button>
              </div>
              <div class="mdc-theme--on-primary">Light icon on background</div>
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

    <h1 :class="$tt('headline5')">4. API</h1>
    <ui-apidocs name="icon-button"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
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
