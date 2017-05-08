<template>
  <div class="demo-icon-toggle">
    <h1>MDC Icon Toggle</h1>
    <section>
      <h2>Using material-icons</h2>
      <div class="demo-wrapper">
        <ui-icon-toggle :label="icon1.off.label"
          :model="icon1.value"
          :on="icon1.on"
          :off="icon1.off"
          @change="onChange('icon1', $event)">
          {{ icon1.off.content }}
        </ui-icon-toggle>
      </div>
      <p>Favorited? <span id="favorited-status">{{ icon1.value }}</span></p>
    </section>

    <section>
      <h2>Using Font Awesome</h2>
      <div class="demo-wrapper">
        <ui-icon-toggle :label="icon2.on.label"
          :model="icon2.value"
          icon="fa"
          :on="icon2.on"
          :off="icon2.off"
          @change="onChange('icon2', $event)">
          <i class="fa fa-star" aria-hidden="true"></i>
        </ui-icon-toggle>
      </div>
    </section>

    <section class="mdc-theme--dark">
      <h2 class="mdc-theme--text-primary-on-dark">Dark Theme</h2>
      <div class="demo-wrapper">
        <ui-icon-toggle :label="icon1.off.label"
          :model="icon1.value"
          :on="icon1.on"
          :off="icon1.off"
          @change="onChange('icon1', $event)">
          {{ icon1.off.content }}
        </ui-icon-toggle>
      </div>
    </section>
    <section>
      <h2>Primary Colored Icons</h2>
      <div class="demo-wrapper">
        <ui-icon-toggle primary
          :label="icon1.off.label"
          :model="icon1.value"
          :on="icon1.on"
          :off="icon1.off"
          @change="onChange('icon1', $event)">
          {{ icon1.off.content }}
        </ui-icon-toggle>
      </div>
    </section>
    <section>
      <h2>Accent Colored Icons</h2>
      <div class="demo-wrapper">
        <ui-icon-toggle accent
          :label="icon1.off.label"
          :model="icon1.value"
          :on="icon1.on"
          :off="icon1.off"
          @change="onChange('icon1', $event)">
          {{ icon1.off.content }}
        </ui-icon-toggle>
      </div>
    </section>
    <section>
      <h2>Disabled Icons</h2>
      <div class="demo-wrapper">
        <ui-icon-toggle disabled
          :label="icon1.off.label"
          :model="icon1.value"
          :on="icon1.on"
          :off="icon1.off"
          @change="onChange('icon1', $event)">
          {{ icon1.off.content }}
        </ui-icon-toggle>
      </div>
      <div class="mdc-theme--dark">
        <div class="demo-wrapper">
          <ui-icon-toggle disabled
            :label="icon1.off.label"
            :model="icon1.value"
            :on="icon1.on"
            :off="icon1.off"
            @change="onChange('icon1', $event)">
            {{ icon1.off.content }}
          </ui-icon-toggle>
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
  methods: {
    onChange(field, value) {
      this[field].value = value;
    }
  },
  created() {
    // this.showCode('icon-toggle');
  }
};
</script>
