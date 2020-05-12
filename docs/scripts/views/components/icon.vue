<template>
  <ui-page name="icon" demoCount="2">
    <template #hero>
      <div class="hero-demos">
        <ui-icon :type="typeOption">add</ui-icon>
        <ui-icon :type="typeOption">description</ui-icon>
        <ui-icon :type="typeOption">edit</ui-icon>
        <ui-icon :type="typeOption">delete</ui-icon>
      </div>
      <div class="hero-options">
        <ui-select
          class="hero-option"
          :options="TypeOptions"
          v-model="typeOption"
          >Icon themes</ui-select
        >
      </div>
    </template>

    <!-- Content -->
    <!-- <ui-tab-bar class="category-affix">
      <ui-tab
        v-for="(category, index) in categories"
        v-anchor:href="`#${category.name}`"
        :key="category.name"
        >{{ category.name }}</ui-tab
      >
    </ui-tab-bar> -->

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Sizing</h6>
      <div class="demo sizing-example">
        <div class="icons-preview-code">
          <div v-for="i in [18, 24, 36, 48]" :key="i" class="icons-preview">
            <ui-icon :size="i">face</ui-icon>
            <div class="icon-caption">
              {{ i }}px
              {{ i === 24 ? '(default)' : '' }}
            </div>
          </div>
        </div>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Coloring</h6>
      <div class="demo coloring-example">
        <div class="icons-preview-code">
          <div class="icons-preview">
            <ui-icon dark>face</ui-icon>
            <div class="icon-caption">Normal</div>
          </div>
          <div class="icons-preview">
            <ui-icon dark inactive>face</ui-icon>
            <div class="icon-caption">Disabled</div>
          </div>
          <div class="icons-preview icons-dark-bg">
            <ui-icon light>face</ui-icon>
            <div class="icon-caption">Normal</div>
          </div>
          <div class="icons-preview icons-dark-bg">
            <ui-icon light inactive>face</ui-icon>
            <div class="icon-caption">Disabled</div>
          </div>
          <div class="icons-preview">
            <ui-icon class="orange600">face</ui-icon>
            <div class="icon-caption">orange600</div>
          </div>
        </div>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <template #after>
      <div class="search-area" v-shadow="1">
        <ui-textfield
          withLeadingIcon
          inputType="search"
          id="search"
          placeholder="Icon name keywords"
          helperTextId="my-icons"
          fullwidth
          :model="keywords"
          @input="onInput"
        >
          <template #before>
            <ui-textfield-icon>search</ui-textfield-icon>
          </template>
        </ui-textfield>
        <ui-textfield-helper id="my-icons" class="search-helper" visible>
          TIPS: Click an icon to copy icon name, then you can use `
          <b>&lt;ui-icon&gt;${icon_name}&lt;/ui-icon&gt;</b>`.
        </ui-textfield-helper>
      </div>

      <ui-list-group>
        <template v-for="(category, index) in categories">
          <ui-list-group-subheader
            :key="`subheader${index}`"
            v-anchor:id="category.name"
            :class="$tt('headline6')"
            >{{ category.name }}</ui-list-group-subheader
          >
          <ui-image-list
            v-if="Object.keys(currentIcons).length"
            :key="`list${index}`"
          >
            <ui-image-item
              v-for="(icon, i) in currentIcons[category.name]"
              :key="i"
              :title="icon.name"
              class="btn-copy"
              :data-clipboard-text="icon.id"
            >
              <template #image>
                <ui-icon :type="typeOption" size="48">{{ icon.id }}</ui-icon>
                <div v-if="icon.isNew" class="new-badge">New</div>
              </template>
              <ui-image-text>{{ icon.name }}</ui-image-text>
            </ui-image-item>
          </ui-image-list>
          <p v-else :key="`p${index}`">No Icons</p>
          <ui-list-divider
            :key="`divider${index}`"
            v-if="index < category.count - 1"
          ></ui-list-divider>
        </template>
      </ui-list-group>
    </template>
  </ui-page>
</template>

<script>
import Clipboard from 'clipboard';
import { MDI_VERSION } from '@/config';

