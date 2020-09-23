<template>
  <ui-menu-anchor class="switch-theme">
    <ui-button
      ref="colorButton"
      title="Change theme colors"
      data-theme="baseline"
      @click="open = true"
    >
      <i class="demo-theme-color-radio">
        <span class="demo-theme-color-radio__inner"></span>
      </i>
    </ui-button>

    <ui-menu v-model="open" class="demo-theme-menu" @selected="onSelected">
      <ui-menuitem
        v-for="(item, index) in themeColorList"
        :key="index"
        :class="{
          'demo-theme-menu__list-item--selected': selectedTheme === item.value
        }"
        :data-theme="item.value"
      >
        <ui-menuitem-icon>
          <i class="demo-theme-color-radio">
            <span class="demo-theme-color-radio__inner"></span>
          </i>
        </ui-menuitem-icon>
        {{ item.label }}
      </ui-menuitem>
    </ui-menu>
  </ui-menu-anchor>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from 'vue';
import { useTheme, useStore } from 'balm-ui';

const themeColorList = [
  {
    label: 'Baseline (default)',
    value: 'baseline'
  },
  {
    label: 'Dark background (custom)',
    value: 'dark'
  },
  {
    label: 'Black primary (custom)',
    value: 'black'
  },
  {
    label: 'Shrine (custom)',
    value: 'shrine'
  }
];

const useSwitchTheme = () => {
  const state = reactive({
    open: false,
    selectedTheme: 'baseline'
  });

  const theme = useTheme();
  const store = useStore();

  function onSelected(data) {
    let themeValue = themeColorList[data.index].value;
    let primary;
    let secondary;

    switch (themeValue) {
      case 'dark':
        primary = '#ffd54f';
        secondary = '#ec407a';
        break;
      case 'black':
        primary = '#212121';
        secondary = '#64dd17';
        break;
      case 'shrine':
        primary = '#fcb8ab';
        secondary = '#feeae6';
        break;
      default:
        primary = '#6200ee';
        secondary = '#018786';
    }

    if (themeValue === 'shrine') {
      theme.colors = {
        primary,
        secondary,
        'on-primary': '#442b2d',
        'on-secondary': '#442b2d'
      };
    } else {
      theme.colors = {
        primary,
        secondary
      };
    }

    store.getTheme();

    state.selectedTheme = themeValue;

    onMounted(() => {
      const colorButtonEl = ref('colorButton').value;
      console.log('colorButtonEl', colorButtonEl);
      colorButtonEl.dataset.theme = themeValue;
    });
  }

  return {
    ...toRefs(state),
    onSelected
  };
};

export default {
  setup() {
    return {
      themeColorList,
      ...useSwitchTheme()
    };
  }
};
</script>
