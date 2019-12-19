<template>
  <div :class="[$tt('body1'), 'demo--list']">
    <header class="hero component">
      <div class="hero-demo">
        <ui-list :type="typeOption" :avatar="beforeText === 2">
          <ui-item v-for="i in 3" :key="i">
            <ui-item-first-content v-if="beforeText">
              <ui-icon v-if="beforeText === 1">favorite</ui-icon>
              <svg-avatar v-if="beforeText === 2"></svg-avatar>
            </ui-item-first-content>
            <ui-item-text-content v-if="typeOption === 2">
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
        <ui-select
          class="hero-option"
          :options="TypeOptions"
          v-model="typeOption"
          >Type</ui-select
        >
        <div class="hero-option hero-options">
          <ui-select :options="BeforeTextOptions" v-model="beforeText"
            >Before list text</ui-select
          >
          <ui-select :options="AfterTextOptions" v-model="afterText"
            >After list text</ui-select
          >
        </div>
      </div>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <div id="demo-wrapper">
        <h4 :class="$tt('headline6')">1.1 Single-Line</h4>
        <ui-list>
          <ui-item v-for="i in items" :key="i">
            <ui-item-text-content>Line item</ui-item-text-content>
          </ui-item>
        </ui-list>
        <ui-snippet :code="code[1]"></ui-snippet>

        <h4 :class="$tt('headline6')">1.2 Two-Line</h4>
        <ui-list :type="2">
          <ui-item v-for="i in items" :key="i">
            <ui-item-text-content>
              <ui-item-text1>Line item</ui-item-text1>
              <ui-item-text2>Secondary text</ui-item-text2>
            </ui-item-text-content>
          </ui-item>
        </ui-list>
        <ui-snippet :code="code[2]"></ui-snippet>

        <h4 :class="$tt('headline6')">1.3 Leading Icon</h4>
        <ui-list>
          <ui-item v-for="(item, index) in items1" :key="index">
            <ui-item-first-content>
              <ui-icon>{{ item.icon }}</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>{{ item.text }}</ui-item-text-content>
          </ui-item>
        </ui-list>
        <ui-snippet :code="code[3]"></ui-snippet>

        <h4 :class="$tt('headline6')">
          1.4 List with activated item (Selected Index: {{ selectedIndex }})
        </h4>
        <ui-list singleSelection v-model="selectedIndex">
          <ui-item v-for="(item, index) in items2" :key="index">
            <ui-item-first-content>
              <ui-icon>{{ item.icon }}</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>{{ item.text }}</ui-item-text-content>
          </ui-item>
        </ui-list>
        <ui-snippet :code="code[4]"></ui-snippet>

        <h4 :class="$tt('headline6')">1.5 Trailing Icon</h4>
        <ui-list>
          <ui-item v-for="i in items" :key="i">
            <ui-item-text-content>Line item</ui-item-text-content>
            <ui-item-last-content>
              <ui-icon>info</ui-icon>
            </ui-item-last-content>
          </ui-item>
        </ui-list>
        <ui-snippet :code="code[5]"></ui-snippet>

        <h4 :class="$tt('headline6')">
          1.6 Two-Line with Leading and Trailing Icon and Divider
        </h4>
        <ui-list :type="2" avatar>
          <template v-for="(item, index) in items3">
            <ui-item-divider v-if="item === '-'" :key="index"></ui-item-divider>
            <ui-item v-else :key="index">
              <template #before="{ iconClass }">
                <ui-icon :class="iconClass">folder</ui-icon>
              </template>
              <ui-item-text-content>
                <ui-item-text1>{{ item.text }}</ui-item-text1>
                <ui-item-text2>{{ item.subtext }}</ui-item-text2>
              </ui-item-text-content>
              <ui-item-last-content>
                <ui-icon>info</ui-icon>
              </ui-item-last-content>
            </ui-item>
          </template>
        </ui-list>
        <ui-snippet :code="code[6]"></ui-snippet>

        <h4 :class="$tt('headline6')">
          1.7 List with Trailing Checkbox (Checked values: {{ checkedValues }})
        </h4>
        <ui-list>
          <template v-for="(item, index) in items3">
            <ui-item-divider v-if="item === '-'" :key="index"></ui-item-divider>
            <ui-item v-else :key="index">
              <ui-item-text-content>{{ item.text }}</ui-item-text-content>
              <ui-item-last-content>
                <ui-checkbox
                  v-model="checkedValues"
                  :value="item.value"
                ></ui-checkbox>
              </ui-item-last-content>
            </ui-item>
          </template>
        </ui-list>
        <ui-snippet :code="code[7]"></ui-snippet>

        <h4 :class="$tt('headline6')">
          1.8 List with Trailing Radio Buttons (Checked value:
          {{ checkedValue }})
        </h4>
        <ui-list>
          <template v-for="(item, index) in items3">
            <ui-item-divider v-if="item === '-'" :key="index"></ui-item-divider>
            <ui-item v-else :key="index">
              <ui-item-text-content>{{ item.text }}</ui-item-text-content>
              <ui-item-last-content>
                <ui-radio v-model="checkedValue" :value="item.value"></ui-radio>
              </ui-item-last-content>
            </ui-item>
          </template>
        </ui-list>
        <ui-snippet :code="code[8]"></ui-snippet>
      </div>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs.list"></ui-markdown>
      <ui-markdown :text="docs['list-item']"></ui-markdown>
      <ui-markdown :text="docs['list-divider']"></ui-markdown>
      <ui-markdown :text="docs['list-group']"></ui-markdown>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-markdown :text="docs.css"></ui-markdown>
    </div>
  </div>
