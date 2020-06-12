<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">Menu</h6>
    <div class="component-wrapper menu-component">
      <ui-menu css-only>
        <ui-menuitem>A Menu Item</ui-menuitem>
        <ui-item-divider></ui-item-divider>
        <ui-menuitem>Another Menu Item</ui-menuitem>
      </ui-menu>
    </div>
  </section>
</template>
