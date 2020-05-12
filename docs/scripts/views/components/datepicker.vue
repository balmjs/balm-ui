<template>
  <ui-page name="datepicker" demoCount="4" withoutCss>
    <template #hero>
      <ui-datepicker placeholder="Select Date.." v-model="date"></ui-datepicker>
    </template>

    <!-- Content -->
    <div class="example">
      <h6 :class="$tt('headline6')">1.1 Basic + default icon</h6>
      <ui-datepicker
        placeholder="Select Date.."
        toggle
        clear
        :config="config1"
        v-model="date1"
      ></ui-datepicker>
    </div>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>

    <div class="example">
      <h6 :class="$tt('headline6')">2. DateTime + custom icon</h6>
      <ui-datepicker
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
    <ui-snippet :code="$store.demos[2]"></ui-snippet>

    <div class="example">
      <h6 :class="$tt('headline6')">3. Selecting multiple dates</h6>
      <ui-datepicker
        placeholder="Select Multi Date.."
        :config="config3"
        v-model="date3"
      ></ui-datepicker>
    </div>
    <ui-snippet :code="$store.demos[3]"></ui-snippet>

    <div class="example">
      <h6 :class="$tt('headline6')">
        4. Simple range calendar (Customized rangepicker:
        <router-link :to="{ name: 'data-input.rangepicker' }"
          >&lt;ui-rangepicker&gt;</router-link
        >)
      </h6>
      <ui-datepicker
        placeholder="Select Date Range.."
        :config="config4"
        v-model="date4"
      ></ui-datepicker>
    </div>
    <ui-snippet :code="$store.demos[4]"></ui-snippet>
  </ui-page>
</template>

<script>
// import lang from 'flatpickr/dist/l10n/zh.js';

export default {
  metaInfo: {
    titleTemplate: '%s - <ui-datepicker>'
  },
  data() {
    return {
      // hero
      date: '',
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
  mounted() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    setTimeout(() => {
      this.date = `${year}-${month}-${day}`;
    }, 1e3);
  }
};
</script>
