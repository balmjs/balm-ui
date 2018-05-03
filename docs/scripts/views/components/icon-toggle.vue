<template>
  <div class="demo--icon-toggle">
    <section class="hero">
      <div class="demo-wrapper">
        <ui-icon-toggle :on="icon1.on" :off="icon1.off">
          <!-- Prevent FOUC by putting the initial content in -->
          favorite_border
        </ui-icon-toggle>
      </div>
    </section>

    <h1 :class="$tt('headline3')">0. Usage</h1>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h1 :class="$tt('headline3')">1. Simple</h1>
    <section class="example">
      <div class="toggle-example">
        <h2>Using Material Icons</h2>
        <div class="demo-wrapper">
          <ui-icon-toggle
            :model="icon1.value"
            :on="icon1.on"
            :off="icon1.off"
            @change="balmUI.onChange('icon1.value', $event)">
          </ui-icon-toggle>
        </div>
        <p>Favorited? <span id="favorited-status">{{ icon1.value }}</span></p>
      </div>

      <div class="toggle-example">
        <h2>Using Font Awesome</h2>
        <div class="demo-wrapper">
          <ui-icon-toggle
            :model="icon2.value"
            :on="icon2.on"
            :off="icon2.off"
            icon="fa"
            @change="balmUI.onChange('icon2.value', $event)">
            <i class="fa fa-star" aria-hidden="true"></i>
          </ui-icon-toggle>
        </div>
      </div>

      <div class="toggle-example">
        <h2>Disabled Icons</h2>
        <div class="demo-wrapper">
          <ui-icon-toggle
            :on="icon1.on"
            :off="icon1.off"
            disabled>
          </ui-icon-toggle>
        </div>
      </div>
    </section>
    <ui-markdown :code="code[1]"></ui-markdown>

    <h1 :class="$tt('headline3')">2. Additional Color Combinations</h1>
    <section class="example">
      <div class="toggle-example">
        <div id="demo-color-combos">
          <div id="light-on-bg" class="demo-color-combo">
            <div>
              <ui-icon-toggle :class="$textColor('primary', 'primary')"
                :on="icon1.on"
                :off="icon1.off">
              </ui-icon-toggle>
            </div>
            <p class="mdc-theme--on-primary">Light icon on background</p>
          </div>
          <div id="dark-on-bg" class="demo-color-combo">
            <div :class="$themeColor('primary')">
              <ui-icon-toggle
                :on="icon1.on"
                :off="icon1.off">
              </ui-icon-toggle>
            </div>
            <p>Dark icon on background</p>
          </div>
          <div id="custom-color-combo" class="demo-color-combo">
            <div>
              <ui-icon-toggle
                :on="icon1.on"
                :off="icon1.off">
              </ui-icon-toggle>
            </div>
            <p>Custom color</p>
          </div>
        </div>
      </div>
    </section>
    <ui-markdown :code="code[2]"></ui-markdown>

    <h1 :class="$tt('headline3')">3. API</h1>
    <ui-apidocs name="icon-toggle"></ui-apidocs>
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
        on: { content: 'favorite', label: 'Remove From Favorites' },
        off: { content: 'favorite_border', label: 'Add to Favorites' }
      },
      icon2: {
        value: true,
        on: { cssClass: 'fa-star', label: 'Unstar this item' },
        off: { cssClass: 'fa-star-o', label: 'Star this item' }
      }
    };
  },
  created() {
    this.showCode('icon-toggle', 2);
  }
};
</script>