let UNDEFINED_ICONS = [];
if (MDI_VERSION <= 48) {
  UNDEFINED_ICONS = UNDEFINED_ICONS.concat([
    'battery_20',
    'battery_30',
    'battery_50',
    'battery_60',
    'battery_80',
    'battery_90',
    'battery_charging_20',
    'battery_charging_30',
    'battery_charging_50',
    'battery_charging_60',
    'battery_charging_80',
    'battery_charging_90',
    'signal_cellular_0_bar',
    'signal_cellular_1_bar',
    'signal_cellular_2_bar',
    'signal_cellular_3_bar',
    'signal_cellular_connected_no_internet_0_bar',
    'signal_cellular_connected_no_internet_1_bar',
    'signal_cellular_connected_no_internet_2_bar',
    'signal_cellular_connected_no_internet_3_bar',
    'signal_wifi_0_bar',
    'signal_wifi_1_bar',
    'signal_wifi_1_bar_lock',
    'signal_wifi_2_bar',
    'signal_wifi_2_bar_lock',
    'signal_wifi_3_bar',
    'signal_wifi_3_bar_lock'
  ]);
}

if (MDI_VERSION <= 38) {
  UNDEFINED_ICONS = UNDEFINED_ICONS.concat([
    'all_inbox',
    'arrow_right_alt',
    'calendar_today',
    'calendar_view_day',
    'commute',
    'contact_support',
    'drag_indicator',
    'horizontal_split',
    'maximize',
    'minimize',
    'offline_bolt',
    'supervised_user_circle',
    'text_rotate_up',
    'text_rotate_vertical',
    'text_rotation_down',
    'text_rotation_none',
    'vertical_split',
    'voice_over_off',
    'notification_important',
    '4k',
    'control_camera',
    'missed_video_call',
    'alternate_email',
    'cell_wifi',
    'desktop_access_disabled',
    'duo',
    'mobile_screen_share',
    'unsubscribe',
    'ballot',
    'file_copy',
    'how_to_reg',
    'how_to_vote',
    'outlined_flag',
    'waves',
    'where_to_vote',
    'mobile_friendly',
    'mobile_off',
    'signal_cellular_alt',
    'bar_chart',
    'scatter_plot',
    'score',
    'device_unknown',
    'music_off',
    'shutter_speed',
    '360',
    'atm',
    'category',
    'compass_calibration',
    'departure_board',
    'fastfood',
    'money',
    'not_listed_location',
    'transit_enterexit',
    'trip_origin',
    'arrow_left',
    'arrow_right',
    'meeting_room',
    'no_meeting_room',
    'toggle_off',
    'toggle_on'
  ]);
}

const TypeOptions = [
  {
    label: 'Filled',
    value: 0
  },
  {
    label: 'Outlined',
    value: 1
  },
  {
    label: 'Round',
    value: 2
  },
  {
    label: 'Two-Tone',
    value: 3
  },
  {
    label: 'Sharp',
    value: 4
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Icons'
  },
  data() {
    return {
      // hero
      TypeOptions,
      typeOption: 0,
      // icons
      categories: [],
      icons: {},
      currentIcons: {},
      keywords: ''
    };
  },
  async created() {
    let response = await this.$http.get(`${this.$domain}/data/icons.json`);
    let { categories } = response.data;

    categories.map((category) => {
      let icons = category.icons.filter(
        (icon) => !UNDEFINED_ICONS.includes(icon.id)
      );

      this.categories.push({
        name: category.name,
        count: icons.length
      });
      this.$set(this.icons, category.name, []);

      icons.forEach((icon) => {
        this.icons[category.name].push({
          id: icon.id,
          name: icon.id
        });
      });
    });

    this.currentIcons = Object.assign({}, this.icons);
  },
  mounted() {
    let clipboard = new Clipboard('.btn-copy');

    clipboard.on('success', (e) => {
      this.$toast(`'${e.text}' copied!`);

      e.clearSelection();
    });
  },
  methods: {
    filterIcons() {
      if (this.keywords) {
        for (let categoryName in this.icons) {
          this.currentIcons[categoryName] = this.icons[categoryName].filter(
            (icon) => {
              return icon.name.indexOf(this.keywords) > -1;
            }
          );
        }
      } else {
        this.currentIcons = Object.assign({}, this.icons);
      }
    },
    onInput(value) {
      this.keywords = value.trim();
      this.filterIcons();
    }
  }
};
</script>
