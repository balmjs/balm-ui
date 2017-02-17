<template>
  <div class="docs-datepicker">
    <div class="component-title">
      <h3>DatePicker</h3>
    </div>

    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>Basic example</h4>
    <div class="snippet-demo">
      <ui-datepicker :config="config1" :model="date1" placeholder="Select Date.."
        toggle @change="onChange('date1', $event)">
        <i slot="toggle" class="fa fa-calendar"></i>
      </ui-datepicker>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>Make it a datetime picker</h4>
    <div class="snippet-demo">
      <ui-datepicker :config="config2" :model="date2" placeholder="Select Datetime.."
        toggle clear @change="onChange('date2', $event)">
        <template slot="toggle">
          <i class="fa fa-calendar"></i>
        </template>
        <template slot="clear">
          <i class="fa fa-close"></i>
        </template>
      </ui-datepicker>
    </div>
    <ui-markdown :text="code[2]"></ui-markdown>

    <h4>Selecting a Range of Dates</h4>
    <div class="snippet-demo">
      <ui-datepicker :config="config3" :model="date3" placeholder="Select Date Range.."
        @change="onChange('date3', $event)"></ui-datepicker>
    </div>
    <ui-markdown :text="code[3]"></ui-markdown>

    <h4>Selecting Multiple Dates</h4>
    <div class="snippet-demo">
      <ui-datepicker :config="config4" :model="date4" placeholder="Select Multi Date.."
        @change="onChange('date4', $event)" ></ui-datepicker>
    </div>
    <ui-markdown :text="code[4]"></ui-markdown>

    <ui-apidoc name="datepicker"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      config1: {
        defaultDate: 'today',
        // locale: this.flatpickrLang.cn
      },
      date1: '',
      config2: {
        enableTime: true
      },
      date2: '',
      config3: {
        mode: 'range'
      },
      date3: '',
      config4: {
        mode: 'multiple'
      },
      date4: ''
    };
  },
  methods: {
    onChange(field, value) {
      this[field] = value;
    }
  },
  created() {
    this.showCode('datepicker', 5);
  }
};
</script>
