import { watch, onMounted } from 'vue';
import { useRipple } from './ripple';

function useButton(elementRef, props) {
  onMounted(() => {
    const element = elementRef.value;

    useRipple(element);

    watch(
      () => props.type,
      () => useRipple(element)
    );
  });
}

export { useButton };
