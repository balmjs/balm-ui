<template>
  <div :class="[$tt('body1'), 'demo--datepicker']">
    <header class="hero component">
      <ui-datepicker noLabel placeholder="Select Date.."></ui-datepicker>
    </header>

    <ui-toc-affix withoutCss></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <div class="example">
        <h6 :class="$tt('headline6')">1.1 Basic + default icon</h6>
        <ui-datepicker
          noLabel
          placeholder="Select Date.."
          toggle
          clear
          :config="config1"
          v-model="date1"
        ></ui-datepicker>
      </div>
      <ui-snippet :code="code[1]"></ui-snippet>

      <div class="example">
        <h6 :class="$tt('headline6')">2. DateTime + custom icon</h6>
        <ui-datepicker
          noLabel
          placeholder="Select Datetime.."
          toggle
          clear
          :config="config2"
          v-model="date2"
        >
          <template #toggle>
            <i class="fa fa-calendar"></i>
          </template>
          <template #clear>
            <i class="fa fa-close"></i>
          </template>
        </ui-datepicker>
      </div>
      <ui-snippet :code="code[2]"></ui-snippet>

      <div class="example">
        <h6 :class="$tt('headline6')">3. Selecting multiple dates</h6>
        <ui-datepicker
          noLabel
          placeholder="Select Multi Date.."
          :config="config3"
          v-model="date3"
        ></ui-datepicker>
      </div>
      <ui-snippet :code="code[3]"></ui-snippet>

      <div class="example">
        <h6 :class="$tt('headline6')">
          4. Simple range calendar (Customized rangepicker:
          <router-link :to="{ name: 'data-entry.rangepicker' }"
            >&lt;ui-rangepicker&gt;</router-link
          >)
        </h6>
        <ui-datepicker
          noLabel
          placeholder="Select Date Range.."
          :config="config4"
          v-model="date4"
        ></ui-datepicker>
      </div>
      <ui-snippet :code="code[4]"></ui-snippet>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs.datepicker"></ui-markdown>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - <ui-datepicker>'
  },
  mixins: [snippets],
  data() {
    return {
      // demo
      config1: {
        defaultDate: 'today'
        // locale: this.flatpickrLang.cn
      },
      date1: '',
      config2: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i'
      },
      date2: '',
      config3: {
        mode: 'multiple'
      },
      date3: ['2017-11-05', '2017-11-15', '2017-11-25'],
      config4: {
        mode: 'range'
      },
      date4: ['2017-11-10', '2017-11-20']
    };
  },
  created() {
    this.initDocs('datepicker', {
      code: 4,
      apis: ['datepicker']
    });
  }
};
</script>