</template>

<script>
import SvgAvatar from '@/components/svg-avatar';
import snippets from '@/mixins/snippets';

const TypeOptions = [
  {
    label: 'Single-line list',
    value: 1
  },
  {
    label: 'Two-line list',
    value: 2
  }
];

const BeforeTextOptions = [
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

const AfterTextOptions = [
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
      // hero
      TypeOptions,
      BeforeTextOptions,
      AfterTextOptions,
      typeOption: 1,
      beforeText: 0,
      afterText: 0,
      // demo
      selectedIndex: 0,
      checkedValues: [],
      checkedValue: 'dog',
      items: [],
      items1: [],
      items2: [],
      items3: []
    };
  },
  created() {
    this.initDocs('list', {
      code: 8,
      apis: ['list', 'list-item', 'list-divider', 'list-group'],
      css: true
    });

    setTimeout(() => {
      this.selectedIndex = 1;
      this.items = [1, 2, 3];
      this.items1 = [
        {
          icon: 'wifi',
          text: 'Wi-Fi'
        },
        {
          icon: 'bluetooth',
          text: 'Bluetooth'
        },
        {
          icon: 'data_usage',
          text: 'Data Usage'
        }
      ];
      this.items2 = [
        {
          icon: 'inbox',
          text: 'Inbox'
        },
        {
          icon: 'star',
          text: 'Star'
        },
        {
          icon: 'send',
          text: 'Send'
        },
        {
          icon: 'drafts',
          text: 'Drafts'
        }
      ];
      this.items3 = [
        {
          icon: 'folder',
          text: 'Dog Photos',
          subtext: '9 Jan 2018',
          value: 'dog'
        },
        {
          icon: 'folder',
          text: 'Cat Photos',
          subtext: '22 Dec 2017',
          value: 'cat'
        },
        '-',
        {
          icon: 'folder',
          text: 'Potatoes',
          subtext: '30 Noc 2017',
          value: 'potato'
        },
        {
          icon: 'folder',
          text: 'Carrots',
          subtext: '17 Oct 2017',
          value: 'carrot'
        }
      ];
    }, 1000);
  }
};
</script>
