<template>
  <div :class="[$tt('body1'), 'demo--dialog']">
    <header class="hero component">
      <div class="hero-demo">
        <ui-dialog
          v-if="typeOption === 0"
          noBackdrop
          :stacked="!!buttonOption"
          class="hero-dialog mdc-dialog--open"
        >
          <ui-dialog-title v-if="hasTitle">Dialog header</ui-dialog-title>
          <ui-dialog-content>
            <p>Dialog body text</p>
          </ui-dialog-content>
          <ui-dialog-actions>
            <ui-button>Action1</ui-button>
            <ui-button>Action2</ui-button>
          </ui-dialog-actions>
        </ui-dialog>
        <ui-dialog
          v-if="typeOption === 1"
          noBackdrop
          class="hero-dialog mdc-dialog--open"
        >
          <ui-dialog-title>Dialog header</ui-dialog-title>
          <ui-dialog-content>
            <ui-list avatar singleSelection v-model="heroSelectedIndex">
              <ui-item v-for="i in 3" :key="i">
                <ui-item-first-content>
                  <ui-icon size="48">account_circle</ui-icon>
                </ui-item-first-content>
                <ui-item-text-content>Item {{ i }}</ui-item-text-content>
              </ui-item>
            </ui-list>
          </ui-dialog-content>
        </ui-dialog>
        <ui-dialog
          v-if="typeOption === 2"
          noBackdrop
          scrollable
          :stacked="!!buttonOption"
          class="demo-confirmation-dialog hero-dialog mdc-dialog--open"
        >
          <ui-dialog-title>Dialog header</ui-dialog-title>
          <ui-dialog-content>
            <div>
              <ui-form-field v-for="i in 4" :key="i" block>
                <ui-radio
                  name="hero-radio"
                  :id="`hero-radio${i}`"
                  :value="i"
                ></ui-radio>
                <label :for="`hero-radio${i}`">Item {{ i }}</label>
              </ui-form-field>
            </div>
          </ui-dialog-content>
          <ui-dialog-actions>
            <ui-button>Action1</ui-button>
            <ui-button>Action2</ui-button>
          </ui-dialog-actions>
        </ui-dialog>
      </div>
      <div class="hero-options">
        <ui-select
          class="hero-option"
          :options="TypeOptions"
          v-model="typeOption"
          >Type</ui-select
        >
        <div class="hero-option">
          <ui-form-field v-if="typeOption === 0">
            <ui-checkbox
              id="hero-checkbox-title"
              value="1"
              v-model="hasTitle"
            ></ui-checkbox>
            <label for="hero-checkbox-title">Title</label>
          </ui-form-field>
          <span v-if="typeOption === 1"
            >Selected Index: {{ heroSelectedIndex }}</span
          >
          <template v-else>
            <ui-form-field v-for="item in ButtonOptions" :key="item.value">
              <ui-radio
                :id="`hero-button${item.value}`"
                name="dialog-button"
                :value="item.value"
                v-model="buttonOption"
              ></ui-radio>
              <label :for="`hero-button${item.value}`">{{ item.label }}</label>
            </ui-form-field>
          </template>
        </div>
      </div>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <section class="example">
        <ui-button raised @click="$balmUI.onOpen('open')"
          >Show Dialog</ui-button
        >
        <ui-snippet :code="code[1]"></ui-snippet>
      </section>

      <section class="example">
        <ui-button raised @click="$balmUI.onShow('open2')"
          >Show Scrolling Dialog</ui-button
        >
        <ui-snippet :code="code[2]"></ui-snippet>
      </section>

      <ui-dialog v-model="open" @confirm="onConfirm">
        <ui-dialog-title>Use Google's location service?</ui-dialog-title>
        <ui-dialog-content>
          <p>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </p>
        </ui-dialog-content>
        <ui-dialog-actions></ui-dialog-actions>
      </ui-dialog>

      <ui-dialog scrollable v-model="open2" @confirm="onConfirm">
        <ui-dialog-title>Choose a Ringtone</ui-dialog-title>
        <ui-dialog-content>
          <ui-list>
            <ui-item v-for="(item, index) in list" :key="index">{{
              item
            }}</ui-item>
          </ui-list>
        </ui-dialog-content>
        <ui-dialog-actions></ui-dialog-actions>
      </ui-dialog>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs.dialog"></ui-markdown>
      <ui-markdown :text="docs['dialog-title']"></ui-markdown>
      <ui-markdown :text="docs['dialog-content']"></ui-markdown>
      <ui-markdown :text="docs['dialog-actions']"></ui-markdown>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-markdown :text="docs.css"></ui-markdown>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

const TypeOptions = [
  {
    label: 'Alert',
    value: 0
  },
  {
    label: 'Simple',
    value: 1
  },
  {
    label: 'Confirmation',
    value: 2
  }
];

const ButtonOptions = [
  {
    label: 'Side by side',
    value: 0
  },
  {
    label: 'Stacked',
    value: 1
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Dialog'
  },
  mixins: [snippets],
  data() {
    return {
      // hero
      TypeOptions,
      ButtonOptions,
      typeOption: 0,
      hasTitle: true,
      buttonOption: 0,
      heroSelectedIndex: -1,
      // demo
      open: false,
      open2: false,
      list: [
        'None',
        'Callisto',
        'Ganymede',
        'Luna',
        'Marimba',
        'Schwifty',
        'Callisto',
        'Ganymede',
        'Luna',
        'Marimba',
        'Schwifty'
      ]
    };
  },
  created() {
    this.initDocs('dialog', {
      code: 2,
      apis: ['dialog', 'dialog-title', 'dialog-content', 'dialog-actions'],
      css: true
    });
  },
  methods: {
    onConfirm(result) {
      if (result) {
        console.log('ok');
      } else {
        console.log('cancel');
      }
    }
  }
};
</script>
