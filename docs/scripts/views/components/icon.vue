<template>
  <div :class="[$tt('body1'), 'demo--icon']">
    <section class="hero component">
      <ui-icon>add</ui-icon>
      <ui-icon>description</ui-icon>
      <ui-icon>edit</ui-icon>
      <ui-icon>delete</ui-icon>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <section class="sizing-example">
        <h6 :class="$tt('headline6')">1.1 Sizing</h6>
        <div class="icons-preview-code">
          <div v-for="i in [18, 24, 36, 48]" :key="i" class="icons-preview">
            <ui-icon :size="i">face</ui-icon>
            <div class="icon-caption">
              {{ i }}px
              {{ i === 24 ? '(default)' : '' }}
            </div>
          </div>
        </div>
      </section>
      <ui-accordion>
        <ui-markdown :text="code[1]"></ui-markdown>
      </ui-accordion>

      <section class="coloring-example">
        <h6 :class="$tt('headline6')">1.2 Coloring</h6>
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
      </section>
      <ui-accordion>
        <ui-markdown :text="code[2]"></ui-markdown>
      </ui-accordion>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="icon"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">3. Sass Variables</h4>
      <ui-cssdocs name="icon"></ui-cssdocs>

      <h4 :class="$tt('headline4')">4. Icon List</h4>
      <div class="search-area" v-shadow="1">
        <ui-textfield
          box
          leadingIcon
          type="search"
          id="search"
          placeholder="Icon name keywords"
          helptextId="my-icons"
          fullwidth
          :model="keywords"
          @input="onInput"
        >
          <template #before>
            <ui-textfield-icon>search</ui-textfield-icon>
          </template>
        </ui-textfield>
        <ui-textfield-helptext id="my-icons" class="search-helper" visible>
          TIPS: Click an icon to copy icon name, then you can use `
          <b>&lt;ui-icon&gt;${icon_name}&lt;/ui-icon&gt;</b>`.
        </ui-textfield-helptext>
      </div>

      <ui-list nonInteractive>
        <template v-for="(category, index) in categories">
          <ui-item :key="`item${index}`">
            <h2>{{ category.name }}</h2>
            <template v-if="Object.keys(currentIcons).length">
              <ui-grid-list>
                <ui-grid-tile
                  v-for="(icon, i) in currentIcons[category.name]"
                  :key="i"
                  noImage
                  class="btn-clipboard"
                  :data-clipboard-text="icon.id"
                >
                  <template #icon>
                    <ui-icon size="48">{{ icon.id }}</ui-icon>
                  </template>
                  <!-- <div v-if="icon.isNew" class="new-badge">New</div> -->
                  <ui-grid-tile-title :title="icon.name">{{ icon.name }}</ui-grid-tile-title>
                </ui-grid-tile>
              </ui-grid-list>
            </template>
            <template v-else>
              <p>No Icons</p>
            </template>
          </ui-item>
          <ui-item-divider :key="`divider${index}`" v-if="index < category.count - 1"></ui-item-divider>
        </template>
      </ui-list>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard';
import snippets from '@/mixins/snippets';
import { MDI_VERSION } from '@/config';

let UNDEFINED_ICONS = [];
if (MDI_VERSION < 47) {
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

if (MDI_VERSION < 41) {
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

export default {
  metaInfo: {
    titleTemplate: '%s - Icons'
  },
  mixins: [snippets],
  data() {
    return {
      number: 0,
      categories: [],
      icons: {},
      currentIcons: {},
      keywords: ''
    };
  },
  async created() {
    this.showCode('icon', 2);

    let response = await this.$http.get(`${this.$domain}/data/icons.json`);
    let { categories } = response.data;

    categories.map(category => {
      let icons = category.icons.filter(
        icon => !UNDEFINED_ICONS.includes(icon.id)
      );

      this.categories.push({
        name: category.name,
        count: icons.length
      });
      this.$set(this.icons, category.name, []);

      icons.forEach(icon => {
        this.icons[category.name].push({
          id: icon.id,
          name: icon.id
        });
      });
    });

    this.currentIcons = Object.assign({}, this.icons);
  },
  mounted() {
    let clipboard = new Clipboard('.btn-clipboard');

    clipboard.on('success', e => {
      this.$toast(`'${e.text}' copied!`);

      e.clearSelection();
    });
  },
  methods: {
    filterIcons() {
      if (this.keywords) {
        for (let categoryName in this.icons) {
          this.currentIcons[categoryName] = this.icons[categoryName].filter(
            icon => {
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
