<template>
  <section class="example">
    <h5 :class="$tt('headline4')">1.2 Tab Bar</h5>

    <div class="demo">
      <ui-tab-bar class="hero-demo-tab-bar" v-model="active">
        <ui-tab v-for="(item, index) in list" :key="index">
          {{ item }}
        </ui-tab>
      </ui-tab-bar>
    </div>

    <h6 :class="$tt('headline6')">Start Alignment</h6>
    <div class="demo">
      <ui-tab-bar v-model="active" align="start">
        <ui-tab v-for="(tab, index) in tabs" :key="index" minWidth>
          {{ tab.text }}
        </ui-tab>
      </ui-tab-bar>
    </div>

    <h6 :class="$tt('headline6')">Center Alignment</h6>
    <div class="demo">
      <ui-tab-bar v-model="active" align="center">
        <ui-tab v-for="(tab, index) in tabs" :key="index" minWidth>
          {{ tab.text }}
        </ui-tab>
      </ui-tab-bar>
    </div>

    <h6 :class="$tt('headline6')">End Alignment</h6>
    <div class="demo">
      <ui-tab-bar v-model="active" align="end">
        <ui-tab v-for="(tab, index) in tabs" :key="index" minWidth>
          {{ tab.text }}
        </ui-tab>
      </ui-tab-bar>
    </div>

    <h6 :class="$tt('headline6')">Customization</h6>
    <div class="demo">
      <ui-tab-bar class="custom-demo-tab-bar" v-model="active">
        <ui-tab v-for="(tab, index) in tabs" :key="index"
          type="both"
          :icon="tab.icon"
          minWidth
          contentIndicator>
          {{ tab.text }}
        </ui-tab>
      </ui-tab-bar>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      active: 0,
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
