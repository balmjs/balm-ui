<template>
  <div class="demo--form-field">
    <section class="example">
      <ui-form-field>
        <input type="checkbox" id="input">
        <label for="input">Input Label</label>
      </ui-form-field>
    </section>

    <section class="example">
      <ui-form-field alignEnd>
        <input type="checkbox" id="input2">
        <label for="input2">Input Label</label>
      </ui-form-field>
    </section>

    <section :class="['example', $themeColor('primary', true)]">
      <ui-form-field dark>
        <input type="checkbox" id="input3">
        <label for="input3">Input Label</label>
      </ui-form-field>
    </section>
  </div>
</template>
