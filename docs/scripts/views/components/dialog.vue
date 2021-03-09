<template>
  <docs-page
    name="dialog"
    demo-count="3"
    :apis="[
      'ui-dialog',
      'dialog',
      'dialog-title',
      'dialog-content',
      'dialog-actions'
    ]"
  >
    <template #hero>
      <div class="hero-demo">
        <ui-dialog
          v-if="typeOption === 0"
          no-backdrop
          :stacked="!!buttonOption"
          class="hero-dialog mdc-dialog--open"
        >
          <ui-dialog-title
            v-if="hasTitle"
            :class="$theme.getTextClass('primary', $store.theme)"
          >
            Dialog header
          </ui-dialog-title>
          <ui-dialog-content
            :class="$theme.getTextClass('secondary', $store.theme)"
          >
            <p>Dialog body text</p>
          </ui-dialog-content>
          <ui-dialog-actions>
            <ui-button>Action1</ui-button>
            <ui-button>Action2</ui-button>
          </ui-dialog-actions>
        </ui-dialog>
        <ui-dialog
          v-if="typeOption === 1"
          no-backdrop
          class="hero-dialog mdc-dialog--open"
        >
          <ui-dialog-title
            :class="$theme.getTextClass('primary', $store.theme)"
          >
            Dialog header
          </ui-dialog-title>
          <ui-dialog-content>
            <ui-list
              v-model="heroSelectedIndex"
              avatar
              single-selection
              :class="$theme.getTextClass('secondary', $store.theme)"
            >
              <ui-item v-for="i in 3" :key="i">
                <ui-item-first-content
                  :class="$theme.getTextClass('secondary', $store.theme)"
                >
                  <ui-icon size="48">account_circle</ui-icon>
                </ui-item-first-content>
                <ui-item-text-content>Item {{ i }}</ui-item-text-content>
              </ui-item>
            </ui-list>
          </ui-dialog-content>
        </ui-dialog>
        <ui-dialog
          v-if="typeOption === 2"
          no-backdrop
          scrollable
          :stacked="!!buttonOption"
          class="demo-confirmation-dialog hero-dialog mdc-dialog--open"
        >
          <ui-dialog-title
            :class="$theme.getTextClass('primary', $store.theme)"
          >
            Dialog header
          </ui-dialog-title>
          <ui-dialog-content>
            <ui-form>
              <ui-form-field v-for="i in 4" :key="i">
                <ui-radio
                  name="hero-radio"
                  :input-id="`hero-radio${i}`"
                  :value="i"
                ></ui-radio>
                <label
                  :for="`hero-radio${i}`"
                  :class="$theme.getTextClass('secondary', $store.theme)"
                >
                  Item {{ i }}
                </label>
              </ui-form-field>
            </ui-form>
          </ui-dialog-content>
          <ui-dialog-actions>
            <ui-button>Action1</ui-button>
            <ui-button>Action2</ui-button>
          </ui-dialog-actions>
        </ui-dialog>
      </div>
      <div class="hero-options">
        <ui-select
          v-model="typeOption"
          class="hero-option"
          :options="TypeOptions"
        >
          Type
        </ui-select>
        <div class="hero-option">
          <ui-form-field v-if="typeOption === 0">
            <ui-checkbox
              id="hero-checkbox-title"
              v-model="hasTitle"
              value="1"
            ></ui-checkbox>
            <label for="hero-checkbox-title">Title</label>
          </ui-form-field>
          <span v-if="typeOption === 1">
            Selected Index: {{ heroSelectedIndex }}
          </span>
          <template v-else>
            <ui-form-field v-for="item in ButtonOptions" :key="item.value">
              <ui-radio
                v-model="buttonOption"
                :input-id="`hero-button${item.value}`"
                name="dialog-button"
                :value="item.value"
              ></ui-radio>
              <label :for="`hero-button${item.value}`">{{ item.label }}</label>
            </ui-form-field>
          </template>
        </div>
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <ui-button raised @click="balmUI.onOpen('open')">Show dialog</ui-button>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <ui-button raised @click="balmUI.onShow('open2')">
          Show scrolling dialog
        </ui-button>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <ui-button raised @click="balmUI.onShow('open3')">
          Show full-screen dialog
        </ui-button>
        <p>
          Note: Full-screen dialogs are intended for mobile/small-screen
          devices. The dialog's size will adapt to the screen size, and so
          becomes modal if used on larger screen sizes.
        </p>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>

    <ui-dialog v-model="open" @confirm="onConfirm">
      <ui-dialog-title>Use Google's location service?</ui-dialog-title>
      <ui-dialog-content>
        <p>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </p>
      </ui-dialog-content>
      <ui-dialog-actions></ui-dialog-actions>
    </ui-dialog>

    <ui-dialog v-model="open2" scrollable @confirm="onConfirm">
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

    <ui-dialog v-model="open3" fullscreen>
      <ui-dialog-title>Full-Screen Dialog Title</ui-dialog-title>
      <ui-dialog-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque
        metus dapibus, maximus massa pulvinar, commodo nunc. Quisque vitae
        luctus lectus, ut tempus ipsum. Sed suscipit gravida scelerisque. Aenean
        vulputate elementum est, quis consectetur orci consectetur ac. Quisque
        accumsan vel nisi id dapibus. Suspendisse nec urna eu massa ornare
        rutrum. Vivamus at nisi sit amet nulla pretium volutpat sit amet in
        justo. Donec mi metus, interdum ac tincidunt at, vehicula vitae nisl.
        Morbi fermentum dapibus massa, nec lobortis massa vestibulum eu.
      </ui-dialog-content>
      <ui-dialog-actions>
        <ui-button @click="balmUI.onHide('open3')">OK</ui-button>
      </ui-dialog-actions>
    </ui-dialog>
  </docs-page>
</template>

<script>
import { useEvent } from 'balm-ui';

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
  setup() {
    const balmUI = useEvent();

    return {
      balmUI
    };
  },
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
      ],
      open3: false
    };
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
