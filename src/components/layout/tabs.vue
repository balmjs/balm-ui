<template>
  <div :class="className">
    <div class="mdl-tabs__tab-bar">
      <a v-for="(item, index) in tab"
        :class="['mdl-tabs__tab', isActive(index)]"
        :href="`#${name}${index}`">{{ item }}</a>
    </div>
    <div v-for="(item, index) in panel"
      :class="['mdl-tabs__panel', isActive(index)]"
      :id="`${name}${index}`">
      <slot :name="`panel${index}`">
        <code v-text="getPanelTemplate(index)"></code>
      </slot>
    </div>
  </div>
</template>

<script>
import '../../styles/tabs/tabs';

export default {
  name: 'ui-tabs',
  props: {
    name: {
      type: String,
      default: 'tab'
    },
    tab: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    panel: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    // Applies ripple click effect
    effect: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-tabs': true,
        'mdl-js-tabs': true,
        'mdl-js-ripple-effect': this.effect
      };
    }
  },
  methods: {
    isActive(index) {
      return {
        'is-active': index === 0
      };
    },
    getPanelTemplate(index) {
      return `<template slot="panel${index}"></template>`;
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el);
  }
};
</script>
