import { defineComponent, reactive, onMounted } from 'vue';
import isElement from '../utils/element';

function getCurrentElement(el: any): HTMLElement | null {
  return isElement(el) ? el : (el as HTMLElement).nextElementSibling;
}

interface ElementObject {
  el: HTMLElement | null;
}

export default defineComponent({
  data() {
    return {
      el: null
    } as ElementObject;
  },
  mounted() {
    this.el = getCurrentElement(this.$el);
  }
});

export { getCurrentElement };
