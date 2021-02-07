<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">Card</h6>
    <div class="component-wrapper no-flex">
      <ui-card>
        <ui-card-content>
          <ui-card-media
            rectangle
            :style="`background-image:url('${cardMedia}')`"
          ></ui-card-media>
          <ui-card-text>
            <div :class="$tt('overline')">OVERLINE</div>
            <div :class="$tt('headline6')">Headline6</div>
            <div :class="$tt('body2')">
              (body2) Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </ui-card-text>
        </ui-card-content>
        <ui-card-actions>
          <ui-card-buttons>
            <ui-button>Button 1</ui-button>
            <ui-button>Button 2</ui-button>
          </ui-card-buttons>
        </ui-card-actions>
      </ui-card>
    </div>
  </section>
</template>

<script>
import cardMedia from '@/assets/card-media.svg';

export default {
  data() {
    return {
      cardMedia
    };
  }
};
</script>
