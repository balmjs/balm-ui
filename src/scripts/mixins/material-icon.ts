import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    materialIcon(): string | false {
      return this.icon || false;
    }
  },
  methods: {
    getIconClassName(...componentIconClass: string[]) {
      return ['material-icons', ...componentIconClass];
    }
  }
});
