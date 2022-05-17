<template>
  <!-- (M3) Container -->
  <div class="mdc-navigation-rail">
    <!-- Menu (optional) -->
    <div class="mdc-navigation-rail__menu">
      <slot name="menu">
        <mdc-icon-button
          v-if="hasMenu"
          class="mdc-navigation-rail__navigation-icon"
        >
          menu
        </mdc-icon-button>
      </slot>
    </div>

    <!-- Floating action button (optional) -->
    <div class="mdc-navigation-rail__key-action">
      <slot name="key-action"></slot>
    </div>

    <!-- Primary destinations (3 to 7) -->
    <div class="mdc-navigation-rail__destinations">
      <slot>
        <ul v-if="items.length">
          <li v-for="(item, index) in items" :key="index">{{ items }}</li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script>
// Define navigation rail constants

export default {
  name: 'UiNavigationRail',
  customOptions: {}
};
</script>

<script setup>
// TODO
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
</script>
