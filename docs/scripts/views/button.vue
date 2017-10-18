<template>
  <div class="demo--button">
    <section class="hero">
      <ui-button>Flat</ui-button>
      <ui-button raised primary>Raised</ui-button>
    </section>

    <section :class="['demo-wrapper', {'mdc-theme--dark': useDarkTheme}]">
      <ui-checkbox id="toggle-dark"
        :model="useDarkTheme"
        @change="onChange('useDarkTheme', $event)">
        Dark Theme
      </ui-checkbox>
      <ui-checkbox id="toggle-disabled"
        :model="useDisabled"
        @change="onChange('useDisabled', $event)">
        Disabled buttons (excluding links)
      </ui-checkbox>

      <h1 :class="typography('display2')">Ripple Enabled</h1>
      <fieldset>
        <legend :class="typography('title')">Text Button</legend>
        <div>
          <ui-button :disabled="useDisabled">Baseline</ui-button>
          <ui-button compact :disabled="useDisabled">Compact</ui-button>
          <ui-button dense :disabled="useDisabled">Dense</ui-button>
          <ui-button class="secondary-text-button" :disabled="useDisabled">Secondary</ui-button>
          <ui-button icon="favorite" :disabled="useDisabled">Icon</ui-button>
          <ui-link>Link</ui-link>
        </div>
      </fieldset>
      <fieldset>
        <legend :class="typography('title')">Raised Button</legend>
        <div>
          <ui-button raised :disabled="useDisabled">Baseline</ui-button>
          <ui-button raised compact :disabled="useDisabled">Compact</ui-button>
          <ui-button raised dense :disabled="useDisabled">Dense</ui-button>
          <ui-button raised class="secondary-filled-button" :disabled="useDisabled">Secondary</ui-button>
          <ui-button raised icon="favorite" :disabled="useDisabled">Icon</ui-button>
          <ui-link raised>Link</ui-link>
        </div>
      </fieldset>
      <fieldset>
        <legend :class="typography('title')">Unelevated Button (Experimental)</legend>
        <div>
          <ui-button unelevated :disabled="useDisabled">Baseline</ui-button>
          <ui-button unelevated compact :disabled="useDisabled">Compact</ui-button>
          <ui-button unelevated dense :disabled="useDisabled">Dense</ui-button>
          <ui-button unelevated class="secondary-filled-button" :disabled="useDisabled">Secondary</ui-button>
          <ui-button unelevated icon="favorite" :disabled="useDisabled">Icon</ui-button>
          <ui-link unelevated>Link</ui-link>
        </div>
      </fieldset>
      <fieldset>
        <legend :class="typography('title')">Stroked Button (Experimental)</legend>
        <div>
          <ui-button stroked :disabled="useDisabled">Baseline</ui-button>
          <ui-button stroked compact :disabled="useDisabled">Compact</ui-button>
          <ui-button stroked dense :disabled="useDisabled">Dense</ui-button>
          <ui-button stroked class="secondary-stroked-button" :disabled="useDisabled">Secondary</ui-button>
          <ui-button stroked icon="favorite" :disabled="useDisabled">Icon</ui-button>
          <ui-link stroked>Link</ui-link>
        </div>
      </fieldset>
      <fieldset>
        <legend :class="typography('title')">Custom button (Experimental)</legend>
        <div>
          <ui-button unelevated class="big-round-corner-button" :disabled="useDisabled">Corner Radius</ui-button>
          <ui-button stroked class="thick-stroke-button" :disabled="useDisabled">Thick Stroke Width</ui-button>
        </div>
      </fieldset>

      <h1 :class="typography('display2')">CSS Only</h1>
      <fieldset>
        <legend :class="typography('title')">Text Button</legend>
        <div>
          <ui-button cssOnly :disabled="useDisabled">Baseline</ui-button>
          <ui-button cssOnly compact :disabled="useDisabled">Compact</ui-button>
          <ui-button cssOnly dense :disabled="useDisabled">Dense</ui-button>
          <ui-button cssOnly class="secondary-text-button" :disabled="useDisabled">Secondary</ui-button>
          <ui-button cssOnly icon="favorite" :disabled="useDisabled">Icon</ui-button>
          <ui-link cssOnly>Link</ui-link>
        </div>
      </fieldset>
      <fieldset>
        <legend :class="typography('title')">Raised Button</legend>
        <div>
          <ui-button cssOnly raised :disabled="useDisabled">Baseline</ui-button>
          <ui-button cssOnly raised compact :disabled="useDisabled">Compact</ui-button>
          <ui-button cssOnly raised dense :disabled="useDisabled">Dense</ui-button>
          <ui-button cssOnly raised class="secondary-filled-button" :disabled="useDisabled">Secondary</ui-button>
          <ui-button cssOnly raised icon="favorite" :disabled="useDisabled">Icon</ui-button>
          <ui-link cssOnly raised>Link</ui-link>
        </div>
      </fieldset>
      <fieldset>
        <legend :class="typography('title')">Unelevated Button (Experimental)</legend>
        <div>
          <ui-button cssOnly unelevated :disabled="useDisabled">Baseline</ui-button>
          <ui-button cssOnly unelevated compact :disabled="useDisabled">Compact</ui-button>
          <ui-button cssOnly unelevated dense :disabled="useDisabled">Dense</ui-button>
          <ui-button cssOnly unelevated class="secondary-filled-button" :disabled="useDisabled">Secondary</ui-button>
          <ui-button cssOnly unelevated icon="favorite" :disabled="useDisabled">Icon</ui-button>
          <ui-link cssOnly unelevated>Link</ui-link>
        </div>
      </fieldset>
      <fieldset>
        <legend :class="typography('title')">Stroked Button (Experimental)</legend>
        <div>
          <ui-button cssOnly stroked :disabled="useDisabled">Baseline</ui-button>
          <ui-button cssOnly stroked compact :disabled="useDisabled">Compact</ui-button>
          <ui-button cssOnly stroked dense :disabled="useDisabled">Dense</ui-button>
          <ui-button cssOnly stroked class="secondary-stroked-button" :disabled="useDisabled">Secondary</ui-button>
          <ui-button cssOnly stroked icon="favorite" :disabled="useDisabled">Icon</ui-button>
          <ui-link cssOnly stroked>Link</ui-link>
        </div>
      </fieldset>
      <fieldset>
        <legend :class="typography('title')">Custom button (Experimental)</legend>
        <div>
          <ui-button cssOnly unelevated class="big-round-corner-button" :disabled="useDisabled">Corner Radius</ui-button>
          <ui-button cssOnly stroked class="thick-stroke-button" :disabled="useDisabled">Thick Stroke Width</ui-button>
        </div>
      </fieldset>
    </section>

    <!-- <ui-apidoc name="button"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      useDarkTheme: false,
      useDisabled: false
    };
  },
  created() {
    // this.showCode('button', 10);
  }
};
</script>
