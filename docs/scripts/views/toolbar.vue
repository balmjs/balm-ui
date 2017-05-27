<template>
  <div class="demo--toolbar">
    <div class="hero">
      <div class="catalog-toolbar-container">
        <ui-toolbar>
          <ui-toolbar-row>
            <ui-toolbar-section align="start" titleClass="catalog-title">
              <template slot="before">
                <span class="catalog-back">
                  <a href="#"><i class="material-icons">menu</i></a>
                </span>
              </template>
              Toolbar
            </ui-toolbar-section>
          </ui-toolbar-row>
        </ui-toolbar>
      </div>
    </div>

    <p class="intro">
      To best show the functionality of toolbars, we put both demos in iframes.
      Click the links above the iframe to view the demo in a full browser window.
    </p>

    <section class="examples">
      <div class="example">
        <h2>Normal Toolbar</h2>
        <p><router-link to="default-toolbar" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/default-toolbar`"></iframe>
      </div>

      <div class="example">
        <h2>Fixed Toolbar</h2>
        <p><router-link to="fixed-toolbar" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/fixed-toolbar`"></iframe>
      </div>

      <div class="example">
        <h2>Waterfall Toolbar</h2>
        <p><router-link to="waterfall-toolbar" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/waterfall-toolbar`"></iframe>
      </div>

      <div class="example">
        <h2>Default Flexible Toolbar</h2>
        <p><router-link to="default-flexible-toolbar" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/default-flexible-toolbar`"></iframe>
      </div>

      <div class="example">
        <h2>Waterfall Flexible Toolbar</h2>
        <p><router-link to="waterfall-flexible-toolbar" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/waterfall-flexible-toolbar`"></iframe>
      </div>

      <div class="example">
        <h2>Waterfall Toolbar Fix Last Row</h2>
        <p><router-link to="waterfall-toolbar-fix-last-row" target="_blank">View in separate window</router-link></p>
        <iframe v-if="!DEBUG" class="demo-container" :src="`${$domain}/#/waterfall-toolbar-fix-last-row`"></iframe>
      </div>
    </section>
  </div>
</template>
