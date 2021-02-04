<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">Top App Bar</h6>
    <div class="component-wrapper">
      <ui-top-app-bar content-selector=".top-app-content-1">
        Headline 6
        <template #toolbar="{ toolbarItemClass }">
          <ui-icon-button
            :class="toolbarItemClass"
            icon="share"
          ></ui-icon-button>
          <ui-icon-button
            :class="toolbarItemClass"
            icon="bookmark"
          ></ui-icon-button>
          <ui-icon-button
            :class="toolbarItemClass"
            icon="search"
          ></ui-icon-button>
        </template>
      </ui-top-app-bar>
      <div class="top-app-content-1"></div>
    </div>
  </section>
</template>
