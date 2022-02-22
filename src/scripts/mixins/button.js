import { watch, onMounted } from 'vue';
import { useRipple } from './ripple';

function useButton(elementRef, props, { emit }) {
  onMounted(() => {
    const element = elementRef.value;

    useRipple(element);

    watch(
      () => props.type,
      () => useRipple(element)
    );
  });

  function handleClick(event) {
    emit('click', event);
  }

  return {
    handleClick
  };
}

export { useButton };
