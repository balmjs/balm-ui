<template>
  <docs-page name="snackbar" demo-count="1">
    <template #hero>
      <ui-snackbar class="mdc-snackbar--open">
        Message sent
        <template #action="{ actionClass }">
          <ui-button :class="actionClass">Action</ui-button>
        </template>
      </ui-snackbar>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <ui-form class="demo-controls">
        <label>Timeout: {{ timeout }}second</label>
        <ui-form-field>
          <ui-slider
            ref="slider"
            v-model="timeout"
            type="discrete"
            min="4"
            max="10"
          ></ui-slider>
        </ui-form-field>
        <ui-form-field>
          <ui-textfield v-model="message">Message Text</ui-textfield>
        </ui-form-field>
        <ui-form-field>
          <ui-textfield v-model="actionText">Action Text</ui-textfield>
        </ui-form-field>
        <ui-form-field>
          <ui-checkbox
            v-model="actionType"
            input-id="action-type"
          ></ui-checkbox>
          <label for="action-type">Icon Button Action</label>
        </ui-form-field>
        <ui-form-field>
          <label>Toast Position:</label>
          <ui-form-field
            v-for="name in ['bottom', 'center', 'top']"
            :key="name"
          >
            <ui-radio
              v-model="position"
              :input-id="`position-${name}`"
              :value="name"
            ></ui-radio>
            <label :for="`position-${name}`">{{ name }}</label>
          </ui-form-field>
        </ui-form-field>
      </ui-form>
      <div class="demo">
        <ui-button raised @click="open = true">Show Snackbar</ui-button>

        <ui-snackbar
          v-model="open"
          :timeout-ms="timeout * 1e3"
          :message="message"
          :action-button-text="actionText"
          :action-type="actionType ? 1 : 0"
          :position="position"
        ></ui-snackbar>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
import { ref, onMounted, reactive, toRefs } from 'vue';

const state = reactive({
  // demo
  open: false,
  timeout: 5,
  message: 'Hello Snackbar',
  actionText: 'close',
  actionType: false,
  position: 'bottom'
});

export default {
  metaInfo: {
    titleTemplate: '%s - Snackbar'
  },
  setup() {
    const slider = ref(null);

    onMounted(() => {
      setTimeout(() => {
        slider.value.recompute();
      }, 300);
    });

    return {
      slider,
      ...toRefs(state)
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.slider.recompute();
    });
  },
  methods: {
    actionHandler() {
      console.log('hello');
    }
  }
};
</script>
