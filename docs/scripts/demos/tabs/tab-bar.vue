<template>
  <section class="example">
    <h6 :class="$tt('headline6')">1.2 Tab Bar</h6>

    <div class="demo">
      <ui-tab-bar class="hero-demo-tab-bar" v-model="active">
        <ui-tab v-for="(item, index) in list" :key="index">
          {{ item }}
        </ui-tab>
      </ui-tab-bar>
    </div>
    <ui-snippet :code="$store.demos[5]"></ui-snippet>

    <template v-if="isLargeScreen">
      <h6 :class="$tt('subtitle1')">Start Alignment</h6>
      <div class="demo">
        <ui-tab-bar v-model="active" align="start">
          <ui-tab v-for="(tab, index) in tabs" :key="index" minWidth>
            {{ tab.text }}
          </ui-tab>
        </ui-tab-bar>
      </div>

      <h6 :class="$tt('subtitle1')">Center Alignment</h6>
      <div class="demo">
        <ui-tab-bar v-model="active" align="center">
          <ui-tab v-for="(tab, index) in tabs" :key="index" minWidth>
            {{ tab.text }}
          </ui-tab>
        </ui-tab-bar>
      </div>

      <h6 :class="$tt('subtitle1')">End Alignment</h6>
      <div class="demo">
        <ui-tab-bar v-model="active" align="end">
          <ui-tab v-for="(tab, index) in tabs" :key="index" minWidth>
            {{ tab.text }}
          </ui-tab>
        </ui-tab-bar>
      </div>
      <ui-snippet :code="$store.demos[6]"></ui-snippet>
    </template>
    <template v-else>
      <h6 :class="$tt('subtitle1')">Alignment Demos</h6>
      <p>Your browser is not largescreen(Screen Size >= 1024px).</p>
    </template>

    <h6 :class="$tt('subtitle1')">Customization</h6>
    <div class="demo">
      <ui-tab-bar class="custom-demo-tab-bar" v-model="active">
        <ui-tab
          v-for="(tab, index) in tabs"
          :key="index"
          type="textWithIcon"
          :icon="tab.icon"
          minWidth
          contentIndicator
        >
          {{ tab.text }}
        </ui-tab>
      </ui-tab-bar>
    </div>
    <ui-snippet :code="$store.demos[7]"></ui-snippet>
  </section>
</template>

<script>
export default {
  props: {
    isLargeScreen: {
      type: Boolean,
      default: false
    },
    code: Array
  },
  data() {
    return {
      active: 0,
      tabs: [
        {
          text: 'Favorites',
          icon: 'favorite',
          indicator: 'crop_square'
        },
        {
          text: 'Recents',
          icon: 'phone',
          indicator: 'panorama_fish_eye'
        },
        {
          text: 'Nearby',
          icon: 'near_me',
          indicator: 'change_history'
        }
      ],
      list: [
        'Banana',
        'Papaya',
        'Mangosteen',
        'Pitaya',
        'Lychee',
        'Passionfruit',
        'Kiwi',
        'Mango'
      ]
    };
  }
};
</script>
