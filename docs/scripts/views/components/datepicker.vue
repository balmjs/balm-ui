<template>
  <docs-page name="datepicker" demo-count="6" withoutCss>
    <template #hero>
      <ui-datepicker v-model="date" placeholder="Select Date.."></ui-datepicker>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Basic + default icon</h6>
      <div class="demo">
        <ui-datepicker
          v-model="date1"
          :config="config1"
          placeholder="Select Date.."
          toggle
          clear
        ></ui-datepicker>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">2. DateTime + custom icon</h6>
      <div class="demo">
        <ui-datepicker
          v-model="date2"
          :config="config2"
          placeholder="Select Datetime.."
          toggle
          clear
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
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">3. Selecting multiple dates</h6>
      <div class="demo">
        <ui-datepicker
          v-model="date3"
          :config="config3"
          placeholder="Select Multi Date.."
        ></ui-datepicker>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">
        4. Simple range calendar (Customized rangepicker:
        <router-link :to="{ name: 'data-input.rangepicker' }"
          >&lt;ui-rangepicker&gt;</router-link
        >)
      </h6>
      <div class="demo">
        <ui-datepicker
          v-model="date4"
          :config="config4"
          placeholder="Select Date Range.."
        ></ui-datepicker>
      </div>
      <ui-snippet :code="$store.demos[4]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">5. Month select</h6>
      <div class="demo">
        <ui-datepicker
          v-model="date5"
          :config="config5"
          :month-options="monthOptions"
          placeholder="Select Month.."
        ></ui-datepicker>
      </div>
      <ui-snippet :code="$store.demos[5]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">6. Time picker</h6>
      <div class="demo">
        <ui-datepicker
          v-model="date6"
          :config="config6"
          placeholder="Select Time.."
        ></ui-datepicker>
      </div>
      <ui-snippet :code="$store.demos[6]"></ui-snippet>
    </section>
  </docs-page>
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
        // locale: lang.zh
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
        // locale: this.pickerLang.cn
      },
      date4: ['2017-11-10', '2017-11-20'],
      config5: {
        mode: 'month'
      },
      date5: 'July 2020',
      monthOptions: {
        shorthand: true, //defaults to false
        dateFormat: 'm.y', //defaults to "F Y"
        altFormat: 'F Y' //defaults to "F Y"
      },
      date6: '13:20',
      config6: {
        mode: 'time'
        // time_24hr: true
      }
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
