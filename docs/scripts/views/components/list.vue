<template>
  <div :class="[$tt('body1'), 'demo--list']">
    <section class="hero component">
      <div class="hero-demo">
        <ui-list :type="type" :avatar="beforeText === 2">
          <ui-item v-for="i in 3" :key="i" v-ripple>
            <ui-item-first-content v-if="beforeText">
              <ui-icon v-if="beforeText === 1">favorite</ui-icon>
              <svg-avatar v-if="beforeText === 2"></svg-avatar>
            </ui-item-first-content>
            <ui-item-text-content v-if="type === 2">
              <ui-item-text1>Two-line item</ui-item-text1>
              <ui-item-text2>Secondary text</ui-item-text2>
            </ui-item-text-content>
            <ui-item-text-content v-else>Single-line item</ui-item-text-content>
            <ui-item-last-content v-if="afterText">
              <ui-icon-button
                v-if="afterText === 1"
                icon="more_vert"
              ></ui-icon-button>
              <span v-if="afterText === 2">Meta</span>
            </ui-item-last-content>
          </ui-item>
        </ui-list>
      </div>
      <div class="hero-options">
        <ui-select class="hero-option" :options="ListTypeOptions" v-model="type"
          >Type</ui-select
        >
        <div class="hero-option hero-options">
          <ui-select :options="BeforeListTextOptions" v-model="beforeText"
            >Before list text</ui-select
          >
          <ui-select :options="AfterListTextOptions" v-model="afterText"
            >After list text</ui-select
          >
        </div>
      </div>
    </section>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demos'" :class="$tt('headline4')">1. Example</h4>
      <div id="demo-wrapper">
        // TODO
      </div>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="list"></ui-apidocs>
      <ui-apidocs name="list-item"></ui-apidocs>
      <ui-apidocs name="list-divider"></ui-apidocs>
      <ui-apidocs name="list-group"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="list"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
import SvgAvatar from '@/components/avatar';

const ListTypeOptions = [
  {
    label: 'Single-line list',
    value: 1
  },
  {
    label: 'Two-line list',
    value: 2
  }
];

const BeforeListTextOptions = [
  {
    label: 'None',
    value: 0
  },
  {
    label: 'Icon',
    value: 1
  },
  {
    label: 'Avatar',
    value: 2
  }
];

const AfterListTextOptions = [
  {
    label: 'None',
    value: 0
  },
  {
    label: 'Icon',
    value: 1
  },
  {
    label: 'Text',
    value: 2
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - List'
  },
  components: {
    SvgAvatar
  },
  mixins: [snippets],
  data() {
    return {
      ListTypeOptions,
      BeforeListTextOptions,
      AfterListTextOptions,
      type: 1,
      beforeText: 0,
      afterText: 0,
      selectedIndex: 0,
      checkedValues: [],
      checkedValue: -1,
      folders: [
        {
          first: 'folder',
          text: 'Photos',
          subtext: 'Jan 9, 2014',
          title: 'Photos',
          description: 'This is some secondary text',
          last: 'info'
        },
        {
          first: 'folder',
          text: 'Recipes',
          subtext: 'Jan 9, 2014',
          title:
            'Photos of my best photography using my finely tuned skills and eye',
          description: 'This is some secondary text',
          last: 'info',
          selected: true
        },
        {
          first: 'folder',
          text: 'Work',
          subtext: 'Jan 9, 2014',
          title: 'Work Photos',
          description:
            'This is a description of work photos from the years 2018 to present time while I was a barista',
          last: 'info'
        }
      ],
      files: [
        {
          first: 'insert_drive_file',
          text: 'Vacation Itinerary',
          subtext: 'Jan 10, 2014',
          last: 'info'
        },
        {
          first: 'insert_drive_file',
          text: 'Kitchen Remodel',
          subtext: 'Jan 20, 2014',
          last: 'info'
        }
      ],
      items: [
        {
          icon: 'network_wifi',
          text: 'Wi-Fi',
          avatar: require('../../../images/animal1.svg'),
          name: 'Panda',
          favorite: true
        },
        {
          icon: 'bluetooth',
          text: 'Bluetooth',
          avatar: require('../../../images/animal2.svg'),
          name: 'Sleuth',
          favorite: false
        },
        {
          icon: 'data_usage',
          text: 'Data Usage',
          avatar: require('../../../images/animal3.svg'),
          name: 'Brown Bear',
          favorite: false
        }
      ]
    };
  },
  created() {
    this.showCode('list', 13);
  }
};
</script>
