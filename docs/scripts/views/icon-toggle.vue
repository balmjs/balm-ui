<template>
  <div class="demo--icon-toggle">
    <section class="hero">
      <div class="demo-wrapper">
        <ui-icon-toggle :on="icon1.on" :off="icon1.off"></ui-icon-toggle>
      </div>
    </section>

    <section class="example">
      <div class="toggle-example">
        <h2>Using Material Icons</h2>
        <div class="demo-wrapper">
          <ui-icon-toggle
            :model="icon1.value"
            :on="icon1.on"
            :off="icon1.off"
            @change="onChange('icon1.value', $event)">
          </ui-icon-toggle>
        </div>
        <p>Favorited? <span id="favorited-status">{{ icon1.value }}</span></p>
      </div>

      <div class="toggle-example">
        <h2>Using Font Awesome</h2>
        <div class="demo-wrapper">
          <ui-icon-toggle
            :model="icon2.value"
            icon="fa"
            :on="icon2.on"
            :off="icon2.off"
            @change="onChange('icon2.value', $event)">
            <i class="fa fa-star" aria-hidden="true"></i>
          </ui-icon-toggle>
        </div>
      </div>

      <div class="toggle-example mdc-theme--dark">
        <h2 class="mdc-theme--text-primary-on-dark">Dark Theme</h2>
        <div class="demo-wrapper">
          <ui-icon-toggle
            :on="icon1.on"
            :off="icon1.off">
          </ui-icon-toggle>
        </div>
      </div>

      <div class="toggle-example">
        <h2>Primary Colored Icons</h2>
        <div class="demo-wrapper">
          <ui-icon-toggle primary
            :on="icon1.on"
            :off="icon1.off">
          </ui-icon-toggle>
        </div>
      </div>

      <div class="toggle-example">
        <h2>Accent Colored Icons</h2>
        <div class="demo-wrapper">
          <ui-icon-toggle accent
            :on="icon1.on"
            :off="icon1.off">
          </ui-icon-toggle>
        </div>
      </div>

      <div class="toggle-example">
        <h2>Disabled Icons</h2>
        <div class="demo-wrapper">
          <ui-icon-toggle disabled
            :on="icon1.on"
            :off="icon1.off">
          </ui-icon-toggle>
        </div>
        <div class="mdc-theme--dark">
          <div class="demo-wrapper">
            <ui-icon-toggle disabled
              :on="icon1.on"
              :off="icon1.off">
            </ui-icon-toggle>
          </div>
        </div>
      </div>

      <div class="toggle-example">
        <h2>Additional Color Combinations</h2>
        <div id="demo-color-combos">
          <div id="light-on-bg" class="demo-color-combo">
            <div>
              <ui-icon-toggle class="mdc-theme--text-primary-on-primary"
                :on="icon1.on"
                :off="icon1.off">
              </ui-icon-toggle>
            </div>
            <p class="mdc-theme--text-primary-on-primary">Light icon on background</p>
          </div>
          <div id="dark-on-bg" class="demo-color-combo">
            <div class="mdc-theme--primary">
              <ui-icon-toggle
                :on="icon1.on"
                :off="icon1.off">
              </ui-icon-toggle>
            </div>
            <p>Dark icon on background</p>
          </div>
          <div id="custom-on-dark" class="demo-color-combo mdc-theme--dark">
            <div>
              <ui-icon-toggle
                :on="icon1.on"
                :off="icon1.off">
              </ui-icon-toggle>
            </div>
            <p class="mdc-theme--text-primary-on-dark">Custom color on dark background</p>
          </div>
        </div>
      </div>
    </section>
    <!-- <ui-apidoc name="icon-toggle"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      icon1: {
        value: false,
        on: {content: 'favorite', label: 'Remove From Favorites'},
        off: {content: 'favorite_border', label: 'Add to Favorites'}
      },
      icon2: {
        value: true,
        on: {"cssClass": "fa-star", "label": "Unstar this item"},
        off: {"cssClass": "fa-star-o", "label": "Star this item"}
      }
    };
  },
  created() {
    // this.showCode('icon-toggle');
  }
};
</script>
