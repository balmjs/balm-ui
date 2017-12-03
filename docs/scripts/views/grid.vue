<template>
  <div class="demo--grid">
    <ui-toolbar :fixed="true">
      <ui-toolbar-row>
        <ui-toolbar-section align="start">
          <span class="catalog-back">
            <ui-toolbar-anchor type="menu" href="javascript:void(0)"
              @click.native="() => { $router.back(); }">&#xE5C4;</ui-toolbar-anchor>
          </span>
          <ui-toolbar-title class="catalog-title">Layout Grid</ui-toolbar-title>
        </ui-toolbar-section>
      </ui-toolbar-row>
    </ui-toolbar>

    <div class="demo-content mdc-toolbar-fixed-adjust">
      <section class="hero">
        <ui-grid class="demo-grid">
          <ui-cell class="demo-cell"></ui-cell>
          <ui-cell class="demo-cell" col="4"></ui-cell>
          <ui-cell class="demo-cell" :col="{'default': 4}"></ui-cell>
        </ui-grid>
      </section>

      <section class="examples">
        <h2 class="demo-grid-legend">Layout grid (in fluid container)</h2>
        <ui-grid>
          <ui-cell>
            <div class="demo-controls">
              Desktop Margin:
              <ui-select id="desktop-margin"
                optionKey="key"
                optionValue="value"
                :options="gutterOptions"
                :model="desktop.margin"
                @change="$setGrid('margin', 'desktop', $event)">
              </ui-select>

              <br>

              Desktop Gutter:
              <ui-select id="desktop-gutter"
                optionKey="key"
                optionValue="value"
                :options="gutterOptions"
                :model="desktop.gutter"
                @change="$setGrid('gutter', 'desktop', $event)">
              </ui-select>
            </div>
          </ui-cell>
          <ui-cell>
            <div class="demo-controls">
              Tablet Margin:
              <ui-select id="tablet-margin"
                optionKey="key"
                optionValue="value"
                :options="gutterOptions"
                :model="tablet.margin"
                @change="$setGrid('margin', 'tablet', $event)">
              </ui-select>

              <br>

              Tablet Gutter:
              <ui-select id="tablet-gutter"
                optionKey="key"
                optionValue="value"
                :options="gutterOptions"
                :model="tablet.gutter"
                @change="$setGrid('gutter', 'tablet', $event)">
              </ui-select>
            </div>
          </ui-cell>
          <ui-cell>
            <div class="demo-controls">
              Phone Margin:
              <ui-select id="phone-margin"
                optionKey="key"
                optionValue="value"
                :options="gutterOptions"
                :model="phone.margin"
                @change="$setGrid('margin', 'phone', $event)">
              </ui-select>

              <br>

              Phone Gutter:
              <ui-select id="phone-gutter"
                optionKey="key"
                optionValue="value"
                :options="gutterOptions"
                :model="phone.gutter"
                @change="$setGrid('gutter', 'phone', $event)">
              </ui-select>
            </div>
          </ui-cell>
        </ui-grid>

        <div class="demo-grid-legend">Grid of default wide (4 columns) items</div>
        <ui-grid class="demo-grid">
          <ui-cell class="demo-cell">4</ui-cell>
          <ui-cell class="demo-cell">4</ui-cell>
          <ui-cell class="demo-cell">4</ui-cell>
        </ui-grid>

        <div class="demo-grid-legend">Grid of 1 column wide items</div>
        <ui-grid class="demo-grid">
          <ui-cell class="demo-cell" col="1">1</ui-cell>
          <ui-cell class="demo-cell" col="1">1</ui-cell>
          <ui-cell class="demo-cell" col="1">1</ui-cell>
          <ui-cell class="demo-cell" col="1">1</ui-cell>
          <ui-cell class="demo-cell" col="1">1</ui-cell>
          <ui-cell class="demo-cell" col="1">1</ui-cell>
          <ui-cell class="demo-cell" col="1">1</ui-cell>
          <ui-cell class="demo-cell" col="1">1</ui-cell>
          <ui-cell class="demo-cell" col="1">1</ui-cell>
          <ui-cell class="demo-cell" col="1">1</ui-cell>
          <ui-cell class="demo-cell" col="1">1</ui-cell>
          <ui-cell class="demo-cell" col="1">1</ui-cell>
        </ui-grid>

        <div class="demo-grid-legend">Grid of differently sized items</div>
        <ui-grid class="demo-grid">
          <ui-cell class="demo-cell" col="6">6</ui-cell>
          <ui-cell class="demo-cell" col="4">4</ui-cell>
          <ui-cell class="demo-cell" col="2">2</ui-cell>
        </ui-grid>

        <div class="demo-grid-legend">Grid of items with tweaks at different screen sizes</div>
        <ui-grid class="demo-grid">
          <ui-cell class="demo-cell" :col="{default:6, tablet:8}">6 (8 tablet)</ui-cell>
          <ui-cell class="demo-cell" :col="{default:4, tablet:6}">4 (6 tablet)</ui-cell>
          <ui-cell class="demo-cell" :col="{default:2, phone:4}">2 (4 phone)</ui-cell>
        </ui-grid>

        <div class="demo-grid-legend">Grid nested within parent grid cell</div>
        <ui-grid class="demo-grid">
          <ui-cell class="demo-parent-cell" col="4">
            <ui-grid-inner>
              <ui-cell class="demo-child-cell demo-cell" col="4">
                <span>Child 4</span>
              </ui-cell>
              <ui-cell class="demo-child-cell demo-cell" col="4">
                <span>Child 4</span>
              </ui-cell>
              <ui-cell class="demo-child-cell demo-cell" col="4">
                <span>Child 4</span>
              </ui-cell>
            </ui-grid-inner>
            <span>Parent 4</span>
          </ui-cell>
          <ui-cell class="demo-cell" col="4">4</ui-cell>
          <ui-cell class="demo-cell" col="4">4</ui-cell>
        </ui-grid>

        <h3 class="demo-grid-legend">Grid with max width</h3>
        <div class="demo-grid-legend">Grid with max width (1280px) and center alignment by default</div>
        <ui-grid class="demo-grid max-width">
          <ui-cell class="demo-cell" col="4"></ui-cell>
          <ui-cell class="demo-cell" col="4"></ui-cell>
          <ui-cell class="demo-cell" col="4"></ui-cell>
        </ui-grid>

        <div class="demo-grid-legend">Grid with max width (1280px) and left alignment</div>
        <ui-grid class="demo-grid max-width" align="left">
          <ui-cell class="demo-cell" col="4"></ui-cell>
          <ui-cell class="demo-cell" col="4"></ui-cell>
          <ui-cell class="demo-cell" col="4"></ui-cell>
        </ui-grid>

        <h2 class="demo-grid-legend">Fixed column width layout grid</h2>
        <ui-grid>
          <ui-cell>
            <div class="demo-controls">
              Desktop Column Width:
              <ui-select id="desktop-column-width"
                optionKey="key"
                optionValue="value"
                :options="widthOptions"
                :model="desktop.width"
                @change="$setGrid('column-width', 'desktop', $event)">
              </ui-select>
            </div>
          </ui-cell>
          <ui-cell>
            <div class="demo-controls">
              Tablet Column Width:
              <ui-select id="tablet-column-width"
                optionKey="key"
                optionValue="value"
                :options="widthOptions"
                :model="tablet.width"
                @change="$setGrid('column-width', 'tablet', $event)">
              </ui-select>
            </div>
          </ui-cell>
          <ui-cell>
            <div class="demo-controls">
              Phone Column Width:
              <ui-select id="phone-column-width"
                optionKey="key"
                optionValue="value"
                :options="widthOptions"
                :model="phone.width"
                @change="$setGrid('column-width', 'phone', $event)">
              </ui-select>
            </div>
          </ui-cell>
        </ui-grid>

        <div class="demo-grid-legend">Fixed column width layout grid and center alignment by default</div>
        <ui-grid class="demo-grid" fixedColumnWidth>
          <ui-cell class="demo-cell" col="1"></ui-cell>
          <ui-cell class="demo-cell" col="1"></ui-cell>
          <ui-cell class="demo-cell" col="1"></ui-cell>
        </ui-grid>

        <div class="demo-grid-legend">Fixed column width layout grid and right alignment</div>
        <ui-grid class="demo-grid" fixedColumnWidth align="right">
          <ui-cell class="demo-cell" col="1"></ui-cell>
          <ui-cell class="demo-cell" col="1"></ui-cell>
          <ui-cell class="demo-cell" col="1"></ui-cell>
        </ui-grid>

        <div class="demo-ruler"><div id="current" ref="ruler"></div></div>
      </section>

      <!-- <ui-apidoc name="grid"></ui-apidoc>
      <ui-apidoc name="cell"></ui-apidoc> -->
    </div>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

const gutterOptions = [{
  key: '8px',
  value: '8px'
}, {
  key: '16px',
  value: '16px'
}, {
  key: '24px',
  value: '24px'
}, {
  key: '40px',
  value: '40px'
}];
const widthOptions = [{
  key: '72px',
  value: '72px'
}, {
  key: '84px',
  value: '84px'
}];

export default {
  mixins: [snippets],
  data() {
    return {
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
      }
    };
  },
  methods: {
    update() {
      let size = '(phone)';
      if (window.innerWidth >= 840) {
        size = '(desktop)';
      } else if (window.innerWidth >= 480) {
        size = '(tablet)';
      }
      if (this.$refs.ruler) {
        this.$refs.ruler.textContent = window.innerWidth + 'px ' + size;
      }
    }
  },
  mounted() {
    // this.showCode('grid');
    window.addEventListener('resize', this.update);
    this.update();
  }
};
</script>
