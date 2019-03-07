<template>
  <div :class="[$tt('body1'), 'demo--grid-list']">
    <section class="hero component">
      <ui-grid-list>
        <ui-grid-tile v-for="i in 12" :key="i" imageOnly></ui-grid-tile>
      </ui-grid-list>
    </section>

    <!-- <ui-toc-affix></ui-toc-affix> -->
    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">1. Example</h4>
      <section class="example examples">
        <h2>Grid List (Default): empty grid</h2>
        <ui-grid-list></ui-grid-list>

        <h2>Grid List (Default): tile aspect ratio 1x1 with oneline footer caption</h2>
        <ui-grid-list>
          <ui-grid-tile v-for="i in 6" :key="i" :src="require('../../../images/1-1.jpg')">
            <ui-grid-tile-title>Single Very Long Grid Title Line</ui-grid-tile-title>
          </ui-grid-tile>
        </ui-grid-list>

        <h2>Grid List: tile aspect ratio 1x1 with 1px gutter</h2>
        <ui-grid-list gutter1>
          <ui-grid-tile v-for="i in 6" :key="i" :src="require('../../../images/1-1.jpg')">
            <ui-grid-tile-title>Single Very Long Grid Title Line</ui-grid-tile-title>
          </ui-grid-tile>
        </ui-grid-list>

        <h2>Grid List: tile aspect ratio 1x1 image only</h2>
        <ui-grid-list>
          <ui-grid-tile v-for="i in 6" :key="i" imageOnly :src="require('../../../images/1-1.jpg')"></ui-grid-tile>
        </ui-grid-list>

        <h2>Grid List: tile aspect ratio 1x1 with oneline header caption</h2>
        <ui-grid-list headerCaption>
          <ui-grid-tile v-for="i in 6" :key="i" :src="require('../../../images/1-1.jpg')">
            <ui-grid-tile-title>Single Very Long Grid Title Line</ui-grid-tile-title>
          </ui-grid-tile>
        </ui-grid-list>

        <h2>Grid List: tile aspect ratio 1x1 with twoline footer caption</h2>
        <ui-grid-list twolineCaption>
          <ui-grid-tile v-for="i in 6" :key="i" :src="require('../../../images/1-1.jpg')">
            <ui-grid-tile-title>Single Very Long Grid Title Line</ui-grid-tile-title>
            <ui-grid-tile-subtitle>Support text</ui-grid-tile-subtitle>
          </ui-grid-tile>
        </ui-grid-list>

        <h2>Grid List: tile aspect ratio 1x1 with oneline footer caption and icon at start of the caption</h2>
        <ui-grid-list iconStart>
          <ui-grid-tile
            v-for="i in 6"
            :key="i"
            :src="require('../../../images/1-1.jpg')"
            icon="star_border"
          >
            <ui-grid-tile-title>Single Very Long Grid Title Line</ui-grid-tile-title>
          </ui-grid-tile>
        </ui-grid-list>

        <h2>Grid List: tile aspect ratio 1x1 with twoline footer caption and icon at start of the caption</h2>
        <ui-grid-list twolineCaption iconStart>
          <ui-grid-tile
            v-for="i in 6"
            :key="i"
            :src="require('../../../images/1-1.jpg')"
            icon="star_border"
          >
            <ui-grid-tile-title>Single Very Long Grid Title Line</ui-grid-tile-title>
            <ui-grid-tile-subtitle>Support text</ui-grid-tile-subtitle>
          </ui-grid-tile>
        </ui-grid-list>

        <h2>Grid List: tile aspect ratio 1x1 with oneline footer caption and icon at end of the caption</h2>
        <ui-grid-list iconEnd>
          <ui-grid-tile
            v-for="i in 6"
            :key="i"
            :src="require('../../../images/1-1.jpg')"
            icon="star_border"
          >
            <ui-grid-tile-title>Single Very Long Grid Title Line</ui-grid-tile-title>
          </ui-grid-tile>
        </ui-grid-list>

        <h2>Grid List: tile aspect ratio 1x1 with twoline footer caption and icon at end of the caption</h2>
        <ui-grid-list twolineCaption iconEnd>
          <ui-grid-tile
            v-for="i in 6"
            :key="i"
            :src="require('../../../images/1-1.jpg')"
            icon="star_border"
          >
            <ui-grid-tile-title>Single Very Long Grid Title Line</ui-grid-tile-title>
            <ui-grid-tile-subtitle>Support text</ui-grid-tile-subtitle>
          </ui-grid-tile>
        </ui-grid-list>

        <h2>Grid List: tile aspect ratio 16x9 with oneline footer caption (Support: 16:9, 4:3, 3:4, 2:3, 3:2 as well)</h2>
        <ui-grid-list ratio="16x9">
          <ui-grid-tile v-for="i in 6" :key="i" :src="require('../../../images/16-9.jpg')">
            <ui-grid-tile-title>Single Very Long Grid Title Line</ui-grid-tile-title>
          </ui-grid-tile>
        </ui-grid-list>

        <h2>Grid List: use div's background instead of img tag (useful when image ratio cannot be ensured)</h2>
        <ui-grid-list headerCaption>
          <ui-grid-tile v-for="i in 6" :key="i" imageClass="demo-grid-tile-content">
            <ui-grid-tile-title>Single Very Long Grid Title Line</ui-grid-tile-title>
          </ui-grid-tile>
        </ui-grid-list>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Grid List'
  }
};
</script>
