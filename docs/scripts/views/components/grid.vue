<template>
  <div class="page--grid-container">
    <ui-top-app-bar content-selector=".demo-content" fixed>
      <template #nav-icon="{ navIconClass }">
        <ui-icon-button
          icon="arrow_back"
          :class="navIconClass"
          @click="$router.back()"
        ></ui-icon-button>
      </template>
      <span class="catalog-title">Layout Grid</span>
    </ui-top-app-bar>

    <docs-page
      class="demo-content"
      name="grid"
      demo-count="9"
      :apis="['grid', 'grid-cell', 'grid-custom']"
    >
      <template #hero>
        <ui-grid class="demo-grid">
          <ui-grid-cell class="demo-cell"></ui-grid-cell>
          <ui-grid-cell class="demo-cell" columns="4"></ui-grid-cell>
          <ui-grid-cell
            class="demo-cell"
            :columns="{ default: 4 }"
          ></ui-grid-cell>
        </ui-grid>
      </template>

      <!-- Content -->
      <section class="demo-wrapper">
        <h6 :class="$tt('headline6')">1.1 Layout grid (in fluid container)</h6>
        <ui-grid>
          <ui-grid-cell>
            <div class="demo-controls">
              Desktop Margin:
              <ui-select
                v-model="desktop.margin"
                :options="gutterOptions"
                @change="$setGrid('margin', 'desktop', $event)"
              ></ui-select>

              <br />Desktop Gutter:
              <ui-select
                v-model="desktop.gutter"
                :options="gutterOptions"
                @change="$setGrid('gutter', 'desktop', $event)"
              ></ui-select>
            </div>
          </ui-grid-cell>
          <ui-grid-cell>
            <div class="demo-controls">
              Tablet Margin:
              <ui-select
                v-model="tablet.margin"
                :options="gutterOptions"
                @change="$setGrid('margin', 'tablet', $event)"
              ></ui-select>

              <br />Tablet Gutter:
              <ui-select
                v-model="tablet.gutter"
                :options="gutterOptions"
                @change="$setGrid('gutter', 'tablet', $event)"
              ></ui-select>
            </div>
          </ui-grid-cell>
          <ui-grid-cell>
            <div class="demo-controls">
              Phone Margin:
              <ui-select
                v-model="phone.margin"
                :options="gutterOptions"
                @change="$setGrid('margin', 'phone', $event)"
              ></ui-select>

              <br />Phone Gutter:
              <ui-select
                v-model="phone.gutter"
                :options="gutterOptions"
                @change="$setGrid('gutter', 'phone', $event)"
              ></ui-select>
            </div>
          </ui-grid-cell>
        </ui-grid>

        <div class="demo-grid-legend">
          Grid of default wide (4 columns) items
        </div>
        <ui-grid class="demo-grid">
          <ui-grid-cell class="demo-cell">4</ui-grid-cell>
          <ui-grid-cell class="demo-cell">4</ui-grid-cell>
          <ui-grid-cell class="demo-cell">4</ui-grid-cell>
        </ui-grid>
        <ui-snippet :code="$store.demos[1]"></ui-snippet>

        <div class="demo-grid-legend">Grid of 1 column wide items</div>
        <ui-grid class="demo-grid">
          <ui-grid-cell v-for="i in 12" :key="i" class="demo-cell" columns="1">
            1
          </ui-grid-cell>
        </ui-grid>
        <ui-snippet :code="$store.demos[2]"></ui-snippet>

        <div class="demo-grid-legend">Grid of differently sized items</div>
        <ui-grid class="demo-grid">
          <ui-grid-cell class="demo-cell" columns="6">6</ui-grid-cell>
          <ui-grid-cell class="demo-cell" columns="4">4</ui-grid-cell>
          <ui-grid-cell class="demo-cell" columns="2">2</ui-grid-cell>
        </ui-grid>
        <ui-snippet :code="$store.demos[3]"></ui-snippet>

        <div class="demo-grid-legend">
          Grid of items with tweaks at different screen sizes
        </div>
        <ui-grid class="demo-grid">
          <ui-grid-cell class="demo-cell" :columns="{ default: 6, tablet: 8 }">
            6 (8 tablet)
          </ui-grid-cell>
          <ui-grid-cell class="demo-cell" :columns="{ default: 4, tablet: 6 }">
            4 (6 tablet)
          </ui-grid-cell>
          <ui-grid-cell class="demo-cell" :columns="{ default: 2, phone: 4 }">
            2 (4 phone)
          </ui-grid-cell>
        </ui-grid>
        <ui-snippet :code="$store.demos[4]"></ui-snippet>

        <div class="demo-grid-legend">Grid nested within parent grid cell</div>
        <ui-grid class="demo-grid">
          <ui-grid-cell nested class="demo-parent-cell" columns="4">
            <ui-grid-cell class="demo-child-cell demo-cell" columns="4">
              <span>Child 4</span>
            </ui-grid-cell>
            <ui-grid-cell class="demo-child-cell demo-cell" columns="4">
              <span>Child 4</span>
            </ui-grid-cell>
            <ui-grid-cell class="demo-child-cell demo-cell" columns="4">
              <span>Child 4</span>
            </ui-grid-cell>
            <span>Parent 4</span>
          </ui-grid-cell>
          <ui-grid-cell class="demo-cell" columns="4">4</ui-grid-cell>
          <ui-grid-cell class="demo-cell" columns="4">4</ui-grid-cell>
        </ui-grid>
        <ui-snippet :code="$store.demos[5]"></ui-snippet>

        <h6>Grid with max width</h6>
        <div class="demo-grid-legend">
          Grid with max width (1280px) and center alignment by default
        </div>
        <ui-grid class="demo-grid max-width">
          <ui-grid-cell class="demo-cell" columns="4"></ui-grid-cell>
          <ui-grid-cell class="demo-cell" columns="4"></ui-grid-cell>
          <ui-grid-cell class="demo-cell" columns="4"></ui-grid-cell>
        </ui-grid>
        <ui-snippet :code="$store.demos[6]"></ui-snippet>

        <div class="demo-grid-legend">
          Grid with max width (1280px) and left alignment
        </div>
        <ui-grid class="demo-grid max-width" position="left">
          <ui-grid-cell class="demo-cell" columns="4"></ui-grid-cell>
          <ui-grid-cell class="demo-cell" columns="4"></ui-grid-cell>
          <ui-grid-cell class="demo-cell" columns="4"></ui-grid-cell>
        </ui-grid>
        <ui-snippet :code="$store.demos[7]"></ui-snippet>
      </section>

      <section class="demo-wrapper">
        <h6 :class="$tt('headline6')">
          1.2 Fixed column width layout grid (Widescreen Only)
        </h6>
        <template v-if="isWideScreen">
          <ui-grid>
            <ui-grid-cell>
              <div class="demo-controls">
                Desktop Column Width:
                <ui-select
                  v-model="desktop.width"
                  :options="widthOptions"
                  @change="$setGrid('column-width', 'desktop', $event)"
                ></ui-select>
              </div>
            </ui-grid-cell>
            <ui-grid-cell>
              <div class="demo-controls">
                Tablet Column Width:
                <ui-select
                  v-model="tablet.width"
                  :options="widthOptions"
                  @change="$setGrid('column-width', 'tablet', $event)"
                ></ui-select>
              </div>
            </ui-grid-cell>
            <ui-grid-cell>
              <div class="demo-controls">
                Phone Column Width:
                <ui-select
                  v-model="phone.width"
                  :options="widthOptions"
                  @change="$setGrid('column-width', 'phone', $event)"
                ></ui-select>
              </div>
            </ui-grid-cell>
          </ui-grid>

          <div class="demo-grid-legend">
            Fixed column width layout grid and center alignment by default
          </div>
          <ui-grid class="demo-grid" fixed-column-width>
            <ui-grid-cell class="demo-cell" columns="1"></ui-grid-cell>
            <ui-grid-cell class="demo-cell" columns="1"></ui-grid-cell>
            <ui-grid-cell class="demo-cell" columns="1"></ui-grid-cell>
          </ui-grid>
          <ui-snippet :code="$store.demos[8]"></ui-snippet>

          <div class="demo-grid-legend">
            Fixed column width layout grid and right alignment
          </div>
          <ui-grid class="demo-grid" fixed-column-width position="right">
            <ui-grid-cell class="demo-cell" columns="1"></ui-grid-cell>
            <ui-grid-cell class="demo-cell" columns="1"></ui-grid-cell>
            <ui-grid-cell class="demo-cell" columns="1"></ui-grid-cell>
          </ui-grid>
          <ui-snippet :code="$store.demos[9]"></ui-snippet>
        </template>
        <template v-else>
          <p>Your browser is not widescreen(Screen Size >= 1440px).</p>
        </template>

        <footer class="demo-ruler">
          <div id="current" ref="ruler"></div>
        </footer>
      </section>
    </docs-page>
  </div>
