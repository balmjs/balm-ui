<template>
  <div class="demo--slider">
    <section class="hero">
      <div id="hero-slider-wrapper">
        <ui-slider id="hero-slider" min="0" max="100" step="2"
          :model="value" label="Select Value"
          @change="balmUI.onChange('value', $event)"></ui-slider>
      </div>
    </section>

    <section id="slider-example" class="example">
      <h2>Continuous Slider</h2>
      <div class="slider-example">
        <p id="example-cs-label">Select Value:</p>

        <div class="example-slider-wrapper">
          <ui-slider id="continuous-mdc-slider"
            :model="value1"
            @change="balmUI.onChange('value1', $event)"></ui-slider>
        </div>

        <p>
          Value from <code>change</code> event: <span id="continuous-slider-committed-value">
            {{ value1 }}
          </span>
        </p>
      </div>

      <h2>Discrete Slider</h2>
      <div class="slider-example">
        <p id="example-ds-label">Select Value:</p>

        <div class="example-slider-wrapper">
          <ui-slider id="discrete-mdc-slider"
            discrete
            :model="value2"
            @change="balmUI.onChange('value2', $event)"></ui-slider>
        </div>

        <p>
          Value from <code>change</code> event: <span id="discrete-slider-committed-value">
            {{ value2 }}
          </span>
        </p>
      </div>

      <h2>Discrete Slider with markers</h2>
      <div class="slider-example">
        <p id="example-ds-marker-label">Select Value:</p>

        <div class="example-slider-wrapper">
          <ui-slider id="discrete-mdc-slider-w-marker"
            displayMarkers
            :model="value3"
            @change="balmUI.onChange('value3', $event)"></ui-slider>
        </div>

        <p>
          Value from <code>change</code> event: <span id="discrete-slider-w-marker-committed-value">
            {{ value3 }}
          </span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 30,
      value1: 10,
      value2: 20,
      value3: 30
    };
  }
};
</script>