</template>

<script>
const wideScreenSize = 1440;

const gutterOptions = [
  {
    label: '8px',
    value: '8px'
  },
  {
    label: '16px',
    value: '16px'
  },
  {
    label: '24px',
    value: '24px'
  },
  {
    label: '40px',
    value: '40px'
  }
];
const widthOptions = [
  {
    label: '72px',
    value: '72px'
  },
  {
    label: '84px',
    value: '84px'
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Layout Grid'
  },
  data() {
    return {
      // demo
      gutterOptions,
      widthOptions,
      desktop: {
        margin: '24px',
        gutter: '24px',
        width: '72px'
      },
      tablet: {
        margin: '16px',
        gutter: '16px',
        width: '72px'
      },
      phone: {
        margin: '16px',
        gutter: '16px',
        width: '72px'
      },
      isWideScreen: false
    };
  },
  mounted() {
    this.$store.setTheme();

    this.initRuler();
    window.addEventListener('balmResize', this.initRuler);
  },
  beforeDestroy() {
    window.removeEventListener('balmResize', this.initRuler);
  },
  methods: {
    initRuler() {
      let size = '(phone)';
      if (window.innerWidth >= 840) {
        size = '(desktop)';
      } else if (window.innerWidth >= 480) {
        size = '(tablet)';
      }
      if (this.$refs.ruler) {
        this.$refs.ruler.textContent = window.innerWidth + 'px ' + size;
      }
      this.isWideScreen = window.innerWidth >= wideScreenSize;
    }
  }
};
</script>
